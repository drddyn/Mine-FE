import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            // 모든 요청 헤더에 Authorization 추가
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response, // 성공 시 그대로 반환
    async (error) => {
        const originalRequest = error.config

        // 401 에러(만료)이고, 이미 재시도한 요청이 아닐 때 실행
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem('refreshToken')

                // 스웨거에 나온 형식대로 리프레시 요청 보냄
                const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`, {
                    refreshToken: refreshToken,
                })

                // 새 토큰 저장
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)

                // 실패했던 원래 요청의 헤더를 새 토큰으로 교체 후 재시도
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
                return axiosInstance(originalRequest)
            } catch (refreshError) {
                // 리프레시 토큰마저 만료된 경우 로그아웃 처리
                localStorage.clear()
                window.location.href = '/login'
                alert('로그인이 만료되었습니다')
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

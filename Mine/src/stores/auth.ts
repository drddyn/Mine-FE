import { create } from 'zustand'

interface AuthState {
    isLoggedIn: boolean
    // 로그인 액션 (토큰을 받아서 저장하고 상태 변경)
    login: (token: string) => void
    // 로그아웃 액션 (토큰 지우고 상태 변경)
    logout: () => void
    // 새로고침 시 상태 복구를 위한 함수 (선택 사항)
    checkLoginStatus: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    //Next.js(SSR) 에러를 막기 위해 window 객체 확인 후 로컬스토리지 체크
    isLoggedIn: typeof window !== 'undefined' ? !!localStorage.getItem('accessToken') : false,

    login: (token) => {
        localStorage.setItem('accessToken', token)
        set({ isLoggedIn: true })
    },

    logout: () => {
        localStorage.removeItem('accessToken')
        set({ isLoggedIn: false })
    },
    //앱 초기화 시 실행(필요 시 App 최상단에서 한 번 호출)
    checkLoginStatus: () => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
        set({ isLoggedIn: !!token })
    },
}))

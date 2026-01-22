import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AuthorizationDto, ResponseAuthorization } from '../types/user'
import { useNavigate } from 'react-router-dom'
import { postAuthorization } from '../api/auth'

export default function usePostAuthorization() {
    // const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (loginData: AuthorizationDto) => postAuthorization(loginData),
        onSuccess: (data: ResponseAuthorization) => {
            console.log('로그인 성공!', data)
            localStorage.setItem('accessToken', data.accessToken)
            navigate('/')
        },
        onError: (error) => {
            console.log('로그인 실패:', error)
            alert('아이디 또는 비밀번호를 확인해 주세요')
        },
    })
}

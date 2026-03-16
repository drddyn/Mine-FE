import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postLogout } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

export default function usePostLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { logout } = useAuthStore()
    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: () => {
            logout()
            console.log('로그아웃 성공')
            localStorage.clear()
            queryClient.clear()
            navigate('/login')
        },
        onError: (error) => {
            console.log('로그아웃 실패:', error)
            alert('로그아웃 실패')
        },
    })
}

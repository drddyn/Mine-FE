import { useMutation } from '@tanstack/react-query'
import { postLogout } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export default function usePostLogout() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: () => {
            console.log('로그아웃 성공')
            localStorage.clear()
            navigate('/login')
        },
        onError: (error) => {
            console.log('로그아웃 실패:', error)
            alert('로그아웃 실패')
        },
    })
}

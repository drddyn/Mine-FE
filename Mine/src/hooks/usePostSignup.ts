import { useNavigate } from 'react-router-dom'
import type { SignupDto } from '../types/user'
import { useMutation } from '@tanstack/react-query'
import { postSignup } from '../api/auth'

export default function usePostSignup() {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: (signupData: SignupDto) => postSignup(signupData),
        onSuccess: (data) => {
            console.log('회원가입 성공!', data)
            navigate('/login')
        },
        onError: (error) => {
            console.log('회원가입 실패:', error)
            alert('아이디 또는 비밀번호를 확인해 주세요')
        },
    })
}

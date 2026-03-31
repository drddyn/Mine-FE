import type { AuthorizationDto, ResponseAuthorization, SignupDto } from '../types/user'
import { axiosInstance } from './axios'

export const postAuthorization = async ({ username, password }: AuthorizationDto): Promise<ResponseAuthorization> => {
    const body = {
        username: username,
        password: password,
    }
    const { data } = await axiosInstance.post('/api/auth/login', body)
    return data
}

export const postLogout = async () => {
    const { data } = await axiosInstance.post('/api/auth/logout')
    return data
}

export const postSignup = async ({ username, email, password, nickname, interests }: SignupDto) => {
    const body = {
        username: username,
        email: email,
        password: password,
        nickname: nickname,
        interests: interests,
    }
    const { data } = await axiosInstance.post('/api/auth/signup', body)
    return data
}

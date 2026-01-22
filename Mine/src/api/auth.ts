import type { AuthorizationDto, ResponseAuthorization } from '../types/user'
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
    const { data } = await axiosInstance.post('api/auth/logout')
    return data
}

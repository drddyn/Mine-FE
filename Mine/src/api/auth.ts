import type { AuthorizationDto, ResponseAuthorization } from '../types/user'
import { axiosInstance } from './aios'

export const postAuthorization = async ({ username, password }: AuthorizationDto): Promise<ResponseAuthorization> => {
    const body = {
        username: username,
        password: password,
    }
    const { data } = await axiosInstance.post('/api/auth/login', body)
    return data
}

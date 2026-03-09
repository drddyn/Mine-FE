import { axiosInstance } from './axios'

export const putInterests = async (interests: string[]) => {
    const res = await axiosInstance.put('api/interests/me', { interests })
    return res.data
}
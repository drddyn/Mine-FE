import type { ProfileDto, ResponseProfile } from '../types/user'
import { axiosInstance } from './axios'

export const getMyProfile = async (): Promise<ResponseProfile> => {
    const res = await axiosInstance.get(`/api/users/me`)
    return res.data
}

export const patchMyProfile = async (ProfileData: ProfileDto): Promise<ResponseProfile> => {
    const res = await axiosInstance.patch(`/api/users/me`, ProfileData)
    return res.data
}

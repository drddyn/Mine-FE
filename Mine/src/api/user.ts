import type { ProfileDto, ResponseProfile } from '../types/user'
import { axiosInstance } from './axios'

export const getMyProfile = async (): Promise<ResponseProfile> => {
    const res = await axiosInstance.get(`/api/users/me`)
    return res.data
}

export const patchMyProfile = async (profileData: ProfileDto): Promise<ResponseProfile> => {
    const formData = new FormData()

    formData.append('nickname', profileData.nickname)
    formData.append('username', profileData.username)

    if (profileData.profileImage instanceof File) {
        formData.append('profileImage', profileData.profileImage)
    }
    const res = await axiosInstance.patch(`/api/users/me`, formData)
    return res.data
}

export const patchVisibility = async (isPublic: boolean) => {
    const res = await axiosInstance.patch(`/api/users/me/visibility`, { isPublic })
    return res.data
}

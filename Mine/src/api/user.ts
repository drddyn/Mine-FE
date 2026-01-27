import type { MyMagazinesDto, ProfileDto, ResponseMyMagazine, ResponseProfile } from '../types/user'
import { axiosInstance } from './axios'

export const getMyMagazines = async ({ page, size, sort }: MyMagazinesDto): Promise<ResponseMyMagazine> => {
    const res = await axiosInstance.get(`/api/magazines`, {
        params: { page, size, sort },
    })
    return res.data
}

export const getMyProfile = async (): Promise<ResponseProfile> => {
    const res = await axiosInstance.get(`/api/users/me`)
    return res.data
}

export const patchMyProfile = async (ProfileData: ProfileDto): Promise<ResponseProfile> => {
    const res = await axiosInstance.patch(`/api/users/me`, ProfileData)
    return res.data
}

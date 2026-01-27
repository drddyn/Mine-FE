import type { MyMagazinesDto, ResponseMyMagazine } from '../types/user'
import { axiosInstance } from './axios'

export const getMyMagazines = async ({ page, size, sort }: MyMagazinesDto): Promise<ResponseMyMagazine> => {
    const res = await axiosInstance.get(`/api/magazines`, {
        params: { page, size, sort },
    })
    return res.data
}

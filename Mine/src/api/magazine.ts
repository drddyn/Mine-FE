import type { RequestDeleteMagazine } from '../types/magazine'
import { axiosInstance } from './axios'

export const deleteMagazine = async ({ id }: RequestDeleteMagazine) => {
    const res = await axiosInstance.delete(`/api/magazines/${id}`)
    return res.data
}

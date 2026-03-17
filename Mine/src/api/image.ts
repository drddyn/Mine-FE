import { axiosInstance } from './axios'

export const uploadImage = async (file: File): Promise<{ imageUrl: string }> => {
    const formData = new FormData()
    formData.append('file', file)
    const res = await axiosInstance.post('api/images', formData)
    return res.data
}
import { useQuery } from '@tanstack/react-query'
import type { ResponseInterestsList } from '../types/interest'
import { axiosInstance } from '../api/axios'

export default function useGetInterests() {
    return useQuery<ResponseInterestsList>({
        queryKey: ['interests'],
        queryFn: async () => {
            const { data } = await axiosInstance.get('/api/interests')
            return data
        },
    })
}

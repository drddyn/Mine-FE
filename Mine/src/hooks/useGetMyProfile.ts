import { useQuery } from '@tanstack/react-query'
import type { ResponseProfile } from '../types/user'
import { getMyProfile } from '../api/user'

export default function useGetMyProfile() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
    return useQuery<ResponseProfile>({
        queryKey: ['profile'],
        queryFn: () => getMyProfile(),
        retry: false,
        throwOnError: false,
        select: (data) => data,
        enabled: !!token,
    })
}

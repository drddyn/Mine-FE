import { useQuery } from '@tanstack/react-query'
import type { ResponseProfile } from '../types/user'
import { getMyProfile } from '../api/user'

export default function useGetMyProfile() {
    return useQuery<ResponseProfile>({
        queryKey: ['profile'],
        queryFn: () => getMyProfile(),
        retry: false,
        throwOnError: false,
        select: (data) => data,
    })
}
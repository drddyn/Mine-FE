import { useQuery } from '@tanstack/react-query'
import type { ResponseRecentSection } from '../types/magazine'
import { getRecentSection } from '../api/magazine'

export default function useGetRecentSection() {
    return useQuery<ResponseRecentSection>({
        queryKey: ['recentsections'],
        queryFn: () => getRecentSection(),
        select: (data) => data,
    })
}

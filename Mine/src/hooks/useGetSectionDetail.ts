import { useQuery } from '@tanstack/react-query'
import type { ResponseGetSectionDetail } from '../types/magazine'
import { getSectionDetail } from '../api/magazine'

export default function useGetSectionDetail(magazineId: number, sectionId: number) {
    return useQuery<ResponseGetSectionDetail>({
        queryKey: ['section', magazineId, sectionId],
        queryFn: () => getSectionDetail({ magazineId, sectionId }),
        enabled: Number.isFinite(magazineId) && Number.isFinite(sectionId),
        select: (data) => data,
    })
}

import { useQuery } from '@tanstack/react-query'
import type { ResponseMagazineDetail } from '../types/magazine'
import { getMagazineDetail } from '../api/magazine'

export default function useGetMagazineDetail(magazineId: number) {
    return useQuery<ResponseMagazineDetail>({
        queryKey: ['magazinedetail', magazineId],
        queryFn: () => getMagazineDetail(magazineId),
        enabled: Number.isFinite(magazineId),
        select: (data) => data,
    })
}

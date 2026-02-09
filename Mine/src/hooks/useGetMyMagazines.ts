import { useQuery } from '@tanstack/react-query'
import type { MyMagazinesDto, ResponseMyMagazine } from '../types/magazine'
import { getMyMagazineList } from '../api/magazine'

export default function useGetMyMagazineList({ page, size, sort }: MyMagazinesDto) {
    return useQuery<ResponseMyMagazine>({
        queryKey: ['mymagazines', page, size, sort],
        queryFn: () => getMyMagazineList({ page, size, sort }),
        select: (data) => data,
    })
}

import { useQuery } from '@tanstack/react-query'
import type { MyMagazinesDto, ResponseMyMagazine } from '../types/user'
import { getMyMagazines } from '../api/user'

export default function useGetMyMagazines({ page, size, sort }: MyMagazinesDto) {
    return useQuery<ResponseMyMagazine>({
        queryKey: ['mymagazines', page, size, sort],
        queryFn: () => getMyMagazines({ page, size, sort }),
        select: (data) => data,
    })
}

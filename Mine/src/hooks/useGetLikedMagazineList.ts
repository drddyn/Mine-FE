import { useQuery } from '@tanstack/react-query'
import type { MyMagazinesDto, ResponseMyMagazine } from '../types/magazine'
import { getLikedMagazineList } from '../api/magazine'

export default function useGetLikedMagazineList(params: MyMagazinesDto) {
    const { page, size, sort } = params

    return useQuery<ResponseMyMagazine>({
        queryKey: ['likedMagazines', page, size, sort],
        queryFn: () => getLikedMagazineList(params),
        select: (data) => data,
    })
}

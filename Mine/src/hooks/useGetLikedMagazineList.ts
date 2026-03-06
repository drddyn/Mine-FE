import { useQuery } from '@tanstack/react-query'
import type { MyMagazinesDto, ResponseMyMagazine } from '../types/magazine'
import { getLikedMagazineList } from '../api/magazine'

export default function useGetLikedMagazineList(params: MyMagazinesDto) {
    return useQuery<ResponseMyMagazine>({
        queryKey: ['likedMagazines', params],
        queryFn: () => getLikedMagazineList(params),
    })
}
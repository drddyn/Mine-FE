import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import { getSearchLikedMagazine } from '../api/magazine'
import type { SearchLikedMagazineResponse } from '../types/magazine'
import type { AxiosError } from 'axios'

export const useGetSearchLikedMagazines = (keyword: string) => {
    return useInfiniteQuery<
        SearchLikedMagazineResponse,
        AxiosError,
        InfiniteData<SearchLikedMagazineResponse>,
        [string, string],
        number
    >({
        queryKey: ['searchLikedMagazines', keyword],

        queryFn: ({ pageParam }) => getSearchLikedMagazine({ keyword, page: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.last ? undefined : lastPage.number + 1
        },

        // 키워드가 빈 문자열이 아닐 때만 API를 호출하도록 설정 (선택 사항)
        enabled: !!keyword,
    })
}

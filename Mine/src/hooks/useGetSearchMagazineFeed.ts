import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import { getSearchMagazineFeed } from '../api/magazine'
import type { SearchMagazineFeedResponse } from '../types/magazine'
import type { AxiosError } from 'axios'

export const useGetSearchMagazineFeed = (keyword: string) => {
    return useInfiniteQuery<
        SearchMagazineFeedResponse,
        AxiosError,
        InfiniteData<SearchMagazineFeedResponse>,
        [string, string],
        number
    >({
        queryKey: ['searchMagazineFeed', keyword],

        queryFn: ({ pageParam }) => getSearchMagazineFeed({ keyword, page: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.last ? undefined : lastPage.number + 1
        },

        // 키워드가 빈 문자열이 아닐 때만 API를 호출하도록 설정 (선택 사항)
        enabled: !!keyword,
    })
}

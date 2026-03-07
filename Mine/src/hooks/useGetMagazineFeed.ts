import { useInfiniteQuery } from '@tanstack/react-query'
import type { ResponseFeed } from '../types/magazine'
import { getMagazineFeed } from '../api/magazine'

export default function useGetMagazineFeed() {
    return useInfiniteQuery<ResponseFeed, Error, ResponseFeed, string[], number | null>({
        queryKey: ['magazineFeed'],
        queryFn: ({ pageParam }) => getMagazineFeed({ cursorId: pageParam }),
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage.hasNext ? lastPage.nextCursor : undefined,
    })
}
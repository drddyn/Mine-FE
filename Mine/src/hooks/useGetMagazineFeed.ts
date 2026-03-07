import { useInfiniteQuery } from '@tanstack/react-query'
import type { ResponseFeed } from '../types/magazine'
import { getMagazineFeed } from '../api/magazine'

export default function useGetMagazineFeed() {
    return useInfiniteQuery<ResponseFeed>({
        queryKey: ['magazineFeed'],
        queryFn: ({ pageParam }) => getMagazineFeed({ cursorId: pageParam as number | null }),
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage.hasNext ? lastPage.nextCursor : undefined,
    })
}
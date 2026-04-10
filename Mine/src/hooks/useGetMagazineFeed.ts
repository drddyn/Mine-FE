import { useInfiniteQuery } from '@tanstack/react-query'
import type { ResponseFeed } from '../types/magazine'
import { getMagazineFeed } from '../api/magazine'

export default function useGetMagazineFeed() {
    return useInfiniteQuery({
        queryKey: ['magazineFeed'],
        queryFn: ({ pageParam }: { pageParam: number | null }) => getMagazineFeed({ cursorId: pageParam }),
        initialPageParam: null,
        getNextPageParam: (lastPage: ResponseFeed) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
        staleTime: 1000 * 60 * 5,
    })
}

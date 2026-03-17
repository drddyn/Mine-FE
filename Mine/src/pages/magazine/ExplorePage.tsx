import { useEffect, useRef } from 'react'
import ExploreGrid from './components/ExploreGrid'
import useGetMagazineFeed from '../../hooks/useGetMagazineFeed'
import ExploreSkeleton from '../../components/skeleton/ExploreSkeleton'

export default function ExplorePage() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetMagazineFeed()
    const observerRef = useRef<HTMLDivElement>(null)

    const magazines = data?.pages.flatMap((page) => page.content) ?? []

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage()
                }
            },
            { threshold: 0.1 }
        )

        if (observerRef.current) observer.observe(observerRef.current)
        return () => observer.disconnect()
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    if (isLoading) return <ExploreSkeleton />

    return (
        <>
        <ExploreSkeleton/>
        <div className="min-h-screen pt-39.25 pb-10 px-32.75 relative">
            <ExploreGrid magazines={magazines} />
            <div ref={observerRef} className="h-10" />
            {isFetchingNextPage && <div className="text-center py-4">로딩중...</div>}
        </div></>
    )
}
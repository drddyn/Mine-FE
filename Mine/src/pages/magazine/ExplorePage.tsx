import { useEffect, useRef, useState } from 'react'
import ExploreGrid from './components/ExploreGrid'
import useGetMagazineFeed from '../../hooks/useGetMagazineFeed'
import ExploreSkeleton from '../../components/skeleton/ExploreSkeleton'
import explorebg from '../../assets/explorebg.jpg'
import useSidebarStore from '../../stores/sidebar'
import SearchInput from '../../components/common/SearchInput'

export default function ExplorePage() {
    const { isOpen } = useSidebarStore()
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetMagazineFeed()
    const [searchValue, setSearchValue] = useState('')

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
        <div
            className="min-h-screen pt-39.25 pb-10 relative bg-center bg-cover min-w-300"
            style={{
                backgroundImage: `url(${explorebg})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-gray-600-op30 pointer-events-none" />

            <div
                className="fixed top-0 left-0 w-full pointer-events-none z-10"
                style={{
                    height: '244px',
                    background:
                        'linear-gradient(180deg, rgba(255, 255, 255, 0.40) 29.51%, rgba(255, 255, 255, 0.00) 93.65%)',
                }}
            />

            <div className="fixed top-8.75 right-4.75 z-30">
                <SearchInput value={searchValue} onChange={setSearchValue} />
            </div>

            <div className="relative z-20 flex justify-center">
                <div className={`transition-all duration-200 ${isOpen ? 'ml-60' : 'ml-15'}`}>
                    <ExploreGrid magazines={magazines} />
                    <div ref={observerRef} className="h-10" />
                    {isFetchingNextPage && <div className="text-center py-4">로딩중...</div>}
                </div>
            </div>
        </div>
    )
}
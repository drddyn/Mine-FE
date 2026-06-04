import { useEffect, useRef, useState } from 'react'
import ExploreGrid from './components/ExploreGrid'
import useGetMagazineFeed from '../../hooks/useGetMagazineFeed'
import ExploreSkeleton from '../../components/skeleton/ExploreSkeleton'
import explorebg from '../../assets/explorebg.jpg'
import useSidebarStore from '../../stores/sidebar'
import SearchInput from '../../components/common/SearchInput'
import { useGetSearchMagazineFeed } from '../../hooks/useGetSearchMagazineFeed'
import { useNavigate } from 'react-router-dom'

export default function ExplorePage() {
    const { isOpen } = useSidebarStore()
    const [searchValue, setSearchValue] = useState('')

    const {
        data: magazinedata,
        fetchNextPage: magazineFetchNextPage,
        hasNextPage: magazineHasNextPage,
        isFetchingNextPage: magazineIsFetchingNextPage,
        isLoading: magazineIsLoading,
    } = useGetMagazineFeed()
    const {
        data: searchData,
        fetchNextPage: searchFetchNextPage,
        hasNextPage: searchHasNextPage,
        isFetchingNextPage: searchIsFetchingNextPage,
        isLoading: searchIsLoading,
    } = useGetSearchMagazineFeed(searchValue)

    const observerRef = useRef<HTMLDivElement>(null)

    const isSearching = searchValue.trim() !== ''

    const defaultMagazines = magazinedata?.pages.flatMap((page) => page.content) ?? []
    const searchMagazines = searchData?.pages.flatMap((page) => page.content) ?? []
    const isEmpty = searchMagazines.length === 0

    const activeMagazines = isSearching ? searchMagazines : defaultMagazines

    const activeHasNextPage = isSearching ? searchHasNextPage : magazineHasNextPage
    const activeIsFetchingNextPage = isSearching ? searchIsFetchingNextPage : magazineIsFetchingNextPage
    const activeFetchNextPage = isSearching ? searchFetchNextPage : magazineFetchNextPage
    const activeIsLoading = isSearching ? searchIsLoading : magazineIsLoading

    const navigate = useNavigate()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && activeHasNextPage && !activeIsFetchingNextPage) {
                    activeFetchNextPage()
                }
            },
            { threshold: 0.1 }
        )

        if (observerRef.current) observer.observe(observerRef.current)
        return () => observer.disconnect()
    }, [activeHasNextPage, activeIsFetchingNextPage, activeFetchNextPage])

    return (
        <div
            className="h-screen overflow-y-auto pt-39.25 pb-10 relative bg-center bg-cover min-w-300 custom-scrollbar"
            style={{
                backgroundImage: `url(${explorebg})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="fixed inset-0 bg-gray-600-op30 pointer-events-none" />

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
                    {!activeIsLoading && (
                        <>
                            <ExploreGrid magazines={activeMagazines} />
                            <div ref={observerRef} className="h-10" />
                            {activeIsFetchingNextPage && <div className="text-center py-4">로딩중...</div>}
                        </>
                    )}
                    {activeIsLoading && <ExploreSkeleton />}
                    {isEmpty && (
                        <div className="flex flex-col items-center mt-10">
                            <div className="font-regular20 text-gray-200">검색 결과가 없어요.</div>
                            <div className="font-semibold24 text-gray-100 mt-2">
                                궁금한 주제로 직접 매거진을 만들어 보세요.
                            </div>
                            <button
                                onClick={() => navigate('/')}
                                className="pointer-events-auto mt-6.5 flex justify-center items-center gap-2.5 h-9 px-10 py-3.5 rounded-[40px] border border-gray-200 font-medium16 text-gray-200 hover:bg-gray-100-op30 transition-colors duration-200"
                            >
                                매거진 생성하러 가기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

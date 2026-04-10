import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SavedMagazineItem from './components/SavedMagazineItem'
import ArrowPagination from './components/ArrowPagination'
import useGetLikedMagazineList from '../../hooks/useGetLikedMagazineList'
import SavedMagazineSkeleton from '../../components/skeleton/SavedMagazineSkeleton'
import savedbg from '../../assets/savedbg.jpg'
import useSidebarStore from '../../stores/sidebar'
import SearchInput from '../../components/common/SearchInput'
import MineLogo from '../../icon/logo_with_title.svg?react'
import type { Magazine } from '../../types/magazine'

const CARD_WIDTH = 476
const GAP = 16
const COLUMNS_PER_VIEW = 2
const COLUMN_STEP = ((CARD_WIDTH + GAP) * COLUMNS_PER_VIEW) / 2
const ITEMS_PER_COLUMN = 2
const MIN_CARDS = 4

function EmptyCard({ showButton, onButtonClick }: { showButton?: boolean; onButtonClick?: () => void }) {
    return (
        <div className="flex justify-center items-center shrink-0 w-119 h-67 border border-gray-100-op30">
            {showButton ? (
                <button
                    onClick={onButtonClick}
                    className="flex justify-center items-center gap-2.5 h-9 px-10 py-3.5 rounded-[40px] border border-gray-200 font-medium16 text-gray-200 hover:bg-gray-100-op30 transition-colors duration-200"
                >
                    매거진 추가하러 가기
                </button>
            ) : (
                <MineLogo className="w-16 text-gray-100-op40" />
            )}
        </div>
    )
}

export default function SavedMagazinePage() {
    const [columnIndex, setColumnIndex] = useState(0)
    const { isOpen } = useSidebarStore()
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const { data, isLoading, isError } = useGetLikedMagazineList({
        page: 0,
        size: 20,
        sort: ['createdAt,desc'],
    })

    if (isLoading) return <SavedMagazineSkeleton />
    if (isError) return <div>불러오기 실패</div>

    const magazines = data?.content ?? []
    const isEmpty = magazines.length === 0

    const totalSlots = Math.max(magazines.length, MIN_CARDS)
    const allItems: (Magazine | null)[] = [...magazines, ...Array(totalSlots - magazines.length).fill(null)]
    const columns = Array.from({ length: Math.ceil(allItems.length / ITEMS_PER_COLUMN) }, (_, i) =>
        allItems.slice(i * ITEMS_PER_COLUMN, i * ITEMS_PER_COLUMN + ITEMS_PER_COLUMN)
    )

    const TOTAL_COLUMNS = columns.length
    const TOTAL_PAGES = Math.ceil(TOTAL_COLUMNS / COLUMNS_PER_VIEW)
    const firstEmptyIndex = allItems.findIndex((item) => item === null)

    if (isEmpty) {
        return (
            <div
                className="relative min-h-screen bg-center bg-cover min-w-300"
                style={{
                    backgroundImage: `url(${savedbg})`,
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-gray-600-op30 pointer-events-none" />

                <div className="fixed top-8.75 right-4.75 z-30">
                    <SearchInput value={searchValue} onChange={setSearchValue} />
                </div>

                <div className="relative flex flex-col justify-center items-center w-full h-screen overflow-hidden">
                    <div className="relative">
                        <div className="flex gap-2">
                            {columns.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col gap-2 shrink-0">
                                    {col.map((_, idx) => (
                                        <EmptyCard key={`empty-${colIdx}-${idx}`} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span
                                className="font-regular20 text-gray-200"
                                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                            >
                                아직 저장한 매거진이 없어요.
                            </span>
                            <span className="font-semibold24 text-gray-100 mt-2">
                                다시 보고 싶은 매거진에 하트를 눌러주세요!
                            </span>
                            <button
                                onClick={() => navigate('/explore')}
                                className="pointer-events-auto mt-6.5 flex justify-center items-center gap-2.5 h-9 px-10 py-3.5 rounded-[40px] border border-gray-200 font-medium16 text-gray-200 hover:bg-gray-100-op30 transition-colors duration-200"
                            >
                                매거진 추가하러 가기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className="relative h-screen bg-center bg-cover w-full"
            style={{
                backgroundImage: `url(${savedbg})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-gray-600-op30 pointer-events-none" />
            <div className="fixed top-8.75 right-4.75 z-30">
                <SearchInput value={searchValue} onChange={setSearchValue} />
            </div>
            <div
                className={`relative flex flex-col justify-center h-full overflow-hidden transition-all duration-300 ${isOpen ? 'pl-76.5' : 'pl-66.5'}`}
            >
                <div className="relative flex items-center overflow-visible w-full">
                    <div
                        className="flex gap-2 transition-transform duration-500 ease-in-out will-change-transform"
                        style={{ transform: `translateX(-${columnIndex * COLUMN_STEP}px)` }}
                    >
                        {columns.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-2 shrink-0">
                                {col.map((magazine, idx) => {
                                    const flatIdx = colIdx * ITEMS_PER_COLUMN + idx
                                    const isFirstEmpty = magazine === null && flatIdx === firstEmptyIndex
                                    return magazine ? (
                                        <SavedMagazineItem key={magazine.magazineId} magazine={magazine} />
                                    ) : (
                                        <EmptyCard
                                            key={`empty-${colIdx}-${idx}`}
                                            showButton={isFirstEmpty}
                                            onButtonClick={() => navigate('/explore')}
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <ArrowPagination
                    currentPage={Math.min(columnIndex + 1, TOTAL_PAGES)}
                    totalPages={TOTAL_PAGES}
                    onNext={() => setColumnIndex((prev) => Math.min(prev + 1, TOTAL_PAGES - 1))}
                    onPrev={() => setColumnIndex((prev) => Math.max(prev - 1, 0))}
                />
            </div>
        </div>
    )
}

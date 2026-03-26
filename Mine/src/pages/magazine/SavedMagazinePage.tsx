import { useState } from 'react'
import SavedMagazineItem from './components/SavedMagazineItem'
import ArrowPagination from './components/ArrowPagination'
import useGetLikedMagazineList from '../../hooks/useGetLikedMagazineList'
import SavedMagazineSkeleton from '../../components/skeleton/SavedMagazineSkeleton'
import savedbg from '../../assets/savedbg.jpg'

const CARD_WIDTH = 476
const GAP = 16
const COLUMNS_PER_VIEW = 2
const COLUMN_STEP = (CARD_WIDTH + GAP) * COLUMNS_PER_VIEW
const ITEMS_PER_COLUMN = 2

export default function SavedMagazinePage() {
    const [columnIndex, setColumnIndex] = useState(0)

    const { data, isLoading, isError } = useGetLikedMagazineList({
        page: 0,
        size: 20,
        sort: ['createdAt,desc'],
    })

    if (isLoading) return <SavedMagazineSkeleton />
    if (isError) return <div>불러오기 실패</div>

    const magazines = data?.content ?? []

    if (magazines.length === 0) {
        return <div className="p-10">찜한 매거진이 아직 없어요.</div>
    }

    const columns = Array.from({ length: Math.ceil(magazines.length / ITEMS_PER_COLUMN) }, (_, i) =>
        magazines.slice(i * ITEMS_PER_COLUMN, i * ITEMS_PER_COLUMN + ITEMS_PER_COLUMN)
    )

    const TOTAL_COLUMNS = columns.length
    const TOTAL_PAGES = Math.ceil(TOTAL_COLUMNS / COLUMNS_PER_VIEW)

    return (
        <div
            className="relative min-h-screen overflow-x-hidden bg-center bg-cover"
            style={{
                backgroundImage: `url(${savedbg})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-gray-600-op30 pointer-events-none" />
            <div className="relative flex flex-col justify-center w-full h-screen pl-66.5">
                <div className="flex items-center overflow-visible w-full">
                    <div
                        className="flex gap-2 transition-transform duration-500 ease-in-out will-change-transform"
                        style={{ transform: `translateX(-${columnIndex * COLUMN_STEP}px)` }}
                    >
                        {columns.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-2 shrink-0">
                                {col.map((magazine) => (
                                    <SavedMagazineItem key={magazine.magazineId} magazine={magazine} />
                                ))}
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

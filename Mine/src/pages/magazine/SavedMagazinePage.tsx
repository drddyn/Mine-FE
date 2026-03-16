import { useState } from 'react'
import SavedMagazineItem from './components/SavedMagazineItem'
import ArrowPagination from './components/ArrowPagination'
import useGetLikedMagazineList from '../../hooks/useGetLikedMagazineList'
import SavedMagazineSkeleton from '../../components/skeleton/SavedMagazineSkeleton'

const CARD_WIDTH = 476
const GAP = 16
const COLUMN_STEP = CARD_WIDTH + GAP
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
    magazines.slice(i * ITEMS_PER_COLUMN, i * ITEMS_PER_COLUMN + ITEMS_PER_COLUMN),
  )

  const TOTAL_COLUMNS = columns.length

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative pt-25 pb-40 px-51.5">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-51.5 z-10" />

          <div className="relative overflow-x-visible overflow-y-visible w-full">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${columnIndex * COLUMN_STEP}px)` }}
            >
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4 shrink-0">
                  {col.map((magazine) => (
                    <SavedMagazineItem key={magazine.magazineId} magazine={magazine} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ArrowPagination
          currentPage={Math.min(columnIndex + 1, TOTAL_COLUMNS)}
          totalPages={TOTAL_COLUMNS}
          onNext={() => setColumnIndex((prev) => Math.min(prev + 1, TOTAL_COLUMNS - 1))}
          onPrev={() => setColumnIndex((prev) => Math.max(prev - 1, 0))}
        />
      </div>
    </div>
  )
}
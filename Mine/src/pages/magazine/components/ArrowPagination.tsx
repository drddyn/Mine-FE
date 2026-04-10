import ArrowIcon from '../../../icon/swipe.svg?react'
import useSidebarStore from '../../../stores/sidebar'

interface Props {
    currentPage: number
    totalPages: number
    onNext: () => void
    onPrev: () => void
}

export default function ArrowPagination({ currentPage, totalPages, onNext, onPrev }: Props) {
    const { isOpen } = useSidebarStore()
    return (
        <>
            {currentPage > 1 && (
                <button
                    onClick={onPrev}
                    className={`fixed top-[50%] left-25 -translate-y-1/2 z-20transition-all duration-300 ${isOpen && 'ml-45'}`}
                >
                    <ArrowIcon className="cursor-pointer drop-shadow-2xl" />
                </button>
            )}

            {currentPage < totalPages && (
                <button
                    onClick={onNext}
                    className="fixed top-[50%] right-15 -translate-y-1/2 z-20 transition-all duration-300"
                >
                    <ArrowIcon className="rotate-180 cursor-pointer drop-shadow-2xl" />
                </button>
            )}
        </>
    )
}

import SavedMagazineItem from './SavedMagazineItem'
import type { Magazine } from '../../../types/magazine'

interface Props {
    itemsPerPage: number
    currentPage: number
    magazines: Magazine[]
}

export default function SavedMagazineGrid({ itemsPerPage, currentPage, magazines }: Props) {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage

    const pageItems = magazines.slice(start, end)

    return (
        <div className="grid grid-rows-2 gap-4">
            {pageItems.map((magazine) => (
                <SavedMagazineItem key={magazine.magazineId} magazine={magazine} />
            ))}
        </div>
    )
}

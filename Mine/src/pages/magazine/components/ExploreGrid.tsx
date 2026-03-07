import ExploreItem from './ExploreItem'
import type { Magazine } from '../../../types/magazine'

interface ExploreGridProps {
    magazines: Magazine[]
}

export default function ExploreGrid({ magazines }: ExploreGridProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {magazines.map((magazine) => (
                <ExploreItem key={magazine.magazineId} magazine={magazine} />
            ))}
        </div>
    )
}
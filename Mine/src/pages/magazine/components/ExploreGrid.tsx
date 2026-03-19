import ExploreItem from './ExploreItem'
import type { Magazine } from '../../../types/magazine'

interface ExploreGridProps {
    magazines: Magazine[]
}

export default function ExploreGrid({ magazines }: ExploreGridProps) {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: 'repeat(3, 362px)',
                gap: '8px',
            }}
        >
            {magazines.map((magazine) => (
                <ExploreItem key={magazine.magazineId} magazine={magazine} />
            ))}
        </div>
    )
}

import ExploreItem from './ExploreItem'

const DUMMY_COUNT = 100

interface ExploreGridProps {
    startIndex?: number
}

export default function ExploreGrid({ startIndex = 0 }: ExploreGridProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: DUMMY_COUNT - startIndex }).map((_, idx) => (
                <ExploreItem key={startIndex + idx} />
            ))}
        </div>
    )
}

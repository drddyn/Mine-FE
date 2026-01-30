import ExploreItem from "./ExploreItem"

const DUMMY_COUNT = 100

export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-[362px_362px_362px] gap-4">
      {Array.from({ length: DUMMY_COUNT }).map((_, idx) => (
        <ExploreItem key={idx} />
      ))}
    </div>
  )
}

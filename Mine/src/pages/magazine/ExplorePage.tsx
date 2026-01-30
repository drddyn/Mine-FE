import ExploreGrid from "./components/ExploreGrid"

export default function ExplorePage() {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      
      {/* 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto pt-[157px] pb-10 pl-[131px] pr-[131px]">
        <ExploreGrid />
      </div>

    </div>
  )
}

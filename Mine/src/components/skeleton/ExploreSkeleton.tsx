import { SkeletonBox } from '../../components/skeleton/SkeletonBase'

export default function ExploreSkeleton() {
    return (
        <div className="w-full flex flex-col px-4 py-6 gap-6">
            {/* 검색바 영역 */}
            <SkeletonBox width="w-full" height="h-10" rounded="rounded-full" />
            
            {/* 피처드(큰 썸네일) 영역 */}
            <SkeletonBox width="w-full" height="h-56" rounded="rounded-xl" />
            
            {/* 가로 스크롤 카테고리 칩 목록 */}
            <div className="flex gap-2 overflow-hidden">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <SkeletonBox key={idx} width="w-16 shrink-0" height="h-8" rounded="rounded-full" />
                ))}
            </div>

            {/* 2열 그리드 아티클들 */}
            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        <SkeletonBox width="w-full" height="h-32" rounded="rounded-lg" />
                        <SkeletonBox width="w-3/4" height="h-4" />
                    </div>
                ))}
            </div>
        </div>
    )
}
import { SkeletonBox, SkeletonTitle } from '../../components/skeleton/SkeletonBase'

export default function SectionSkeleton() {
    return (
        <div className="w-full flex flex-col">
            {/* 상단 커버 이미지 영역 */}
            <SkeletonBox width="w-full" height="h-64" rounded="rounded-none" />
            
            <div className="w-full flex flex-col px-4 py-6 gap-6">
                {/* 제목 및 메타 텍스트 영역 */}
                <div className="flex flex-col gap-2">
                    <SkeletonTitle width="w-3/4" height="h-8" />
                    <SkeletonTitle width="w-1/3" height="h-4" />
                </div>

                {/* 내부 콘텐츠/아티클 목록 */}
                <div className="flex flex-col gap-6 mt-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <SkeletonBox width="w-full" height="h-48" rounded="rounded-lg" />
                            <SkeletonBox width="w-full" height="h-4" className="mt-2" />
                            <SkeletonBox width="w-5/6" height="h-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
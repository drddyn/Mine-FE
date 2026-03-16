import { SkeletonBox, SkeletonTitle, SkeletonAvatar } from '../../components/skeleton/SkeletonBase'

export default function SectionSkeleton() {
    return (
        <div className="w-full flex flex-col px-10 py-12 gap-16 max-w-[1000px] mx-auto">
            
            {/* 1. 상단 헤더 영역 */}
            <div className="flex w-full justify-between items-start">
                <div className="flex flex-col gap-4 mt-2">
                    <SkeletonTitle width="w-64" height="h-10" />
                    <SkeletonTitle width="w-40" height="h-6" />
                </div>
                <div className="flex flex-col items-end gap-8">
                    <SkeletonAvatar size="w-14 h-14" />
                    <SkeletonBox width="w-8" height="h-8" rounded="rounded-md" />
                </div>
            </div>

            {/* 2. 본문 상단 - 텍스트 블록 (좌: 텍스트 여러 줄, 우: 세로 이미지) */}
            <div className="flex w-full gap-10 items-start">
                <div className="flex flex-col gap-5 flex-1 pt-4">
                    <SkeletonTitle width="w-full" height="h-6" />
                    <SkeletonTitle width="w-5/6" height="h-6" />
                    <SkeletonTitle width="w-11/12" height="h-6" />
                    <SkeletonTitle width="w-4/5" height="h-6" />
                </div>
                <SkeletonBox width="w-64 shrink-0" height="h-80" rounded="rounded-lg" />
            </div>

            {/* 3. 본문 하단 - 카드 2개 가로 배치 (좌: 정사각형 이미지, 우: 텍스트 여러 줄) */}
            <div className="flex w-full gap-10 items-start">
                <SkeletonBox width="w-64 shrink-0" height="h-64" rounded="rounded-lg" />
                <div className="flex flex-col gap-5 flex-1 pt-4">
                    <SkeletonTitle width="w-full" height="h-6" />
                    <SkeletonTitle width="w-3/4" height="h-6" />
                    <SkeletonTitle width="w-5/6" height="h-6" />
                    <SkeletonTitle width="w-2/3" height="h-6" />
                </div>
            </div>
        </div>
    )
}
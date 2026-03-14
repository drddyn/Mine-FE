import { SkeletonBox, SkeletonTitle, SkeletonAvatar } from '../../components/skeleton/SkeletonBase'

export default function SidebarSkeleton() {
    return (
        <div className="absolute top-0 left-0 h-screen w-60 pb-4 bg-gray-500-op70 z-50 transition-transform duration-300">
            <div className="flex flex-col h-full gap-6">
                
                {/* 최상단 로고 및 닫기 버튼 */}
                <div className="flex gap-2 mt-8 mr-4 ml-5 items-center">
                    <SkeletonBox width="w-6 shrink-0" height="h-6" rounded="rounded" />
                    <SkeletonTitle width="w-16" height="h-6" />
                    <div className="ml-auto">
                        <SkeletonBox width="w-5" height="h-5" rounded="rounded" />
                    </div>
                </div>

                {/* 고정 메뉴 아이템들 */}
                <div className="flex flex-col gap-1">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={idx} className="w-full flex py-2 gap-3 items-center pl-5">
                            <SkeletonBox width="w-5 shrink-0" height="h-5" rounded="rounded" />
                            <SkeletonTitle width="w-24" height="h-4" />
                        </div>
                    ))}
                </div>

                {/* 최근에 열람한 섹션 */}
                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex ml-5 my-[6.5px] gap-2 items-center">
                        <SkeletonTitle width="w-28" height="h-3" />
                        <SkeletonBox width="w-3" height="h-3" rounded="rounded-sm" />
                    </div>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="w-full py-2 p-6 pr-4">
                            <SkeletonTitle width="w-full" height="h-4" />
                        </div>
                    ))}
                </div>

                {/* 내 매거진 리스트 */}
                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex ml-5 my-[6.5px] gap-2 items-center">
                        <SkeletonTitle width="w-16" height="h-3" />
                        <SkeletonBox width="w-3" height="h-3" rounded="rounded-sm" />
                    </div>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={idx} className="w-full py-2 pl-5 pr-4">
                            <SkeletonTitle width="w-full" height="h-4" />
                        </div>
                    ))}
                </div>

                {/* 하단 프로필 영역 */}
                <div className="flex justify-between mt-auto pl-6.5 pr-6 items-center">
                    <div className="flex gap-2 items-center">
                        <SkeletonAvatar size="w-7.5 h-7.5" />
                        <SkeletonTitle width="w-16" height="h-4" />
                    </div>
                    <SkeletonBox width="w-5" height="h-5" rounded="rounded-full" />
                </div>
            </div>
        </div>
    )
}
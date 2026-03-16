import { SkeletonBox, SkeletonTitle, SkeletonAvatar } from './SkeletonBase'
import useSidebarStore from '../../stores/sidebar'
import { GridContainor } from '../../pages/magazine/components/GridContainor'

export default function MagazineSkeleton() {
    const { isOpen } = useSidebarStore()

    return (
        <div className="bg-gray-200 bg-cover overflow-hidden w-full h-screen">
            <div className={`flex flex-col transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-15'}`}>
                
                {/* 상단 MagazineInfo 영역 스켈레톤 */}
                <div className="mt-9 pr-7 pl-10.5 flex w-full justify-between items-center self-stretch">
                    <div className="flex items-center gap-2 basis-100">
                        <SkeletonTitle width="w-48" height="h-7" />
                        <SkeletonBox width="w-6" height="h-6" rounded="rounded-md" />
                    </div>
                    <div className="flex items-center gap-2 basis-1 justify-center">
                        {/* 하트 아이콘 스켈레톤 */}
                        <SkeletonBox width="w-6" height="h-6" rounded="rounded-full" />
                    </div>
                    <div className="flex items-center gap-2 basis-100 justify-end">
                        <SkeletonTitle width="w-20" height="h-5" />
                        <SkeletonAvatar size="w-12.5 h-12.5" />
                    </div>
                </div>

                {/* 중앙 콘텐츠 그리드 영역 스켈레톤 */}
                <div className="flex justify-center items-start p-20 h-screen overflow-auto">
                    <GridContainor>
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <SkeletonBox key={idx} width="w-full" height="h-full min-h-[300px]" rounded="rounded-lg" />
                        ))}
                    </GridContainor>
                </div>
            </div>
        </div>
    )
}
import { SkeletonBox, SkeletonTitle, SkeletonAvatar } from '../../components/skeleton/SkeletonBase'
import useSidebarStore from '../../stores/sidebar'

export default function SectionSkeleton() {
    const { isOpen } = useSidebarStore()
    return (
        <div className="flex w-full h-screen overflow-y-hidden">
            <div className={`flex transition-all duration-300 ${isOpen ? 'w-60' : 'w-15'}`} />
            <div className="relative flex flex-1 flex-col skeleton-shimmer bg-gray-200">
                <div className="relative flex flex-col gap-14 w-275 h-full bg-gray-100 mr-70">
                    <div className="absolute top-20 -right-20 ">
                        <SkeletonBox className="w-29.75 h-8.5 z-25 " />
                    </div>

                    {/* 상단바 */}
                    <div className="flex flex-row items-center justify-between w-full px-15 pt-9">
                        <SkeletonTitle />
                        <div className="flex justify-center items-center gap-2">
                            <SkeletonTitle className="w-19.25" />
                            <SkeletonAvatar />
                        </div>
                    </div>

                    <div className="flex w-full px-17.5 gap-10 justify-between">
                        <div className="flex flex-col w-full">
                            <SkeletonTitle className="items-start w-45 h-12.5 pt-4.25" />
                            <div className="flex flex-col min-w-172.5 gap-4 pt-7.75">
                                <SkeletonTitle className="h-2 w-full" />
                                <SkeletonTitle className="h-2 w-full" />
                                <SkeletonTitle className="h-2 w-full" />
                            </div>
                        </div>
                        <SkeletonBox className="w-57.5 h-72 shrink-0" />
                    </div>
                    <div className="flex w-full px-17.5 gap-10 justify-between" dir="rtl">
                        <div className="flex flex-col w-full">
                            <SkeletonTitle className="items-start w-45 h-12.5 pt-4.25" />
                            <div className="flex flex-col min-w-172.5 gap-4 pt-7.75">
                                <SkeletonTitle className="h-2 w-full" />
                                <SkeletonTitle className="h-2 w-full" />
                                <SkeletonTitle className="h-2 w-full" />
                            </div>
                        </div>
                        <SkeletonBox className="w-57.5 h-72 shrink-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

import { SkeletonBox } from '../../components/skeleton/SkeletonBase'
import useSidebarStore from '../../stores/sidebar'

export default function SavedMagazineSkeleton() {
    const { isOpen } = useSidebarStore()
    return (
        <div className="flex w-full h-screen overflow-y-hidden ">
            <div className={`flex transition-all duration-300 ${isOpen ? 'w-60' : 'w-15'}`} />
            <div className="relative flex pl-51.5 items-center overflow-hidden ">
                <div className="grid grid-cols-3  gap-2 shrink-0">
                    <SkeletonBox className="w-119 h-67" />
                    <SkeletonBox className="w-119 h-67" />
                    <SkeletonBox className="w-119 h-67" />
                    <SkeletonBox className="w-119 h-67" />
                    <SkeletonBox className="w-119 h-67" />
                    <SkeletonBox className="w-119 h-67" />
                </div>
            </div>
        </div>
    )
}

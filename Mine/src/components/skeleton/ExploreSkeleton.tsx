import { SkeletonBox } from '../../components/skeleton/SkeletonBase'
import useSidebarStore from '../../stores/sidebar'

export default function ExploreSkeleton() {
    const { isOpen } = useSidebarStore()
    return (
        <div className="flex w-full h-screen overflow-y-hidden pt-40.25">
            <div className={`flex transition-all duration-300 ${isOpen ? 'w-60' : 'w-15'}`} />
            <div className="relative flex flex-1 justify-center overflow-hidden ">
                <div className="grid grid-cols-3 h-fit gap-2 shrink-0">
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                    <SkeletonBox className="w-90 h-60" />
                </div>
            </div>
        </div>
    )
}

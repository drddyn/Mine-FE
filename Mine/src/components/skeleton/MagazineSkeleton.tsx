import { SkeletonBox, SkeletonAvatar, SkeletonTitle } from './SkeletonBase'
import useSidebarStore from '../../stores/sidebar'

export default function MagazineSkeleton() {
    const { isOpen } = useSidebarStore()
    return (
        <div className="flex w-full h-screen overflow-y-hidden">
            <div className={`flex transition-all duration-300 ${isOpen ? 'w-60' : 'w-15'}`} />
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden">
                <div className="flex flex-row items-center justify-between w-full px-8.5 pt-9">
                    <SkeletonTitle />
                    <div className="flex justify-center items-center gap-2">
                        <SkeletonTitle className="w-19.25" />
                        <SkeletonAvatar />
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center gap-2.25">
                    <SkeletonBox className="w-101.75 h-68.5" />
                    <SkeletonBox className="w-68 h-68.5" />
                    <SkeletonBox className="w-101.75 h-68.5" />
                </div>
            </div>
        </div>
    )
}

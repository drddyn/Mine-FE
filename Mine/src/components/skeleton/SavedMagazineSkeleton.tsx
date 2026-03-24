import { SkeletonBox } from '../../components/skeleton/SkeletonBase'
import SidebarSkeleton from '../../layout/sidebar/SidebarSkeleton'

export default function SavedMagazineSkeleton() {
    return (
        <div className="flex w-full h-screen overflow-y-hidden">
            <SidebarSkeleton />

            <div className="relative h-screen justify-center pt-40.25 pl-34.75 overflow-y-hidden">
                <div className="grid grid-cols-3 h-full gap-4 shrink-0 ">
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

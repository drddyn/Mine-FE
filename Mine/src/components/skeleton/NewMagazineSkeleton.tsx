import { SkeletonBox } from './SkeletonBase'
import SidebarSkeleton from '../../layout/sidebar/SidebarSkeleton'

export default function NewMagazineSkeleton() {
    return (
        <div className="flex w-full h-screen">
            <SidebarSkeleton />
            <div className="flex-1 flex flex-col justify-center items-center gap-6">
                {/* 위 박스 */}
                <SkeletonBox width="w-[340px]" height="h-[46px]" rounded="rounded-xl" />
                {/* 아래 박스 */}
                <SkeletonBox width="w-[540px]" height="h-[60px]" rounded="rounded-full" />
            </div>
        </div>
    )
}
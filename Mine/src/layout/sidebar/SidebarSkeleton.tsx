import { SkeletonAvatar } from '../../components/skeleton/SkeletonBase'

export default function SidebarSkeleton() {
    return (
        <div className="w-15 h-202.5 shrink-0 flex flex-col justify-end items-center pb-8 border-r bg-gray-200">
            <SkeletonAvatar className="bg-gray-300 w-7.5 h-7.5" />
        </div>
    )
}

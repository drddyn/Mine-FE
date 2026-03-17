import { SkeletonAvatar } from '../../components/skeleton/SkeletonBase'

export default function SidebarSkeleton() {
    return (
        <div className="w-15 h-202.5 shrink-0 flex flex-col justify-end items-center pb-8 border-r border-gray-200">
            <SkeletonAvatar size="w-[30px] h-[30px]" className="bg-gray-300!" />
        </div>
    )
}
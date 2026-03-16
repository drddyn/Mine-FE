import { SkeletonBox } from '../../components/skeleton/SkeletonBase'

export default function BbyongBbyongSkeleton() {
    return (
        <div className="w-full px-4 py-6">
            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        <SkeletonBox width="w-full" height="h-40" rounded="rounded-lg" />
                        <SkeletonBox width="w-3/4" height="h-4" rounded="rounded" />
                        <SkeletonBox width="w-1/2" height="h-3" rounded="rounded" />
                    </div>
                ))}
            </div>
        </div>
    )
}
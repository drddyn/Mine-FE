import { SkeletonBox } from '../../components/skeleton/SkeletonBase'

export default function SavedMagazineSkeleton() {
    return (
        <div className="w-full flex flex-col gap-4 px-4 py-6">
            {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                    <SkeletonBox width="w-24 shrink-0" height="h-24" rounded="rounded-md" />
                    <div className="flex flex-col gap-2 w-full">
                        <SkeletonBox width="w-2/3" height="h-5" />
                        <SkeletonBox width="w-1/2" height="h-4" />
                        <SkeletonBox width="w-1/3" height="h-3" className="mt-2" />
                    </div>
                </div>
            ))}
        </div>
    )
}
import { SkeletonBox } from '../../components/skeleton/SkeletonBase'

export default function ExploreSkeleton() {
    return (
        <div className="flex w-full overflow-y-hidden">
            <div className="relative flex flex-1 justify-center overflow-hidden ">
                <div className="grid grid-cols-3 h-fit gap-2 shrink-0">
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                    <SkeletonBox className="w-90.5 h-60" />
                </div>
            </div>{' '}
        </div>
    )
}

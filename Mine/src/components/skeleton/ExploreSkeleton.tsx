import { SkeletonBox, SkeletonAvatar } from '../../components/skeleton/SkeletonBase'


export default function ExploreSkeleton() {
    return (
        <div className="w-full h-screen overflow-y-auto bg-white">
            <div className="relative w-full min-h-full">
                
                {/* 1. 시작 위치 설정: 좌측 199px, 상단 161px 패딩 */}
                <div className="pt-40.25 pl-49.75 pb-20">
                    
                    {/* 2. 3열 그리드 및 간격 8px 설정 */}
                    <div className="grid grid-cols-3 gap-2 w-fit">
                        {/* 3행 3열 (총 9개) */}
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <SkeletonBox 
                                key={idx} 
                                width="w-[362px]" 
                                height="h-[240px]" 
                                rounded="rounded-none" 
                            />
                        ))}
                    </div>

                    {/* 3. 하단 중앙 로딩 (그리드 너비에 맞춰 중앙 정렬) */}
                    <div className="w-[calc(362px*3+8px*2)] flex justify-center py-10">
                        <SkeletonAvatar size="w-[30px] h-[30px]" className="bg-gray-200" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
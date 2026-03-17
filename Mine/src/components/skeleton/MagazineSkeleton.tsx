import { SkeletonBox, SkeletonAvatar } from './SkeletonBase'
import useSidebarStore from '../../stores/sidebar'


export default function MagazineSkeleton() {
    const { isOpen } = useSidebarStore()

    return (
        <div className="bg-gray-100 w-full h-screen overflow-hidden">
            <div className={`flex flex-col transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-15'}`}>
                
                {/* [박스 1] 상단 바 - 1312x50 크기 유지, 양 끝 정렬 */}
                <div className="flex items-center justify-between w-328 h-12.5 mt-9 ml-23.5">
                    {/* 왼쪽 아이템 */}
                    <SkeletonBox width="w-[140px]" height="h-[14px]" rounded="rounded-sm" />

                    {/* 오른쪽 아이콘 그룹 (77x14 사각형 + 8px 간격 + 50x50 원) */}
                    <div className="flex items-center gap-2">
                        <SkeletonBox width="w-[77px]" height="h-[14px]" rounded="rounded-sm" />
                        <SkeletonAvatar size="w-[50px] h-[50px]" />
                    </div>
                </div>

                {/* [박스 2] 메인 콘텐츠 - 피그마 수치대로 배치 */}
                <div className="flex items-start mt-45.5 ml-49.5">
                    {/* 첫 번째 박스: 407x274 */}
                    <SkeletonBox width="w-[407px]" height="h-[274px]" rounded="rounded-sm" />
                    
                    {/* 두 번째 박스: 272x274 (간격 9px) */}
                    <div className="ml-2.25">
                        <SkeletonBox width="w-[272px]" height="h-[274px]" rounded="rounded-sm" />
                    </div>
                    
                    {/* 세 번째 박스: 272x274 (간격 9px) */}
                    <div className="ml-2.25">
                        <SkeletonBox width="w-[407px]" height="h-[274px]" rounded="rounded-sm" />
                    </div>
                </div>

            </div>
        </div>
    )
}
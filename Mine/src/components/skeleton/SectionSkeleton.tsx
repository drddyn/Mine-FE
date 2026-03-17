import { SkeletonBox, SkeletonTitle, SkeletonAvatar } from '../../components/skeleton/SkeletonBase'
import SidebarSkeleton from '../../layout/sidebar/SidebarSkeleton'

export default function SectionSkeleton() {
    return (
        <div className="flex w-[1440px] h-[810px] bg-white overflow-hidden">
            
            {/* 사이드바: 열림/닫힘에 따라 본문을 밀어냄 */}
            <SidebarSkeleton />

            {/* 2. 박스1 ($980 \times 719$): 사이드바로부터 60px, 상단 36px 여백 */}
            {/* 이 박스 안에 헤더와 본문이 모두 들어갑니다. */}
            <div className="flex flex-col mt-[36px] ml-[60px] w-[980px] h-[719px] shrink-0 relative">
                
                {/* [직사각형 박스]: 박스1 우측 바깥 배치 (위에서 62px, 오른쪽 7px) */}
                <div className="absolute top-[62px] left-[987px]"> 
                    <SkeletonBox width="w-[119px]" height="h-[34px]" rounded="rounded-none" />
                </div>

                {/* 2-1. 헤더 영역 (너비 980px): 동그라미 아바타 포함 */}
                <div className="flex w-full h-[50px] justify-between items-center mb-[49px]">
                    <SkeletonTitle width="w-[140px]" height="h-[14px]" rounded="rounded-none" />
                    
                    {/* 우측 정렬: 작은 바 + 동그라미 아바타 */}
                    <div className="flex items-center gap-[8px]">
                        <SkeletonBox width="w-[77px]" height="h-[14px]" rounded="rounded-none"/>
                        <SkeletonAvatar size="w-[50px] h-[50px]" />
                    </div>
                </div>

                {/* 2-2. 본문 상단 섹션 (960x293) */}
                <div className="flex w-[960px] h-[293px] gap-[40px] items-start mb-[49px]">
                    <div className="flex flex-col flex-1 gap-[16px]">
                        <SkeletonTitle width="w-[180px]" height="h-[20px]" rounded="rounded-none" />
                        <div className="flex flex-col gap-[16px]">
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none"/>
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none"/>
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none"/>
                        </div>
                        <SkeletonBox width="w-[300px]" height="h-[8px]" rounded="rounded-none"/>
                    </div>
                    {/* 우측 이미지 */}
                    <SkeletonBox width="w-[230px]" height="h-[278px]" rounded="rounded-none" className="shrink-0" />
                </div>

                {/* 2-3. 본문 하단 섹션 (960x293): 우측 정렬 */}
                <div className="flex w-[960px] h-[293px] gap-[40px] items-start">
                    {/* 좌측 이미지 */}
                    <SkeletonBox width="w-[230px]" height="h-[278px]" rounded="rounded-none" className="shrink-0" />
                    
                    <div className="flex flex-col flex-1 gap-[16px] items-end">
                        <SkeletonTitle width="w-[180px]" height="h-[20px]" rounded="rounded-none" />
                        <div className="flex flex-col gap-[16px] w-full items-end">
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none" />
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none" />
                            <SkeletonBox width="w-full" height="h-[8px]" rounded="rounded-none" />
                            <SkeletonBox width="w-[300px]" height="h-[8px]" rounded="rounded-none" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
import { SkeletonBox } from '../../components/skeleton/SkeletonBase'
import SidebarSkeleton from '../../layout/sidebar/SidebarSkeleton'

export default function SavedMagazineSkeleton() {
    return (
        <div className="flex w-full min-h-screen">
            {/* 사이드바 영역 */}
            <SidebarSkeleton />

            {/* 메인 컨텐츠 영역: 왼쪽에서 266px, 위에서 133px 떨어진 지점부터 시작 */}
            <div 
                className="flex-1" 
                style={{ 
                    paddingLeft: 'calc(266px - 256px)', // 사이드바 너비(예: 256px)를 제외한 나머지 여백
                    paddingTop: '133px' 
                }}
            >
                {/* 2행 3열 그리드, 간격 8px */}
                <div 
                    className="grid grid-cols-3 w-fit" 
                    style={{ gap: '8px' }}
                >
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <SkeletonBox 
                            key={idx} 
                            width="476px" 
                            height="268px" 
                            rounded="rounded-md" 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
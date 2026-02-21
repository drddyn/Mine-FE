import { useMagazine } from '../MagazineProvider'
import SectionIndexClose from './SectionIndexClose'
import SectionIndexOpen from './SectionIndexOpen'

interface SectionIndexListProps {
    sectionId: number
}

export default function SectionIndexList({ sectionId }: SectionIndexListProps) {
    const magazinedata = useMagazine()
    const sections = magazinedata?.sections

    return (
        /* 1. 인덱스 리스트 전체를 감싸는 컨테이너 */
        <div className="absolute flex flex-col items-start gap-2 -right-25 top-20">
            {sections?.map((section) => {
                const isOpen = section.sectionId === sectionId

                return (
                    <div key={section.sectionId} className="relative flex items-start justify-end">
                        {/* 2. 가짜 벽 (Fake Wall) */}
                        {/* Close 상태일 때만 나타나서 인덱스의 왼쪽 일부를 덮음 */}
                        {!isOpen && (
                            <div
                                className="absolute left-5 w-6 h-full bg-white z-10 "
                                style={{ transform: 'translateX(-100%)' }}
                            />
                        )}

                        {/* 3. 실제 인덱스 아이템 */}
                        <div className={`transition-all duration-300 ${isOpen ? 'z-20' : 'z-0 -mr-4 opacity-70'}`}>
                            {isOpen ? (
                                <SectionIndexOpen title={section.heading} />
                            ) : (
                                <SectionIndexClose
                                    title={section.heading}
                                    sectionId={section?.sectionId}
                                    magazineId={magazinedata?.magazineId}
                                />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

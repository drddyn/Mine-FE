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
        /* 인덱스 리스트 전체 위치는 그대로 유지 */
        <div className="absolute flex flex-col items-end gap-2 -right-25 top-20">
            {sections?.map((section) => {
                const isOpen = section.sectionId === sectionId

                return (
                    <div key={section.sectionId} className="relative flex items-center justify-end">
                        <div
                            className={`transition-[opacity, clip-path] duration-300 ease-in-out ${
                                isOpen ? 'z-20 opacity-100' : 'z-0 opacity-70'
                            }`}
                            style={{
                                /* 위치는 고정하되, '보이는 영역'만 조절 */
                                clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 0 24px)', // 숫자는 인덱스의 '가려져야 할 너비'만큼 조절
                            }}
                        >
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

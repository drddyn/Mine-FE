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
                                clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 0 20px)', 
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
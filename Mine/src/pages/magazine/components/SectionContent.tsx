import useGetSectionDetail from '../../../hooks/useGetSectionDetail'
import { useMagazine } from '../MagazineProvider'
import MagazineInfo from './MagazineInfo'
import SectionIndexList from './SectionIndexList'
import ParagraphPart from './ParagraphPart'
import useSidebarStore from '../../../stores/sidebar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import IconWandStars from '../../../icon/wand_stars.svg?react'
import ScreenSettingsModal from '../../../components/settings/ScreenSettingsModal'

interface SectionContentProps {
    sectionId: number
    magazineId: number
}

export default function SectionContent({ sectionId, magazineId }: SectionContentProps) {
    const { isOpen } = useSidebarStore()
    const magazinedata = useMagazine()
    const navigate = useNavigate()
    const { data, isLoading } = useGetSectionDetail(Number(magazineId), Number(sectionId))
    const user = magazinedata?.user
    const content = data?.paragraphs
    const [isScreenSettingsOpen, setIsScreenSettingsOpen] = useState(false)

    const handleClick = (magazineId: number) => {
        navigate(`/magazine/${magazineId}`)
    }
    if (isLoading) {
        return <></>
    }

    return (
        <div
            style={{ backgroundImage: `url(${magazinedata?.coverImageUrl})` }}
            className="w-full overflow-hidden bg-fixed bg-cover h-screen"
        >
            <div
                className={`justify-center h-full overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-200 scrollbar-no ${isOpen ? 'ml-60' : 'ml-15'}`}
            >
                <div className="flex justify-center px-15 bg-white relative min-h-full w-275 mr-32">
                    <SectionIndexList sectionId={Number(sectionId)} />
                    <div className="flex flex-col w-245 items-center gap-14 mt-9 mb-22 z-10">
                        <MagazineInfo
                            nickname={user?.nickname}
                            profileImage={user?.profileImageUrl}
                            sectionId={Number(sectionId)}
                            mode="section"
                            onClick={handleClick}
                        />
                        {content?.map((item, index) => (
                            <ParagraphPart
                                key={item?.paragraphId}
                                paragrahId={item?.paragraphId}
                                sectionId={sectionId}
                                smallTitle={item?.subtitle}
                                content={item?.text}
                                imageUrl={item?.imageUrl}
                                sectionDir={index % 2 === 0 ? 'rtl' : 'ltr'}
                                titleDir={index % 2 === 0 ? 'ltr' : 'rtl'}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsScreenSettingsOpen(true)}
                        className="fixed bottom-4 right-4 z-50 transition-all duration-200 text-gray-100"
                    >
                        <IconWandStars className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <ScreenSettingsModal isOpen={isScreenSettingsOpen} onClose={() => setIsScreenSettingsOpen(false)} />
        </div>
    )
}

import useGetSectionDetail from '../../../hooks/useGetSectionDetail'
import { useMagazine } from '../MagazineProvider'
import MagazineInfo from './MagazineInfo'
import SectionIndexList from './SectionIndexList'
import ParagraphPart from './ParagraphPart'
import useSidebarStore from '../../../stores/sidebar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import IconWandStars from '../../../icon/wand_stars.svg?react'
import ScreenSettings from '../../../components/settings/ScreenSettings'

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
        <div style={{ backgroundImage: `url(${magazinedata?.coverImageUrl})` }} className="flex h-screen">
            <div
                className={`flex justify-center w-275 h-full bg-white relative transition-all duration-200 ${isOpen ? 'ml-60' : 'ml-15'}`}
            >
                <SectionIndexList sectionId={Number(sectionId)} />
                <div className="flex flex-col w-245 items-center gap-14 mt-9 mb-60 z-10">
                    <MagazineInfo
                        nickname={user?.nickname}
                        profileImage={user?.profileImageUrl}
                        sectionId={Number(sectionId)}
                        mode="section"
                        onClick={handleClick}
                    />

                    {content?.map((content) => (
                        <ParagraphPart
                            paragrahId={content?.paragraphId}
                            sectionId={sectionId}
                            smallTitle={content?.subtitle}
                            content={content.text}
                            imageUrl={content?.imageUrl}
                            sectionDir="rtl"
                            titleDir="ltr"
                        />
                    ))}
                </div>

                {/* 우측 하단 무드보드 아이콘 버튼 */}
                <button
                    onClick={() => setIsScreenSettingsOpen(true)}
                    className="fixed bottom-4 right-4 z-50 transition-all duration-200 text-gray-100-op40 hover:text-gray-100"
                >
                    <IconWandStars className="w-6 h-6 **:fill-current" />
                </button>
            </div>

            {/* 화면 설정 모달 */}
            {isScreenSettingsOpen && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-999"
                    onClick={() => setIsScreenSettingsOpen(false)}
                >
                    <div
                        className="relative bg-gray-600-op70 rounded-2xl p-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ScreenSettings />
                    </div>
                </div>
            )}
        </div>
    )
}
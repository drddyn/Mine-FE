import useGetSectionDetail from '../../../hooks/useGetSectionDetail'
import { useMagazine } from '../MagazineProvider'
import MagazineInfo from './MagazineInfo'
import SectionIndexList from './SectionIndexList'
import ParagraphPart from './ParagraphPart'
import useSidebarStore from '../../../stores/sidebar'
import { useNavigate } from 'react-router-dom'
import SectionSkeleton from '../../../components/skeleton/SectionSkeleton'

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

    const handleClick = (magazineId: number) => {
        navigate(`/magazine/${magazineId}`)
    }
    if (isLoading) {
        return <SectionSkeleton />
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
            </div>
        </div>
    )
}

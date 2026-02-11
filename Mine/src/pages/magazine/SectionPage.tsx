import { useParams } from 'react-router-dom'
import MagazineInfo from './components/MagazineInfo'
import SectionPart from './components/SectionPart'
import useGetSectionDetail from '../../hooks/useGetSectionDetail'

export default function SectionPage() {
    const { magazineId, sectionId } = useParams()
    const { data, isLoading } = useGetSectionDetail(Number(magazineId), Number(sectionId))

    const content = data?.paragraphs

    if (isLoading) return <div>로딩중</div>
    return (
        <div className="flex h-screen bg-black-image">
            <div className="flex justify-center w-275 h-full bg-white">
                <div className="flex flex-col w-245 items-center gap-14 mb-60">
                    <MagazineInfo magTitle={data?.caption} />
                    {content?.map((content) => (
                        <SectionPart
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

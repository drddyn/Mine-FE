import useGetSectionDetail from '../../../hooks/useGetSectionDetail'
import { useMagazine } from '../MagazineProvider'
import MagazineInfo from './MagazineInfo'
import SectionIndexList from './SectionIndexList'
import SectionPart from './SectionPart'

interface SectionContentProps {
    sectionId: number
    magazineId: number
}

export default function SectionContent({ sectionId, magazineId }: SectionContentProps) {
    const magazinedata = useMagazine()
    const { data, isLoading } = useGetSectionDetail(Number(magazineId), Number(sectionId))
    const user = magazinedata?.user
    const content = data?.paragraphs

    if (isLoading) {
        return <></>
    }

    return (
        <div style={{ backgroundImage: `url(${magazinedata?.coverImageUrl})` }} className="flex h-screen">
            <div className=" flex justify-center w-275 h-full bg-white relative">
                <SectionIndexList sectionId={Number(sectionId)} />
                <div className="flex flex-col w-245 items-center gap-14 mb-60 z-10">
                    <MagazineInfo
                        nickname={user?.nickname}
                        profileImage={user?.profileImageUrl}
                        sectionId={Number(sectionId)}
                    />

                    {content?.map((content) => (
                        <SectionPart
                            id={content?.id}
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

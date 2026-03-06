import { useNavigate, useParams } from 'react-router-dom'
import SectionCover from './components/SectionCover'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'
import { GridContainor } from './components/GridContainor'
import ProfileBox from './components/ProfileBox'

export default function MagazinePage() {
    const { magazineId } = useParams()
    const { data, isPending } = useGetMagazineDetail(Number(magazineId))
    const navigate = useNavigate()

    const handleSectionClick = (magazineId: number, sectionId: number) => {
        navigate(`/magazine/${magazineId}/section/${sectionId}`)
    }

    if (isPending) return <></>
    if (!data) return <></>

    const content = data?.sections
    return (
        <div style={{ backgroundImage: `url(${data?.coverImageUrl})` }} className="bg-cover overflow-hidden">
            <div className="mt-9">
                {data.user && (
                    <ProfileBox
                        nickname={data.user.nickname}
                        profileImage={data.user.profileImageUrl}
                        classname="justify-end mr-6.5"
                        mode="magazine"
                    />
                )}
                <div className="flex justify-center items-start p-30 h-screen overflow-auto">
                    <GridContainor>
                        {content?.map((item) => (
                            <SectionCover
                                key={item.sectionId}
                                imageUrl={item.thumbnailUrl}
                                onclick={() => handleSectionClick(Number(magazineId), item.sectionId)}
                            />
                        ))}
                    </GridContainor>
                </div>
            </div>
        </div>
    )
}
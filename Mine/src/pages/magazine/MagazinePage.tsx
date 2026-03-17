import { useNavigate, useParams } from 'react-router-dom'
import SectionCover from './components/SectionCover'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'
import { GridContainor } from './components/GridContainor'
import useSidebarStore from '../../stores/sidebar'
import MagazineInfo from './components/MagazineInfo'
import { MagazineProvider } from './MagazineProvider'
import MagazineSkeleton from '../../components/skeleton/MagazineSkeleton'

const isValidUrl = (url?: string) => {
    if (!url) return false
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:'
    } catch {
        return false
    }
}

export default function MagazinePage() {
    const { isOpen } = useSidebarStore()
    const { magazineId } = useParams()
    const { data, isPending } = useGetMagazineDetail(Number(magazineId))
    const navigate = useNavigate()

    const handleSectionClick = (magazineId: number, sectionId: number) => {
        navigate(`/magazine/${magazineId}/section/${sectionId}`)
    }

    if (isPending) return <MagazineSkeleton />
    if (!data) return <></>

    const safeCoverImageUrl = isValidUrl(data.coverImageUrl) ? data.coverImageUrl : ''
    const content = data?.sections

    return (
        <>
        <MagazineProvider id={Number(magazineId)}>
            <MagazineSkeleton/>
            <div
                style={{ backgroundImage: safeCoverImageUrl ? `url(${safeCoverImageUrl})` : 'none' }}
                className="bg-cover overflow-hidden"
            >
                <div className={`flex flex-col transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-15'}`}>
                    {data.user && (
                        <div className="mt-9 pr-7 pl-10.5">
                            <MagazineInfo
                                nickname={data.user.nickname}
                                profileImage={data.user.profileImageUrl}
                                magazineId={data.magazineId}
                                mode="magazine"
                            />
                        </div>
                    )}
                    <div className="flex justify-center items-start p-20 h-screen overflow-auto">
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
        </MagazineProvider>
        </>
    )
}

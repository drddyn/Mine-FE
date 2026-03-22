import { useNavigate, useParams } from 'react-router-dom'
import SectionCover from './components/SectionCover'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'
import { GridContainor } from './components/GridContainor'
import useSidebarStore from '../../stores/sidebar'
import MagazineInfo from './components/MagazineInfo'
import { MagazineProvider } from './MagazineProvider'

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

    if (isPending) return <></>
    if (!data) return <></>

    const safeCoverImageUrl = isValidUrl(data.coverImageUrl) ? data.coverImageUrl : ''
    const content = data?.sections

    return (
        <MagazineProvider id={Number(magazineId)}>
            <div
                style={{ backgroundImage: safeCoverImageUrl ? `url(${safeCoverImageUrl})` : 'none' }}
                className="bg-cover h-full w-full overflow-hidden fixed bg-fixed"
            >
                <div className={`flex flex-col h-full transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-15'}`}>
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
                    <section className="flex-1 flex h-full w-full justify-center items-center pt-19 pb-40 overflow-hidden">
                        <div className="flex w-full justify-center px-30">
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
                    </section>
                </div>
            </div>
        </MagazineProvider>
    )
}

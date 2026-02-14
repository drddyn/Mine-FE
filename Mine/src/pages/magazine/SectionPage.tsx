import { useParams } from 'react-router-dom'
// import useGetSectionDetail from '../../hooks/useGetSectionDetail'
import { MagazineProvider } from './MagazineProvider'
import SectionContent from './components/SectionContent'

export default function SectionPage() {
    const { magazineId, sectionId } = useParams()
    // const { data, isLoading } = useGetSectionDetail(Number(magazineId), Number(sectionId))
    const id = Number(magazineId)

    // if (isLoading) return <div>로딩중</div>
    return (
        <MagazineProvider id={id}>
            <SectionContent sectionId={Number(sectionId)} magazineId={id} />
        </MagazineProvider>
    )
}

import { useParams } from 'react-router-dom'
import { MagazineProvider } from './MagazineProvider'
import SectionContent from './components/SectionContent'

export default function SectionPage() {
    const { magazineId, sectionId } = useParams()

    const id = Number(magazineId)

    return (
        <MagazineProvider id={id}>
            <SectionContent sectionId={Number(sectionId)} magazineId={id} />
        </MagazineProvider>
    )
}

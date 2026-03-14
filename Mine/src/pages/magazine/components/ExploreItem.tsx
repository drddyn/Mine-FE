import { useNavigate } from 'react-router-dom'
import type { Magazine } from '../../../types/magazine'
import { isValidUrl } from '../../../utils/url'

type Props = {
    magazine: Magazine
}

export default function ExploreItem({ magazine }: Props) {
    const navigate = useNavigate()
    const safeImageUrl = isValidUrl(magazine.coverImageUrl) ? magazine.coverImageUrl : ''

    return (
        <div
            className="flex w-90.5 h-60 px-5 py-4 overflow-hidden cursor-pointer"
            style={{
                backgroundImage: safeImageUrl ? `url(${safeImageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: safeImageUrl ? 'transparent' : '#1a1a1a',
            }}
            onClick={() => navigate(`/magazine/${magazine.magazineId}`)}
        >
            <p className="flex mt-auto ml-auto font-notoserif font-semibold24 leading-none text-white text-right">
                {magazine.title}
            </p>
        </div>
    )
}
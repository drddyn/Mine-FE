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
            className="flex justify-end items-end w-90.5 h-60 px-5 py-4 overflow-hidden cursor-pointer bg-center bg-cover"
            style={{
                backgroundImage: safeImageUrl ? `url(${safeImageUrl})` : 'none',
                backgroundColor: safeImageUrl ? 'transparent' : '#1a1a1a',
            }}
            onClick={() => navigate(`/${magazine.magazineId}`)}
        >
            <p className="font-notoserif font-semibold20 text-white text-right">{magazine.title}</p>
        </div>
    )
}
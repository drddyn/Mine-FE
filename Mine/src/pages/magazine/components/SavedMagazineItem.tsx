import { useNavigate } from 'react-router-dom'
import type { Magazine } from '../../../types/magazine'

type Props = {
    magazine: Magazine
}

const isValidUrl = (url: string) => {
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:'
    } catch {
        return false
    }
}

export default function SavedMagazineItem({ magazine }: Props) {
    const navigate = useNavigate()
    const safeImageUrl = isValidUrl(magazine.coverImageUrl) ? magazine.coverImageUrl : ''

    return (
        <div
            className="flex justify-end items-end shrink-0 cursor-pointer w-119 h-67 p-[16px_28px] bg-cover bg-center"
            style={{
                backgroundImage: safeImageUrl ? `url(${safeImageUrl})` : 'none',
            }}
            onClick={() => navigate(`/magazine/${magazine.magazineId}`)}
        >
            <span className="text-white text-right leading-normal font-notoserif font-semibold24">
                {magazine.title}
            </span>
        </div>
    )
}

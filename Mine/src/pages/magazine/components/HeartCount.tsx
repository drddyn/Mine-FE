// import { useState } from 'react'
import usePostHeart from '../../../hooks/usePostHeart'
import Heart from '../../../icon/heart.svg?react'
interface HeartCountProps {
    hearts?: number
    magazineId?: number
    classname?: string
}

export default function HeartCount({ hearts, magazineId, classname }: HeartCountProps) {
    // const [localLikeCount, setLocalLikeCount] = useState(Number(hearts))
    const postMutation = usePostHeart()
    const handleHeartClick = async () => {
        // setLocalLikeCount((prev) => prev + 1)
        postMutation.mutate(Number(magazineId))
    }

    return (
        <div className={`flex items-center gap-1 cursor-pointer ${classname}`}>
            <Heart className="text-gray-400" onClick={handleHeartClick} />
            <div className="text-gray-400">{hearts}</div>
        </div>
    )
}

// import { useState } from 'react'
import usePostHeart from '../../../hooks/usePostHeart'
import Heart from '../../../icon/heart.svg?react'
interface HeartCountProps {
    likeCount?: number
    isLiked?: boolean 
    magazineId?: number
    sectionId?: number
    classname?: string
}

export default function HeartCount({ likeCount, isLiked, magazineId, sectionId, classname }: HeartCountProps) {
    // 훅에 sectionId를 전달해야 합니다.
    const postMutation = usePostHeart(Number(sectionId));

    const handleHeartClick = () => {
        if (!magazineId) return;
        postMutation.mutate(Number(magazineId));
    };

    const activeColor = isLiked ? "text-red-500" : "text-gray-400";

    return (
        <div className={`flex items-center gap-1 cursor-pointer ${classname}`} onClick={handleHeartClick}>
            <Heart className={`${activeColor} transition-all duration-200`} />
            <div className={activeColor}>{likeCount ?? 0}</div>
        </div>
    );
}
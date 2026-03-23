import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import IconWandStars from '../../icon/wand_stars.svg?react'
import IconAddPhoto from '../../icon/add_photo_alternate.svg?react'
import useUploadImage from '../../hooks/useUploadImage'
import usePatchMagazineCover from '../../hooks/usePatchMagazineCover'
import Toast from '../common/Toast'

interface ScreenSettingsProps {
    onClose?: () => void
    onRequestConfirm?: () => void
}

export default function ScreenSettings({ onClose, onRequestConfirm }: ScreenSettingsProps) {
    const { magazineId } = useParams<{ magazineId: string }>()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { mutateAsync: uploadImage } = useUploadImage()
    const { mutateAsync: patchCover } = usePatchMagazineCover()

    useEffect(() => {
        if (!showToast) return
        const timer = setTimeout(() => setShowToast(false), 3000)
        return () => clearTimeout(timer)
    }, [showToast])

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            const { imageUrl } = await uploadImage(file)
            await patchCover({ id: Number(magazineId), coverImageUrl: imageUrl })
            setToastMessage('무드보드가 변경되었습니다.')
            setShowToast(true)
        } catch (error) {
            console.error('이미지 업로드 실패:', error)
        }
    }

    const handleAIMoodboard = () => {
        onClose?.()
        onRequestConfirm?.()
    }

    return (
        <>
            <div className="w-136.5 h-36.5 flex gap-6.5">
                <button
                    onClick={handleAIMoodboard}
                    className="flex flex-col w-65 h-full rounded-2xl border border-gray-100-op40 bg-gray-500-op40 items-center justify-center gap-3 text-gray-100-op70 transition-colors duration-150 hover:bg-gray-600-op70 hover:border-gray-100-op40 hover:text-gray-100-op70"
                >
                    <IconWandStars className="w-6 h-6 aspect-square **:fill-current" />
                    <span className="font-regular14">AI로 무드보드 생성하기</span>
                </button>

                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col w-65 h-full rounded-2xl border border-gray-100-op40 bg-gray-500-op40 items-center justify-center gap-3 text-gray-100-op70 transition-colors duration-150 hover:bg-gray-600-op70 hover:border-gray-100-op40 hover:text-gray-100-op70"
                >
                    <IconAddPhoto className="w-6 h-6 aspect-square **:stroke-current **:fill-current" />
                    <span className="font-regular14">컴퓨터에서 이미지 가져오기</span>
                </button>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

            {showToast && (
                <div className="fixed left-1/2 -translate-x-1/2 z-50 top-[calc(50%+208px)]">
                    <Toast message={toastMessage} />
                </div>
            )}
        </>
    )
}
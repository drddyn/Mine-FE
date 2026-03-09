import { useState, useRef } from 'react'
import IconWandStars from '../../icon/wand_stars.svg?react'
import IconAddPhoto from '../../icon/add_photo_alternate.svg?react'
import ConfirmModal from '../common/ConfirmModal'
import Toast from '../common/Toast'

export default function ScreenSettings() {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleOpenFile = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        console.log('선택된 이미지:', file)
    }

    const handleConfirm = () => {
        setIsConfirmOpen(false)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }

    return (
        <>
            <div className="w-136.5 h-36.5 flex gap-6.5">
                <button
                    onClick={() => setIsConfirmOpen(true)}
                    className="flex flex-col w-65 h-full rounded-2xl border border-white/30 bg-white/10 items-center justify-center gap-3 text-white/70 transition-colors duration-150 hover:bg-white/20 hover:border-white/50 hover:text-white"
                >
                    <IconWandStars className="w-6 h-6 aspect-square **:stroke-current **:fill-current" />
                    <span className="font-regular14">AI로 무드보드 생성하기</span>
                </button>

                <button
                    onClick={handleOpenFile}
                    className="flex flex-col w-65 h-full rounded-2xl border border-white/30 bg-white/10 items-center justify-center gap-3 text-white/70 transition-colors duration-150 hover:bg-white/20 hover:border-white/50 hover:text-white"
                >
                    <IconAddPhoto className="w-6 h-6 aspect-square **:stroke-current **:fill-current" />
                    <span className="font-regular14">컴퓨터에서 이미지 가져오기</span>
                </button>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            {isConfirmOpen && (
                <ConfirmModal
                    title="무드보드를 변경하시겠습니까?"
                    description={`AI가 새로운 이미지를 생성하여 현재 무드보드에\n적용합니다.`}
                    onConfirm={handleConfirm}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}

            {showToast && (
                <div className="fixed left-1/2 -translate-x-1/2 z-50 top-[calc(50%+208px)]">
                    <Toast message="무드보드가 생성되었습니다." />
                </div>
            )}
        </>
    )
}
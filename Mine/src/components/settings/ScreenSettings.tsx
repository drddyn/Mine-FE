import { useState, useRef } from 'react'
import IconWandStars from '../../icon/wand_stars.svg?react'
import IconAddPhoto from '../../icon/add_photo_alternate.svg?react'
import Check from '../../icon/check.svg?react'

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
        <MoodboardConfirmModal
          onClose={() => setIsConfirmOpen(false)}
          onComplete={() => {
            setIsConfirmOpen(false)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
          }}
        />
      )}

      {showToast && <MoodboardToast />}
    </>
  )
}

interface ModalProps {
  onClose: () => void
  onComplete: () => void
}

function MoodboardConfirmModal({ onClose, onComplete }: ModalProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    if (isConfirmed) return
    setIsConfirmed(true)
    setTimeout(() => onComplete(), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-120 h-53 rounded-2xl bg-gray-500 px-8 py-8 flex flex-col justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12),0_16px_32px_rgba(0,0,0,0.20)]">
        <div>
          <h2 className="mb-3 font-semibold20 text-white">
            무드보드를 변경하시겠습니까?
          </h2>
          <p className="font-regular20 text-white/70" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
            AI가 새로운 이미지를 생성하여<br />
            현재 무드보드에 적용합니다.
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={isConfirmed}
            className="flex items-center justify-center w-25 h-12 rounded-lg border border-white/30 font-medium16 text-white hover:bg-white/10"
          >
            아니요
          </button>
          <button
            onClick={handleConfirm}
            disabled={isConfirmed}
            className="flex items-center justify-center w-25 h-12 rounded-lg border border-white/30 font-medium16 text-white hover:bg-white/10"
          >
            예
          </button>
        </div>
      </div>
    </div>
  )
}

function MoodboardToast() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50 top-[calc(50%+208px)]">
      <div className="flex w-67.5 h-12 px-5 py-3 items-center gap-1 rounded-lg bg-gray-500 font-regular14 text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <Check className="w-4 h-4 shrink-0 **:fill-current **:stroke-current" />
        <span>무드보드가 생성되었습니다.</span>
      </div>
    </div>
  )
}
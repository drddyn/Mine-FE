import { useState } from 'react'
import X from '../../icon/X.svg?react'
import Link from '../../icon/link.svg?react'
import Twit from '../../icon/twitter.svg?react'
import Kakao from '../../icon/kakao.svg?react'
import Instagram from '../../icon/instagram.svg?react'
import Check from '../../icon/check.svg?react'

const TOAST_MARGIN = 102
const MODAL_HEIGHT = 212

interface ShareModalProps {
    onClose: () => void
}

export default function ShareModal({ onClose }: ShareModalProps) {
    const [showToast, setShowToast] = useState(false)

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 2000)
        } catch (err) {
            console.error('링크 복사에 실패했습니다:', err)
        }
    }

    const buttons = [
        { icon: <Link className="w-6 h-6 **:stroke-white" />, label: '링크 복사', onClick: handleCopyLink },
        { icon: <Twit className="w-6 h-6 **:stroke-white" />, label: '트위터', onClick: () => {} },
        { icon: <Kakao className="w-6 h-6 **:stroke-white" />, label: '카카오톡', onClick: () => {} },
        { icon: <Instagram className="w-6 h-6 **:stroke-white" />, label: '인스타그램', onClick: () => {} },
    ]

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-999">
            <div className="relative flex flex-col justify-center px-8 bg-gray-600-op70 rounded-2xl w-120 h-53 gap-6.25">
                <button onClick={onClose} className="absolute top-8 right-8">
                    <X className="w-5 h-5 **:stroke-white" />
                </button>

                <span className="font-semibold24 text-gray-100">공유</span>

                <div className="flex items-center justify-center gap-7">
                    {buttons.map(({ icon, label, onClick }) => (
                        <button key={label} onClick={onClick} className="flex flex-col items-center w-16 gap-2">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-100 hover:bg-gray-600-op70 transition-colors duration-150">
                                {icon}
                            </div>
                            <span className="font-medium12 text-gray-100 text-center">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {showToast && (
                <div
                    className="absolute animate-in fade-in slide-in-from-top-2 flex items-center bg-gray-600-op70 rounded-lg px-5 py-3 w-67.5 h-12 gap-3"
                    style={{
                        top: `calc(50% + ${MODAL_HEIGHT / 2}px + ${TOAST_MARGIN}px)`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        boxShadow: '0px 4px 12px 0px #00000026',
                    }}
                >
                    <Check className="w-5 h-5 text-gray-100" />
                    <span className="font-semibold16 text-gray-100">링크가 복사되었습니다.</span>
                </div>
            )}
        </div>
    )
}
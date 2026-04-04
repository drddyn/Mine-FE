import { useEffect, useState } from 'react'

export type ToastStatus = 'hidden' | 'loading' | 'success'
export type ToastType = 'moodboard' | 'magazine' | 'section'

const TOAST_MESSAGES: Record<ToastType, { loading: string; success: string }> = {
    moodboard: {
        loading: '무드보드가 변경되고 있습니다...',
        success: '무드보드가 변경되었습니다.',
    },
    magazine: {
        loading: '매거진이 생성되고 있습니다...',
        success: '매거진이 생성되었습니다.',
    },
    section: {
        loading: '섹션이 생성되고 있습니다...',
        success: '섹션이 생성되었습니다.',
    },
}

interface LoadingToastProps {
    status: ToastStatus
    toastType?: ToastType
    messages?: {
        loading: string
        success: string
    }
    onClose?: () => void
}

export default function LoadingToast({
    status,
    toastType = 'moodboard',
    messages,
    onClose,
}: LoadingToastProps) {
    const [isVisible, setIsVisible] = useState(false)
    const activeMessages = messages || TOAST_MESSAGES[toastType]

    useEffect(() => {
        if (status === 'loading') {
            setIsVisible(true)
        } else if (status === 'success') {
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false)
                if (onClose) onClose()
            }, 3000)
            return () => clearTimeout(timer)
        } else {
            setIsVisible(false)
        }
    }, [status, onClose])

    return (
        <>
            <div
                className={`fixed bottom-4 right-4 z-[9999] flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1A1A1A] text-white shadow-lg transition-all duration-300 ease-in-out ${
                    isVisible && status !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                {status === 'loading' ? (
                    <svg className="w-5 h-5 text-white animate-spin shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
                <span className="text-sm font-medium">{status === 'loading' ? activeMessages.loading : activeMessages.success}</span>
            </div>
        </>
    )
}
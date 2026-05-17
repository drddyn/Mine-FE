import { useEffect, useState } from 'react'
// 1. 왼쪽 아이콘 목록에 있는 파일들을 컴포넌트로 import
import Check from '../../icon/check.svg?react'
import Cached from '../../icon/cached.svg?react'
import X from '../../icon/X.svg?react'

// 2. 타입 확장: 리뷰어 권고사항 'error' 및 'paragraph' 추가
export type ToastStatus = 'hidden' | 'loading' | 'success' | 'error'
export type ToastType = 'moodboard' | 'magazine' | 'section' | 'paragraph'

const TOAST_MESSAGES: Record<ToastType, { loading: string; success: string; error: string }> = {
    moodboard: {
        loading: '무드보드가 변경되고 있습니다...',
        success: '무드보드가 변경되었습니다.',
        error: '무드보드 변경에 실패했습니다.',
    },
    magazine: {
        loading: '매거진이 생성되고 있습니다...',
        success: '매거진이 생성되었습니다.',
        error: '매거진 생성에 실패했습니다.',
    },
    section: {
        loading: '섹션이 생성되고 있습니다...',
        success: '섹션이 생성되었습니다.',
        error: '섹션 생성에 실패했습니다.',
    },
    paragraph: {
        loading: '문단이 추가되고 있습니다...',
        success: '문단이 추가되었습니다.',
        error: '문단 추가에 실패했습니다.',
    },
}

interface LoadingToastProps {
    status: ToastStatus
    toastType?: ToastType
    messages?: {
        loading: string
        success: string
        error: string
    }
    onClose?: () => void
}

export default function LoadingToast({ status, toastType = 'moodboard', messages, onClose }: LoadingToastProps) {
    const [lastStatus, setLastStatus] = useState<ToastStatus>(status)
    const activeMessages = messages || TOAST_MESSAGES[toastType]

    // 렌더링 과정에서 status가 hidden이 아닐 때만 lastStatus를 동기화합니다.
    if (status !== 'hidden' && status !== lastStatus) {
        setLastStatus(status)
    }

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                if (onClose) onClose()
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [status, onClose])

    // 화면에서 렌더링할 실제 상태값 (hidden 상태로 넘어가는 애니메이션 도중 이전 디자인을 유지하기 위함)
    const displayStatus = status === 'hidden' ? lastStatus : status
    const isVisible = status !== 'hidden'

    return (
        <div
            className={`fixed bottom-4 right-4 z-9999 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
                displayStatus === 'error' ? 'bg-[#FF4D4D]' : 'bg-[#1A1A1A]'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
            {/* 3. 인라인 SVG 대신 import한 아이콘 컴포넌트 사용 */}
            {displayStatus === 'loading' && <Cached className="w-5 h-5 text-gray-100 animate-spin shrink-0" />}
            {displayStatus === 'success' && <Check className="w-5 h-5 text-gray-100 shrink-0" />}
            {displayStatus === 'error' && <X className="w-5 h-5 text-gray-100 shrink-0" />}

            <span className="text-sm font-medium text-gray-100">
                {displayStatus === 'loading'
                    ? activeMessages.loading
                    : displayStatus === 'success'
                      ? activeMessages.success
                      : activeMessages.error}
            </span>
        </div>
    )
}

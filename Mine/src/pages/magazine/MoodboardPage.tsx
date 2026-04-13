import { useState } from 'react'
import LoadingToast, { type ToastStatus } from '../../components/common/LoadingToast'

export default function MoodboardPage() {
    const [toastStatus, setToastStatus] = useState<ToastStatus>('hidden')

    const handleCreateMoodboard = async () => {
        // 1. 작업 시작: 토스트를 'loading' 상태로 변경
        setToastStatus('loading')

        try {
            // 실제 API 호출 로직을 여기에 작성 (예: mutateAsync 호출)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            
            // 2. 작업 성공: 토스트를 'success' 상태로 변경
            // (LoadingToast 컴포넌트 내부 타이머에 의해 3초 뒤 onClose가 호출됨)
            setToastStatus('success')
        } catch (error) {
            console.error('무드보드 변경 실패:', error)
            // 에러 발생 시 토스트를 숨김 처리하거나 에러용 상태로 변경 가능
            setToastStatus('hidden')
        }
    }

    return (
        <div className="p-10">
            <button 
                onClick={handleCreateMoodboard}
                disabled={toastStatus === 'loading'}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg transition-colors hover:bg-gray-400 disabled:opacity-50"
            >
                무드보드 변경 시작
            </button>

            <LoadingToast 
                status={toastStatus} 
                onClose={() => setToastStatus('hidden')} 
            />
        </div>
    )
}
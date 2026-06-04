import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePostMagazine from '../../hooks/usePostMagazine'
import landingBg from '../../assets/bg1.png'
import NewMagazineInput from '../../components/NewMagazineInput'
import MakingLoadingPage from './MakingLoadingPage'
import { useAuthStore } from '../../stores/auth'
import LandingPage from '../landing/LandingPage'
import { hasBlockedWord } from '../../utils/blockedWords'
import HarmfulKeywordModal from '../../components/common/HarmfulKeywordModal'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isPending = postMagazineMutation.isPending
    const [topic, setTopic] = useState('')
    const [userMood, setUserMood] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { isLoggedIn } = useAuthStore()
    const navigate = useNavigate()

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current) // 화면이 닫히면 타이머 폭파!
            }
        }
    }, [])

    const handleSend = () => {
        const trimmedTopic = topic.trim()
        if (!trimmedTopic) return
        if (hasBlockedWord(trimmedTopic)) {
            setIsModalOpen(true)
            return // 여기서 함수를 끝내버려서 백엔드로 넘어가지 않게 막습니다!
        }
        if (isPending) return

        // 💡 핵심 수정: mutate 함수 두 번째 인자로 옵션 객체를 넘깁니다!
        postMagazineMutation.mutate(
            { topic: trimmedTopic, user_mood: userMood },
            {
                // API 통신이 "딱 한 번" 성공했을 때만 이 코드가 실행됩니다. (useEffect 버그 해결!)
                onSuccess: (data) => {
                    timerRef.current = setTimeout(() => {
                        const newMagazineId = data?.magazineId || data
                        if (newMagazineId) navigate(`/${newMagazineId}`)
                    }, 1500)
                },
            }
        )
    }

    if (!isLoggedIn) return <LandingPage />

    return (
        <>
            <div
                className="flex flex-col items-center justify-center w-full h-full relative z-0 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${landingBg})` }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-gray-500-op70 via-black/45 to-gray-500-op70 z-0" />
                <div
                    className={`relative flex flex-col items-center transition-all duration-700 ease-in-out z-30 ${
                        isPending ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
                    }`}
                >
                    <span className="text-gray-100 font-notoserif font-medium36">나만의 매거진을 만들어볼까요?</span>

                    <div className="w-full mt-10 flex justify-center">
                        <NewMagazineInput
                            topic={topic}
                            userMood={userMood}
                            onTopicChange={setTopic}
                            onUserMoodChange={setUserMood}
                            onSubmit={handleSend}
                            isPending={isPending}
                        />
                    </div>
                </div>

                {isPending && <MakingLoadingPage />}
            </div>
            {isModalOpen && (
                <HarmfulKeywordModal
                    onClose={() => setIsModalOpen(false)} // '예' 버튼 누르면 닫히도록 함수 전달
                />
            )}
        </>
    )
}

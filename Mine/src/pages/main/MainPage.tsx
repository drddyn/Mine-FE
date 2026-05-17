import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import usePostMagazine from '../../hooks/usePostMagazine'
import GuestPage from './GuestPage'
import landingBg from '../../assets/bg1.jpg'
import NewMagazineInput from '../../components/NewMagazineInput'
import MakingLoadingPage from './MakingLoadingPage'
import { useAuthStore } from '../../stores/auth'
import { useToastStore } from '../../stores/toastStore'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isPending = postMagazineMutation.isPending
    const [topic, setTopic] = useState('')
    const [userMood, setUserMood] = useState('')
    const { isLoggedIn } = useAuthStore()
    const { setToast } = useToastStore()
    const navigate = useNavigate()

    const handleSend = () => {
        if (!topic.trim()) return
        if (isPending) return
        postMagazineMutation.mutate({ topic, user_mood: userMood })
    }

    useEffect(() => {
        if (postMagazineMutation.isPending) {
            setToast('magazine', 'loading')
        } else if (postMagazineMutation.isSuccess) {
            setToast('magazine', 'success')

            // 성공 토스트를 1.5초간 보여준 후 매거진 상세 페이지로 부드럽게 이동
            setTimeout(() => {
                // 백엔드 응답(data) 자체가 ID이거나 객체 내부에 있는 경우 모두 대응
                const responseData = postMagazineMutation.data
                const newMagazineId = responseData?.magazineId || responseData
                if (newMagazineId) navigate(`/${newMagazineId}`)
                else navigate('/explore')
            }, 1500)
        } else if (postMagazineMutation.isError) {
            setToast('magazine', 'error')
        }
    }, [
        postMagazineMutation.isPending,
        postMagazineMutation.isSuccess,
        postMagazineMutation.isError,
        postMagazineMutation.data,
        navigate,
        setToast,
    ])

    if (!isLoggedIn) return <GuestPage />

    return (
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
    )
}

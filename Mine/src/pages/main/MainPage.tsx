import { useState, useEffect } from 'react'
import usePostMagazine from '../../hooks/usePostMagazine'
import GuestPage from './GuestPage'
import landingBg from '../../assets/bg1.jpg'
import NewMagazineInput from '../../components/NewMagazineInput'
import MakingLoadingPage from './MakingLoadingPage'
import { useAuthStore } from '../../stores/auth'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isPending = postMagazineMutation.isPending
    const [topic, setTopic] = useState('')
    const [userMood, setUserMood] = useState('')
    const { isLoggedIn } = useAuthStore()

    if (!isLoggedIn) return <GuestPage />

    const handleSend = () => {
        if (!topic.trim()) return
        if (isPending) return
        postMagazineMutation.mutate({ topic, user_mood: userMood })
    }

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

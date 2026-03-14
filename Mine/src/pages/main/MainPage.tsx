import { useState } from 'react'
import usePostMagazine from '../../hooks/usePostMagazine'
import landingBg from '../../assets/bg1.jpg'
import NewMagazineInput from '../../components/NewMagazineInput'
import MakingLoadingPage from './MakingLoadingPage'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isLoading = postMagazineMutation.isPending
    const [topic, setTopic] = useState('')
    const [userMood, setUserMood] = useState('')

    const handleSend = () => {
        if (!topic.trim()) return
        postMagazineMutation.mutate({ topic: topic, user_mood: userMood })
    }

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full relative z-0 overflow-hidden"
            style={{
                backgroundImage: `url(${landingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-gray-500-op70 via-black/45 to-gray-500-op70" />
            <div
                className={`relative z-10 flex flex-col items-center transition-all duration-700 ease-in-out ${
                    isLoading ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
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
                    />
                </div>
            </div>

            {isLoading && <MakingLoadingPage />}
        </div>
    )
}

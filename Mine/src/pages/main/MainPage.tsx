import { useState } from 'react'
import usePostMagazine from '../../hooks/usePostMagazine'
import landingBg from '../../assets/bg1.jpg'
import MagazineInput from '../../components/NewMagazineInput'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isLoading = postMagazineMutation.isPending
    const [topic, setTopic] = useState('')
    const [userMood, setUserMood] = useState('')

    const handleSend = () => {
        if (!topic.trim()) return
        postMagazineMutation.mutate({ topic, user_mood: userMood })
    }

    return (
        <div
            className="flex flex-col items-center w-full h-full relative z-0 overflow-hidden pt-72.5"
            style={{
                backgroundImage: `url(${landingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/45" />
            <div
                className={`relative z-10 flex flex-col items-center transition-all duration-700 ease-in-out ${
                    isLoading ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
                }`}
            >
                <span className="text-gray-100 font-notoserif font-medium36">나만의 매거진을 만들어볼까요?</span>

                <div className="w-full mt-10 flex justify-center">
                    <MagazineInput
                        topic={topic}
                        userMood={userMood}
                        onTopicChange={setTopic}
                        onUserMoodChange={setUserMood}
                        onSubmit={handleSend}
                    />
                </div>
            </div>

            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 animate-fadeIn bg-gray-100/80 backdrop-blur-sm z-10">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin mb-6" />
                    <p className="text-gray-600 animate-pulse font-notoserif font-semibold20">
                        당신만을 위한 매거진을 만들고 있어요...
                    </p>
                </div>
            )}
        </div>
    )
}
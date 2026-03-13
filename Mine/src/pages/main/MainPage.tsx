import LLMInputBox from '../../components/LLMInputBox'
import usePostMagazine from '../../hooks/usePostMagazine'
import useGetMyProfile from '../../hooks/useGetMyProfile'
import GuestPage from './GuestPage'

export default function MainPage() {
    const { data: profile, isLoading, isError } = useGetMyProfile()
    const postMagazineMutation = usePostMagazine()
    const isPending = postMagazineMutation.isPending

    if (isLoading) return null
    if (isError || !profile) return <GuestPage />

    const handleSend = (value: string) => {
        console.log('전송 내용:', value)
        postMagazineMutation.mutate({ topic: value, user_mood: '' })
    }

    return (
        <div className="flex flex-col items-center w-full h-full relative z-0 overflow-hidden pt-72.5">
            <div
                className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
                    isPending ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
                }`}
            >
                <span className="text-gray-500 font-notoserif font-medium36">나만의 매거진을 만들어볼까요?</span>

                <div className="w-full mt-10 flex justify-center">
                    <LLMInputBox onSend={handleSend} />
                </div>
            </div>
            {isPending && (
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 animate-fadeIn bg-white/80 backdrop-blur-sm">
                    <div className="w-10 h-10 border-4 border-gray-100 border-t-gray-500 rounded-full animate-spin mb-6"></div>
                    <p className="text-xl text-gray-600 animate-pulse font-notoserif">
                        당신만을 위한 매거진을 만들고 있어요...
                    </p>
                </div>
            )}
        </div>
    )
}
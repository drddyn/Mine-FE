import LLMInputBox from '../../components/LLMInputBox'
import usePostMagazine from '../../hooks/usePostMagazine'

export default function MainPage() {
    const postMagazineMutation = usePostMagazine()
    const isLoading = postMagazineMutation.isPending

    const handleSend = (value: string) => {
        console.log('전송 내용:', value)

        postMagazineMutation.mutate({ topic: value, user_mood: '' })
    }

    return (
        <div className="flex flex-col items-center w-full h-full relative z-0 overflow-hidden pt-72.5">
            <div
                className={`flex flex-col items-center transition-all duration-700 ease-in-out${
                    isLoading ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
                }`}
            >
                <span className="text-black-textBigTitle font-maruburi font-regular32">
                    나만의 매거진을 만들어볼까요?
                </span>

                <div className="w-full mt-10 flex justify-center">
                    <LLMInputBox onSend={handleSend} />
                </div>
            </div>
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 animate-fadeIn bg-white/80 backdrop-blur-sm">
                    <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin mb-6"></div>
                    <p className="text-xl text-gray-600 animate-pulse font-maruburi">
                        당신만을 위한 매거진을 만들고 있어요...
                    </p>
                </div>
            )}
        </div>
    )
}

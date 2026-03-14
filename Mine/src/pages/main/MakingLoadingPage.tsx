export default function MakingLoadingPage() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 animate-fadeIn bg-gray-100/80 backdrop-blur-sm z-10">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin mb-6" />
            <p className="text-gray-600 animate-pulse font-notoserif font-semibold20">
                당신만을 위한 매거진을 만들고 있어요...
            </p>
        </div>
    )
}

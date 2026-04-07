import Lottie from 'lottie-react'
import LoadingAnimation from '../../assets/mineLogoLoadingFinal1.json'

export default function MakingLoadingPage() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-48 bg-gray-200">
            <div className="w-30 h-40 lottie-container">
                <Lottie animationData={LoadingAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    )
}

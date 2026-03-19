import Minelogo from '../../icon/minelogo.svg?react'
import landingBg from '../../assets/bg1.jpg'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()

    const handleStart = () => {
        sessionStorage.setItem('landingBg', landingBg)
        navigate('/login', { state: { bgUrl: landingBg } })
    }

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="absolute inset-0 bg-black/45" />
            <Minelogo className="absolute left-20 top-17 w-35 h-17.5 z-20" />

            <div className="absolute left-20 top-68.75 w-155 h-47.5 z-20">
                <div className="text-white text-8xl font-bold leading-tight">
                    나만의 매거진
                    <br />
                    아카이빙 플랫폼
                </div>
            </div>

            <button
                onClick={handleStart}
                className="absolute right-30 bottom-17.25 text-white font-semibold24 z-20 cursor-pointer hover:opacity-80 transition"
            >
                시작하기
            </button>
        </div>
    )
}

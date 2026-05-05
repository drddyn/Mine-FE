import Minelogo from '../../icon/logo_with_title.svg?react'
import landingBg from '../../assets/bg1.jpg'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()

    const handleStart = () => {
        sessionStorage.setItem('landingBg', landingBg)
        navigate('/login', { state: { bgUrl: landingBg } })
    }

    const handleLookaround = () => {
        navigate('/guest')
    }

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="absolute inset-0 bg-black/45" />

            <Minelogo className="absolute left-20 top-17 w-21 h-7.5 z-20 text-gray-100/50" />

            <div className="absolute left-20 top-59.25 w-105.5 h-84 z-20">
                <div className="font-bold80 text-white">
                    나만의 매거진
                    <br />
                    아카이빙
                    <br />
                    플랫폼
                </div>
            </div>

            <div className="absolute left-309.5 top-164.25 w-20.5 h-21 z-20 flex flex-col gap-4">
                <button
                    onClick={handleLookaround}
                    className="text-white/40 font-semibold24 cursor-pointer hover:text-white transition-colors duration-200"
                >
                    둘러보기
                </button>
                <button
                    onClick={handleStart}
                    className="text-white/40 font-semibold24 cursor-pointer hover:text-white transition-colors duration-200"
                >
                    시작하기
                </button>
            </div>
        </div>
    )
}
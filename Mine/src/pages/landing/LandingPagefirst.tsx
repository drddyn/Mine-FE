import { useNavigate } from 'react-router-dom'
import Minelogo from '../../icon/logo_with_title.svg?react'
import landingBg from '../../assets/bg1.png'

export default function LandingPagefirst() {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate('/login')
    }
    return (
        <div
            className="relative h-screen snap-start snap-always w-full bg-cover overflow-hidden"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="flex flex-col justify-between z-10">
                <Minelogo className="absolute left-20 top-17 w-21 h-7.5 text-gray-100/50" />

                <div className="pl-20 pt-59 w-full text-gray-100 font-bold80 leading-tight z-10">
                    나만의 매거진
                    <br />
                    아카이빙
                    <br />
                    플랫폼
                </div>

                <div className="flex pt-31 pr-30 justify-end">
                    <button
                        onClick={handleStart}
                        className="z-20 text-gray-100 font-semibold24 cursor-pointer hover:opacity-80 transition "
                    >
                        시작하기
                    </button>
                </div>
            </div>
        </div>
    )
}

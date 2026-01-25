import { useNavigate } from 'react-router-dom'
import Minelogo from '../../icon/minelogo.svg?react'

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center relative w-full h-screen overflow-hidden bg-white">
            <Minelogo className="absolute -top-22 -left-3 w-436.25 h-219.25 object-fill opacity-[0.04] pointer-events-none select-none scale-[1.1] filter brightness-0" />

            <div className="flex items-center h-68.25 gap-5">
                <div className="flex flex-col justify-between h-full">
                    <div className="mt-12.5 h-26.5 flex flex-col">
                        <p className="text-main-default font-poltawski font-semibold36 text-right">MY OWN</p>
                        <p className="font-poltawski font-semibold36 text-right">MAGAZINE</p>
                        <p className="font-poltawski font-semibold36 text-right">ARCHIVING</p>
                    </div>
                    <button
                        className="rounded-[25px] py-3.5 mb-2.75 bg-black text-white font-semibold16 hover:bg-gray-700"
                        onClick={() => navigate('/login')}
                    >
                        바로 시작하기
                    </button>
                </div>
                <Minelogo className="w-136 pointer-events-none select-none filter" />
            </div>
        </div>
    )
}

import landingBg from '../../assets/bg1.png'
import Swipe from '../../icon/swipe.svg?react'

export default function LandingPageSecond() {
    return (
        <div
            className="relative snap-start snap-always h-screen w-full bg-cover overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="flex flex-col gap-54.5 justify-between">
                <div className="w-full text-gray-100 font-regular40 pl-20 pt-33.5">
                    단순히 정보 획득을 위한
                    <br /> 검색에서
                </div>
                <div className="flex justify-end items-end pr-20 pt-10.5">
                    <div className="text-gray-100 font-semibold64">
                        나만의 취향을
                        <br /> 기록하고 축적하는 경험으로.
                    </div>
                </div>
                <div className="absolute left-1/2 translate-y-1/2 bottom-8  animate-bounce">
                    <Swipe className="rotate-270 text-gray-200/20" />
                </div>
            </div>
        </div>
    )
}

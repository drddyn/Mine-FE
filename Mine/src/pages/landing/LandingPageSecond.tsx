import landingBg from '../../assets/bg1.png'

export default function LandingPageSecond() {
    return (
        <div
            className="relative snap-start h-screen w-full bg-start bg-fit overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            {/* <div className="absolute inset-0 bg-black/45 -z-10" /> */}
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
            </div>
        </div>
    )
}

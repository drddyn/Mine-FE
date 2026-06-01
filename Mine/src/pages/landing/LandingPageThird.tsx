import landingBg from '../../assets/bg1.png'

export default function LandingPageThird() {
    return (
        <div
            className="relative snap-start h-screen w-full bg-start bg-fit overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="flex flex-1 gap-54.5 pl-20 justify-between">
                <div className="flex flex-col">
                    <div className=" text-gray-100 font-regular24 pt-33.5">
                        공부
                        <br />
                        자기계발
                        <br />
                        덕질
                        <br />
                        기획
                        <br />
                        디자인
                        <br />
                        마케팅
                        <br />︙
                    </div>
                    <div className="text-gray-100 font-semibold36">
                        그 어디에서나 <br />그 누구라도
                    </div>
                </div>
                <div className="flex justify-end items-end pr-20 pt-100">
                    <div className="text-gray-100 font-semibold64 text-right">
                        깊은 탐색과
                        <br />
                        잃지 않는 기록을
                        <br />
                        바란다면.
                    </div>
                </div>
            </div>
        </div>
    )
}

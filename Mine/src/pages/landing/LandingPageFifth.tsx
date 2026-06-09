import landingBg from '../../assets/bg1.png'
import MineLogo from '../../icon/logo_with_title.svg?react'
import Landing1 from '../../assets/landing1.png'
import Swipe from '../../icon/swipe.svg?react'

function EmptyCard({ showButton }: { showButton?: boolean }) {
    return (
        <div className="flex justify-center items-center shrink-0 w-118 h-67 border border-gray-100-op30">
            {showButton ? (
                <div className="flex justify-center items-center gap-2.5 h-9 px-10 py-3.5 rounded-[40px] border border-gray-200 font-medium16 text-gray-200 hover:bg-gray-100-op30 transition-colors duration-200">
                    매거진 추가하러 가기
                </div>
            ) : (
                <MineLogo className="w-16 text-gray-100-op40" />
            )}
        </div>
    )
}

export default function LandingPageFifth() {
    return (
        <div
            className="relative snap-start snap-always h-screen w-full bg-cover overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="flex mt-32.25 ml-66.5">
                <div className="grid grid-cols-3 shrink-0 grid-rows-2 gap-2 w-358 mx-auto h-136">
                    <div className="relative w-118 h-67 ">
                        <img src={Landing1} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-black/35 via-black/15 to-transparent"></div>
                        <div className="font-semibold24 font-notoserif absolute bottom-4 right-5 text-gray-100">
                            OTT와 스트리밍
                        </div>
                    </div>
                    <EmptyCard showButton={true} />
                    <EmptyCard showButton={false} />
                    <EmptyCard showButton={false} />
                    <EmptyCard showButton={false} />
                    <EmptyCard showButton={false} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-75 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10"></div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap z-10">
                <div className="font-regular40 text-gray-100">정해진 방식이 아닌</div>
                <div className="font-semibold40 text-gray-100">나만의 방식으로 아카이빙.</div>
            </div>
            <div className="absolute left-1/2 translate-y-1/2 bottom-8  animate-bounce z-20">
                <Swipe className="rotate-270 text-gray-200/20" />
            </div>
        </div>
    )
}

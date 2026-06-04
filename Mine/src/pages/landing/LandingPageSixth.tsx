import landingBg from '../../assets/bg1.png'
import landing1 from '../../assets/landing01.jpg'
import landing2 from '../../assets/landing02.jpg'
import landing3 from '../../assets/landing03.jpg'
import landing4 from '../../assets/landing04.jpg'
import landing5 from '../../assets/landing05.jpg'
import landing6 from '../../assets/landing06.jpg'
import landing7 from '../../assets/landing07.jpg'
import landing8 from '../../assets/landing08.jpg'
import landing9 from '../../assets/landing09.jpg'

function LandingCard({ src, label }: { src: string; label?: string }) {
    return (
        <div className="relative">
            <img src={src} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-black/35 via-black/15 to-transparent"></div>
            <div className="font-semibold24 font-notoserif absolute bottom-4 right-5 text-gray-100">{label}</div>
        </div>
    )
}

export default function LandingPageSixth() {
    return (
        <div
            className="relative snap-start snap-always h-screen w-full bg-cover overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-88.25 bg-linear-to-b from-black/90 via-black/50 to-transparent pointer-events-none "></div>
            <div className="absolute top-15 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap z-10">
                <div className="font-regular40 text-gray-100">좋아하는 것을</div>
                <div className="font-semibold40 text-gray-100">더 깊이 탐색할 수 있는 큐레이팅.</div>
            </div>

            <div className="absolute inset-0 top-70 flex items-center justify-center whitespace-nowrap -z-10">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 shrink-0">
                    <LandingCard src={landing1} label="이번 주 개봉 영화" />
                    <LandingCard src={landing2} label="AI와 개발자 워크플로우" />
                    <LandingCard src={landing3} label="이탈리아 파스타 파라다이스" />
                    <LandingCard src={landing4} label="자연과 함께 하는 등산" />
                    <LandingCard src={landing5} label="리락쿠마의 매력" />
                    <LandingCard src={landing6} label="태그호이어 헤리티지의 시간과 빛" />
                    <LandingCard src={landing7} />
                    <LandingCard src={landing8} />
                    <LandingCard src={landing9} />
                </div>
            </div>
        </div>
    )
}

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

export default function LandingPageSixth() {
    return (
        <div
            className="relative snap-start h-screen w-full bg-start bg-fit overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="absolute top-0 left-0 w-full h-88.25 bg-linear-to-b from-black/90 via-black/50 to-transparent pointer-events-none "></div>
            <div className="absolute top-15 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap z-10">
                <div className="font-regular40 text-gray-100">좋아하는 것을</div>
                <div className="font-semibold40 text-gray-100">더 깊이 탐색할 수 있는 큐레이팅.</div>
            </div>

            <div className="absolute inset-0 top-70 flex items-center justify-center whitespace-nowrap -z-10">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 shrink-0">
                    <img src={landing1} />
                    <img src={landing2} />
                    <img src={landing3} />
                    <img src={landing4} />
                    <img src={landing5} />
                    <img src={landing6} />
                    <img src={landing7} />
                    <img src={landing8} />
                    <img src={landing9} />
                </div>
            </div>
        </div>
    )
}

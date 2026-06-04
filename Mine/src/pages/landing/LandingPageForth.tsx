import landingBg from '../../assets/bg1.png'
import LLMForLandingPage from './LLMForLandingPage'
import SearchForLandingPage from './SearchForLandingPage'
import SidebarForLanding from './SidebarForLanding'

export default function LandingPageForth() {
    return (
        <div
            className="relative snap-start snap-always h-screen w-full bg-cover overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <SidebarForLanding isOpen={true} />

            <div className="absolute inset-0 flex items-center justify-center">
                {/* 💡 핵심: 직선 띠가 아닌 타원형 그림자! */}
                {/* 가로 최대 800px, 세로 300px의 박스를 만들고 둥글게 깎은 뒤, 블러로 경계를 날려버립니다. */}
                <div className="absolute w-[90vw] max-w-150 h-112.5 bg-black/90 rounded-[50%] blur-[130px]"></div>

                {/* 실제 텍스트 */}
                <div className="relative z-10 text-center">
                    <h1 className="text-white font-regular40">검색, 요약, 저장, 기록까지</h1>
                    <h1 className="text-white font-semibold40">매끄러운 하나의 흐름.</h1>
                </div>
            </div>
            <div className="absolute bottom-8 w-full flex justify-center ">
                <LLMForLandingPage />
            </div>
            <div className="absolute top-8 right-4">
                <SearchForLandingPage />
            </div>
        </div>
    )
}

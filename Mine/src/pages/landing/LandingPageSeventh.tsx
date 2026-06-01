import landingBg from '../../assets/bg1.png'
import SidebarForLanding from './SidebarForLanding'
import Heart from '../../icon/heart.svg?react'
import MineLogo from '../../icon/logo_with_title.svg?react'

export default function LandingPageSeventh() {
    return (
        <div
            className="relative snap-start h-screen w-full bg-cover bg-center overflow-hidden -z-20"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <SidebarForLanding isOpen={false} />

            {/* 💡 1. 스크롤 영역 (사이드바 너비만큼 ml 부여) */}
            <div className="h-screen overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-200 scrollbar-no ml-15">
                {/* 💡 2. 중앙 백지(종이) 영역: flex-col 추가 및 하단 여백(pb-60) 확보 */}
                <div className="flex flex-col w-275 bg-gray-100 min-h-full pb-60 shadow-2xl relative">
                    {/* --- [헤더 영역] --- */}
                    {/* 이미지의 빨간 숫자 반영: pt-9(36px), px-15(60px) */}
                    <div className="flex w-full pt-9 px-15 pb-4 justify-between items-center">
                        <div className="font-semibold16 text-gray-800 font-maruburi">이곳의 제목</div>

                        {/* 가운데 하트와 좋아요 수 */}
                        <div className="flex items-center gap-2 text-heart absolute left-1/2 -translate-x-1/2">
                            <Heart className="w-5 h-5 fill-current" />
                            <span className="font-medium16">20</span>
                        </div>

                        {/* 우측 프로필 */}
                        <div className="flex gap-3 items-center">
                            <div className="font-regular16 text-gray-500">다른사람</div>
                            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"></div>
                        </div>
                    </div>

                    {/* --- [본문 아티클 영역] --- */}
                    <div className="flex flex-col w-full px-15 gap-20 mt-14 z-10">
                        {/* 블록 1: 텍스트(좌) + 이미지(우) */}
                        <div className="flex gap-10">
                            <div className="flex-1 flex flex-col gap-6">
                                <h2 className="text-3xl font-bold text-gray-900">바우하우스</h2>
                                <p className="font-regular16 text-gray-600 leading-relaxed text-justify">
                                    정식 명칭은 '슈타틀리헤스 바우하우스(Staatliches Bauhaus)'이다. 공예와 예술과 기술의
                                    통합을 시도한 학교이며 독특한 디자인 접근 방식으로 유명하다...
                                </p>
                            </div>
                            <div className="w-57.5 h-69.5 bg-gray-300 shrink-0">
                                {/* <img src={bauhausImg} className="w-full h-full object-cover" /> */}
                            </div>
                        </div>

                        {/* 블록 2: 이미지(좌) + 텍스트(우) */}
                        <div className="flex gap-10">
                            <div className="w-57.5 h-69.5 bg-gray-300 shrink-0">
                                {/* <img src={postmodernImg} className="w-full h-full object-cover" /> */}
                            </div>
                            <div className="flex-1 flex flex-col gap-6 text-right">
                                <h2 className="text-3xl font-bold text-gray-900">포스트모더니즘</h2>
                                <p className="font-regular16 text-gray-600 leading-relaxed text-justify" dir="rtl">
                                    20세기 초 모더니즘이 리얼리즘에 대한 반작용으로 등장한 반면, 1960년대 이후
                                    포스트모더니즘은 모더니즘에 대한 반작용으로 등장한다...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 💡 3. 하단 고정 그라데이션 CTA 영역 (화면 전체 덮기) */}
            <div className="absolute bottom-0 left-0 w-full h-88.25 bg-linear-to-t from-black/95 via-black/50 to-transparent flex flex-col items-center justify-end pb-16 z-50 pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-lg font-light tracking-wide">
                        나만의 매거진을 만들 준비가 되셨나요?
                    </span>
                </div>
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-white text-2xl font-semibold tracking-wide">회원가입하고</span>
                    <MineLogo className="h-6 text-white fill-current" />
                    <span className="text-white text-2xl font-semibold tracking-wide">을 즐겨보세요.</span>
                </div>

                {/* 버튼만 클릭 가능하도록 pointer-events-auto 부여 */}
                <button className="pointer-events-auto flex items-center justify-center px-8 py-3 rounded-full border border-gray-400 text-white font-medium16 hover:bg-white hover:text-black transition-colors duration-300">
                    지금 바로 시작하기
                </button>
            </div>
        </div>
    )
}

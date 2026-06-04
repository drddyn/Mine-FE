import landingBg from '../../assets/bg1.png'
import landingSection1 from '../../assets/landing_section01.jpg'
import landingSection2 from '../../assets/landing_section02.jpg'
import SidebarForLanding from './SidebarForLanding'
import Heart from '../../icon/heart.svg?react'
import MineLogo from '../../icon/logo_with_title.svg?react'
import { useNavigate } from 'react-router-dom'

export default function LandingPageSeventh() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/login`)
    }
    return (
        <div
            className="relative snap-start snap-always h-screen w-full bg-cover overflow-hidden "
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <SidebarForLanding isOpen={false} />

            {/* 💡 1. 스크롤 영역 (사이드바 너비만큼 ml 부여) */}
            <div className="h-screen overflow-x-hidden transition-all ease-in-out duration-200 scrollbar-no ml-15">
                {/* 💡 2. 중앙 백지(종이) 영역: flex-col 추가 및 하단 여백(pb-60) 확보 */}
                <div className="flex flex-col w-275 bg-gray-100 h-full pb-60 shadow-2xl relative">
                    <div className="absolute -right-20 top-22 flex w-29.75 h-8.5 items-center bg-gray-600">
                        <div className="px-2 py-3  font-medium12 text-gray-100 truncate">
                            하이퍼팝의 기원과 핵심 사운드
                        </div>
                    </div>
                    {/* --- [헤더 영역] --- */}
                    {/* 이미지의 빨간 숫자 반영: pt-9(36px), px-15(60px) */}
                    <div className="flex w-full pt-9 px-15 pb-4 justify-between items-center">
                        <div className="font-semibold16 text-gray-800 font-notoserif">
                            하이퍼팝의 기원과 핵심 사운드
                        </div>

                        {/* 가운데 하트와 좋아요 수 */}
                        <div className="flex items-center gap-2 text-heart absolute left-1/2 -translate-x-1/2">
                            <Heart className="w-5 h-5 fill-current" />
                            <span className="font-medium16">20</span>
                        </div>

                        {/* 우측 프로필 */}
                        <div className="flex gap-3 items-center">
                            <div className="font-regular16 text-gray-500">minelover</div>
                            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"></div>
                        </div>
                    </div>

                    {/* --- [본문 아티클 영역] --- */}
                    <div className="flex flex-col w-full px-15 gap-20 mt-14 z-10">
                        {/* 블록 1: 텍스트(좌) + 이미지(우) */}
                        <div className="flex gap-10">
                            <div className="flex-1 flex flex-col gap-6">
                                <h2 className="font-medium36 font-notoserif text-gray-600">정의와 뿌리</h2>
                                <p className="font-regular16 text-gray-600 break-all">
                                    하이퍼팝은 버블검 베이스로 불리는 강렬한 음향과 과감한 음높이의 변화가 어우러진 음악
                                    현상으로 정의된다. 이 용어의 뿌리는 2010년대 초 영국 음악 신에서 시작되었다고
                                    전해지며, 전자 음악과 팝, 댄스, 힙합, 록, 아방가르드가 서로 뒤섞이며 새로운 경계가
                                    열렸다. 장르 뿌리로는 전자 음악, 팝 음악, 댄스 음악, 일렉트로팝, 힙합 음악, 버블검
                                    팝, 록, 아방가르드가 꼽힌다. 이러한 융합은 디지털 제작 환경의 확산과 맞물려 빠르게
                                    확산되었고, 결과적으로 하이퍼팝은 트랙의 구성에서 비정형적 리듬과 변주를 가능하게
                                    한다. 독자는 이 파편적 질감 속에서 빠른 기복과 소리의 변주가 만들어내는 강렬한
                                    감정의 흐름을 체감하게 된다.
                                </p>
                            </div>
                            <div className="w-65 h-69.5 shrink-0">
                                <img src={landingSection1} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* 블록 2: 이미지(좌) + 텍스트(우) */}
                        <div className="flex gap-10">
                            <div className="max-h-70 max-w-[45%] shrink-0">
                                <img src={landingSection2} className=" object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col gap-6 text-right">
                                <h2 className="font-medium36 font-notoserif text-gray-600">사운드 구성의 핵심 악기</h2>
                                <p className="font-regular16 text-gray-600 break-all" dir="rtl">
                                    사운드 구성의 핵심 악기는 이 현상의 질감을 좌우한다. 드럼 머신으로 시작하는 경쾌한
                                    킥과 스네어의 반복은 트랙의 추진력을 주도하고, 오토튠과 피치 시프터는 보컬의 음정을
                                    독특하게 왜곡하여 비정형의 음색을 만든다. 신시사이저는 멜로디의 뼈대를 형성하고,
                                    샘플러는 짧은 프레이즈를 재생해 재구성한다. 하이햇과 불규칙한 잡음은 공간감을
                                    확장하고 순간의 긴장을 더한다. 이 악기 조합이 하이퍼팝의 빠른 전개와 파편화된
                                    감정선을 가능하게 한다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 💡 3. 하단 고정 그라데이션 CTA 영역 (화면 전체 덮기) */}
            <div className="absolute bottom-0 left-0 w-full h-88.25 bg-linear-to-t from-black/95 via-black/50 to-transparent flex flex-col items-center justify-end pb-16 z-20 pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-100 font-regular20 tracking-wide">
                        나만의 매거진을 만들 준비가 되셨나요?
                    </span>
                </div>
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-white text-2xl font-semibold tracking-wide">회원가입하고</span>
                    <MineLogo className="h-6 text-white fill-current" />
                    <span className="text-white text-2xl font-semibold tracking-wide">을 즐겨보세요.</span>
                </div>

                {/* 버튼만 클릭 가능하도록 pointer-events-auto 부여 */}
                <button
                    className="pointer-events-auto flex items-center justify-center px-8 py-3 rounded-full border border-gray-400 text-white font-medium16 hover:bg-gray-100/50 hover:text-black transition-colors duration-300 z-30 cursor-pointer"
                    onClick={handleClick}
                >
                    지금 바로 시작하기
                </button>
            </div>
        </div>
    )
}

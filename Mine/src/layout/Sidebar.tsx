import { useEffect, useState } from 'react'
import MineLogo from '../icon/logo.svg?react'
import SidebarOpen from './sidebar/SidebarOpen'
import Sidebar_new from '../icon/sidebar_new.svg?react'
import Sidebar_like from '../icon/sidebar_like.svg?react'
import Sidebar_others from '../icon/sidebar_others.svg?react'
import SidebarClosedBlock from './sidebar/SidebarClosedBlock'
import useGetMyProfile from '../hooks/useGetMyProfile'
import useUserStore from '../stores/user'
import useSidebarStore from '../stores/sidebar'
import { SkeletonAvatar } from '../components/skeleton/SkeletonBase'

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebarStore()
    const [isAnimating, setIsAnimating] = useState(false)

    const { data: profile, isLoading: isProfileLoading, isError: isProfileError } = useGetMyProfile()
    const setUser = useUserStore((state) => state.setUser)
    const user = useUserStore((state) => state.user)

    useEffect(() => {
        if (profile) {
            setUser(profile)
        }
    }, [profile, setUser])

    if (isProfileLoading) return null
    if (isProfileError) return null

    const handleSafeToggle = () => {
        setIsAnimating(true)
        toggleSidebar()
    }

    // 트랜지션 완료 감지 함수
    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        // 자식 요소(버튼 색상 변화 등)의 이벤트가 올라오는 것을 막고,
        // 정확히 이 부모 박스의 애니메이션이 끝났을 때만 상태를 false로 바꿔줍니다.
        if (e.target === e.currentTarget) {
            setIsAnimating(false)
        }
    }

    return (
        <div className="absolute top-0 left-0 h-screen z-50">
            <div
                onTransitionEnd={handleTransitionEnd}
                onClick={handleSafeToggle}
                className={`absolute top-0 left-0 w-15 h-screen flex flex-col gap-6 justify-start items-center pt-8 pb-4 bg-gray-500-op70 transition-opacity duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <MineLogo className="cursor-pointer hover:text-gray-100 text-gray-100-op40 w-5 h-7.5" />
                <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
                    <SidebarClosedBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                    <SidebarClosedBlock icon={<Sidebar_like />} title="저장한 매거진" to="saved" />
                    <SidebarClosedBlock icon={<Sidebar_others />} title="둘러보기" to="explore" />
                </div>
                {isProfileLoading ? (
                    <SkeletonAvatar />
                ) : (
                    <img
                        src={user?.profileImageUrl}
                        className="w-7.5 h-7.5 rounded-full mt-auto object-cover"
                        alt="사용자 프로필"
                    />
                )}
            </div>

            <div
                className={`absolute top-0 left-0 w-60 h-screen transition-transform duration-200 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }  ${isAnimating ? 'text-transparent' : ''}`}
            >
                <SidebarOpen onclick={toggleSidebar} />
            </div>
        </div>
    )
}

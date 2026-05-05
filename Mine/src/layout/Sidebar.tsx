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

    const { data: profile, isLoading: isProfileLoading } = useGetMyProfile()
    const setUser = useUserStore((state) => state.setUser)
    const user = useUserStore((state) => state.user)

    useEffect(() => {
        if (profile) setUser(profile)
    }, [profile, setUser])

    const handleSafeToggle = () => {
        setIsAnimating(true)
        toggleSidebar()
    }

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setIsAnimating(false)
    }

    return (
        <div className="absolute top-0 left-0 h-screen z-50">
            <div
                onTransitionEnd={handleTransitionEnd}
                onClick={handleSafeToggle}
                className={`absolute top-0 left-0 w-15 h-screen flex flex-col justify-between items-center pt-8 pb-4 px-3.75 bg-gray-500-op40 transition-opacity duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <div className="flex flex-col items-center gap-6">
                    <MineLogo className="cursor-pointer hover:text-gray-100 text-gray-100-op40 w-5 h-7.5" />
                    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <SidebarClosedBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarClosedBlock icon={<Sidebar_like />} title="저장한 매거진" to="saved" />
                        <SidebarClosedBlock icon={<Sidebar_others />} title="둘러보기" to="explore" />
                    </div>
                </div>

                {isProfileLoading ? (
                    <SkeletonAvatar className="w-7.5 h-7.5 object-cover" />
                ) : (
                    <img
                        src={user?.profileImageUrl}
                        className="w-7.5 h-7.5 rounded-full object-cover"
                        alt="사용자 프로필"
                    />
                )}
            </div>

            <div
                className={`absolute top-0 left-0 w-60 h-screen transition-transform duration-200 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } ${isAnimating ? 'text-transparent' : ''}`}
            >
                <SidebarOpen onclick={toggleSidebar} />
            </div>
        </div>
    )
}
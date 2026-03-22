import { useEffect } from 'react'
import MineLogo from '../icon/logo.svg?react'
import SidebarOpen from './sidebar/SidebarOpen'
import Sidebar_new from '../icon/sidebar_new.svg?react'
import Sidebar_like from '../icon/sidebar_like.svg?react'
import Sidebar_others from '../icon/sidebar_others.svg?react'
import SidebarClosedBlock from './sidebar/SidebarClosedBlock'
import useGetMyProfile from '../hooks/useGetMyProfile'
import useUserStore from '../stores/user'
import useSidebarStore from '../stores/sidebar'

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebarStore()

    const { data: profile, isLoading: isProfileLoading, isError: isProfileError } = useGetMyProfile()
    const setUser = useUserStore((state) => state.setUser)
    const user = useUserStore((state) => state.user)

    useEffect(() => {
        if (profile) {
            setUser(profile) // API로 받아온 정보를 주스탠드에 저장
        }
    }, [profile, setUser])

    if (isProfileLoading) return null
    if (isProfileError) {
        return null
    }

    return (
        <div className="relative z-50">
            {!isOpen && (
                <div className="absolute top-0 left-0 w-15 h-screen flex flex-col gap-6 justify-start items-center pt-8 pb-8 bg-gray-500-op70">
                    <MineLogo
                        className="cursor-pointer hover:text-gray-100 text-gray-100-op40 w-5 h-7.5"
                        onClick={toggleSidebar}
                    />
                    <div className="flex flex-col">
                        <SidebarClosedBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarClosedBlock icon={<Sidebar_like />} title="저장한 매거진" to="/magazine/saved" />
                        <SidebarClosedBlock icon={<Sidebar_others />} title="둘러보기" to="/magazine/explore" />
                    </div>
                    <img src={user?.profileImageUrl} className="w-7.5 h-7.5 rounded-full mt-auto object-cover"></img>
                </div>
            )}

            {isOpen && (
                <>
                    <div className="absolute top-0 left-0">
                        <SidebarOpen onclick={toggleSidebar} />
                    </div>
                </>
            )}
        </div>
    )
}

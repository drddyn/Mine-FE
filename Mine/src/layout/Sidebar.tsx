import { useEffect, useState } from 'react'
import MineLogo from '../icon/minelogo_small.svg?react'
import SidebarOpen from './sidebar/SidebarOpen'
import Sidebar_main from '../icon/sidebar_main.svg?react'
import Sidebar_new from '../icon/sidebar_new.svg?react'
import Sidebar_like from '../icon/sidebar_like.svg?react'
import Sidebar_others from '../icon/sidebar_others.svg?react'
import SidebarClosedBlock from './sidebar/SidebarClosedBlock'
import useGetMyProfile from '../hooks/useGetMyProfile'
import useUserStore from '../stores/user'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }
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
        alert('프로필 불러오기 실패')
        return null
    }

    return (
        <div className="fixed top-0 left-0 z-50">
            {!isSidebarOpen && (
                <div className="w-15 h-screen flex flex-col gap-9.5 justify-start items-center pt-8 pb-6 bg-main-light">
                    <MineLogo className="cursor-pointer" onClick={toggleSidebar} />
                    <div className="flex flex-col">
                        <SidebarClosedBlock icon={<Sidebar_main />} title="메인" to="/mymagazine" />
                        <SidebarClosedBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarClosedBlock icon={<Sidebar_like />} title="저장한 매거진" to="/magazine/saved" />
                        <SidebarClosedBlock icon={<Sidebar_others />} title="둘러보기" to="/magazine/explore" />
                    </div>
                    <img src={user?.profileImageUrl} className="w-7.5 h-7.5 rounded-full mt-auto"></img>
                </div>
            )}

            {isSidebarOpen && (
                <>
                    <div className="inset-0 z-40 pointer-events-none" onClick={toggleSidebar} />
                    <SidebarOpen onclick={toggleSidebar} />
                </>
            )}
        </div>
    )
}

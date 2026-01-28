import MineLogo from '../../icon/minelogo_small.svg?react'
import SidebarButton from '../../icon/sidebarButton.svg?react'

import SidebarBlock from './SidebarBlock'
import Sidebar_main from '../../icon/sidebar_main.svg?react'
import Sidebar_new from '../../icon/sidebar_new.svg?react'
import Sidebar_like from '../../icon/sidebar_like.svg?react'
import Sidebar_others from '../../icon/sidebar_others.svg?react'
import SidebarMagazine from './SidebarMagazine'
import SidebarSectionList from './SidebarSectionList'
import Setting from '../../icon/setting.svg?react'
import { useState } from 'react'
import SettingsModal from '../../components/settings/SettingsModal'
import SidebarTitle from './SidebarTitle'
import useGetMyMagazines from '../../hooks/useGetMyMagazines'
// import useGetMyProfile from '../../hooks/useGetMyProfile'
import useUserStore from '../../stores/user'

interface SidebarProps {
    onclick: () => void
}

export default function SidebarOpen({ onclick }: SidebarProps) {
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const [isMagazineOpen, setIsMagazineOpen] = useState(false)
    const [isSectionOpen, setIsSectionOpen] = useState(false)

    const handleMagazineToggleOpen = () => {
        setIsMagazineOpen((prev) => !prev)
    }
    const handleSectionToggleOpen = () => {
        setIsSectionOpen((prev) => !prev)
    }

    const {
        data,
        isLoading: isMagLoading,
        isError: isMagError,
    } = useGetMyMagazines({
        page: 0,
        size: 5,
        sort: [],
    })

    const { user } = useUserStore()

    if (isMagLoading) return null
    if (isMagError) {
        alert('목록 불러오기 실패')
        return null
    }

    return (
        <>
            <div className="h-screen w-66.5 bg-main-light z-50 transition-transform duration-30">
                <div className="flex flex-col h-full gap-9.5">
                    <div className="flex gap-2 mt-8 ml-4 items-center">
                        <MineLogo />
                        <div className="font-semibold24 pr-27 text-main-default">MINE</div>
                        <SidebarButton className="cursor-pointer" onClick={onclick} />
                    </div>
                    <div className="flex flex-col">
                        <SidebarBlock icon={<Sidebar_main />} title="메인" to="/mymagazine" />
                        <SidebarBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarBlock icon={<Sidebar_like />} title="저장한 매거진" to="" />
                        <SidebarBlock icon={<Sidebar_others />} title="둘러보기" to="" />
                    </div>
                    <div className="flex flex-col mt-6">
                        <SidebarTitle onClick={handleMagazineToggleOpen} title="내 매거진" />
                        {isMagazineOpen && (
                            <>
                                {data?.content.map((magazine) => (
                                    <SidebarMagazine key={magazine.id} title={magazine.title} />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="flex flex-col mt-6">
                        <SidebarTitle onClick={handleSectionToggleOpen} title="최근에 열람한 섹션" />
                        {isSectionOpen && (
                            <>
                                <SidebarSectionList title="베스트셀러" />
                            </>
                        )}
                    </div>

                    <div className="flex justify-between mt-auto mb-6 pl-6.5 pr-6 items-center ">
                        <div className="flex gap-2 items-center">
                            <img className="w-7.5 h-7.5 rounded-full" src={user?.profileImageUrl} alt="프로필"></img>
                            <div className="font-light14 text-black-textSmallTitle">{user?.nickname}</div>
                        </div>
                        <button onClick={() => setIsSettingOpen(true)} className="cursor-pointer">
                            <Setting />
                        </button>
                    </div>
                </div>
            </div>
            {isSettingOpen && <SettingsModal onClose={() => setIsSettingOpen(false)} />}
        </>
    )
}

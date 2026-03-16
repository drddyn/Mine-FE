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
import useUserStore from '../../stores/user'
import useGetRecentSection from '../../hooks/useGetRecentSection'
import { useNavigate } from 'react-router-dom'
import useGetMyMagazineList from '../../hooks/useGetMyMagazines'
import SidebarSkeleton from './SidebarSkeleton'

interface SidebarProps {
    onclick: () => void
}

export default function SidebarOpen({ onclick }: SidebarProps) {
    const navigate = useNavigate()
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const [isMagazineOpen, setIsMagazineOpen] = useState(true)
    const [isSectionOpen, setIsSectionOpen] = useState(true)

    const handleMagazineToggleOpen = () => {
        setIsMagazineOpen((prev) => !prev)
    }
    const handleSectionToggleOpen = () => {
        setIsSectionOpen((prev) => !prev)
    }

    const {
        data: magazine,
        isLoading: isMagLoading,
        isError: isMagError,
    } = useGetMyMagazineList({
        page: 0,
        size: 100,
        sort: [],
    })

    const { data: section, isLoading: isSecLoading, isError: isSecError } = useGetRecentSection()

    const { user } = useUserStore()

    const handleSectionClick = (magazineId: number, sectionId: number) => {
        navigate(`/magazine/${magazineId}/section/${sectionId}`)
        onclick()
    }
    const handleMagazineClick = (magazineId: number) => {
        navigate(`/magazine/${magazineId}`)
        onclick()
    }

    if (isMagLoading || isSecLoading) return <SidebarSkeleton />
    if (isMagError) {
        alert('목록 불러오기 실패')
        return null
    }
    if (isSecError) {
        alert('섹션 불러오기 실패')
        return null
    }

    return (
        <>
            <div className="absolute top-0 left-0 h-screen w-60 pb-4 bg-gray-500-op70 z-50 transition-transform duration-300">
                <div className="flex flex-col h-full gap-6">
                    <div className="flex gap-2 mt-8 mr-4 ml-5 items-center">
                        <MineLogo />
                        <div className="font-semibold24 pr-20 text-white">MINE</div>
                        <SidebarButton className="cursor-pointer" onClick={onclick} />
                    </div>
                    <div className="flex flex-col">
                        <SidebarBlock icon={<Sidebar_main />} title="메인" to="/mymagazine" />
                        <SidebarBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarBlock icon={<Sidebar_like />} title="저장한 매거진" to="/magazine/saved" />
                        <SidebarBlock icon={<Sidebar_others />} title="둘러보기" to="/magazine/explore" />
                    </div>

                    <div className="flex flex-col">
                        <SidebarTitle
                            onClick={handleSectionToggleOpen}
                            title="최근에 열람한 섹션"
                            isOpen={isSectionOpen}
                        />
                        {isSectionOpen && (
                            <>
                                {section?.map((section) => (
                                    <SidebarSectionList
                                        key={section.sectionId}
                                        title={section.heading}
                                        onclick={() => handleSectionClick(section.magazineId, section.sectionId)}
                                        magazineId={section.magazineId}
                                        sectionId={section.sectionId}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <SidebarTitle onClick={handleMagazineToggleOpen} title="내 매거진" isOpen={isMagazineOpen} />

                        {isMagazineOpen && (
                            <div className="h-52 overflow-auto custom-scrollbar">
                                {magazine?.content?.map((magazine) => (
                                    <SidebarMagazine
                                        
                                        id={magazine.magazineId}
                                        title={magazine.title}
                                        onclick={() => handleMagazineClick(magazine.magazineId)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between mt-auto pl-6.5 pr-6 items-center ">
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-7.5 h-7.5 rounded-full object-cover"
                                src={user?.profileImageUrl}
                                alt="프로필"
                            ></img>
                            <div className="font-light14 text-gray-100">{user?.nickname}</div>
                        </div>
                        <button onClick={() => setIsSettingOpen(true)} className="cursor-pointer">
                            <Setting className="text-gray-100-op70" />
                        </button>
                    </div>
                </div>
            </div>
            {isSettingOpen && <SettingsModal onClose={() => setIsSettingOpen(false)} />}
        </>
    )
}

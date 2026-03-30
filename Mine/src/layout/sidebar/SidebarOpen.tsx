import MineLogo from '../../icon/logo_with_title.svg?react'
import SidebarButton from '../../icon/sidebarButton.svg?react'
import SidebarBlock from './SidebarBlock'
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
        navigate(`/${magazineId}/${sectionId}`)
        onclick()
    }
    const handleMagazineClick = (magazineId: number) => {
        navigate(`/${magazineId}`)
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
            <div className="absolute top-0 left-0 h-screen w-60 pb-4 bg-gray-500-op70 z-50 transition-transform ease-in-out duration-300">
                <div className="flex flex-col h-full gap-6">
                    <div className="flex gap-2 mt-8 ml-5 mr-4 items-center justify-between">
                        <MineLogo className="w-21 h-7.5 text-gray-100/50" />
                        <SidebarButton className="cursor-pointer text-gray-100-op70" onClick={onclick} />
                    </div>
                    <div className="flex flex-col">
                        <SidebarBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                        <SidebarBlock icon={<Sidebar_like />} title="저장한 매거진" to="saved" />
                        <SidebarBlock icon={<Sidebar_others />} title="둘러보기" to="explore" />
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
                                        key={magazine.magazineId}
                                        id={magazine.magazineId}
                                        title={magazine.title}
                                        onclick={() => handleMagazineClick(magazine.magazineId)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between mt-auto pl-6.5 pr-6 items-center">
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-7.5 h-7.5 rounded-full object-cover"
                                src={user?.profileImageUrl}
                                alt="사용자 프로필"
                            />
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

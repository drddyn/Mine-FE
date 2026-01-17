import MineLogo from '../../icon/minelogo.svg?react'
import SidebarButton from '../../icon/sidebarButton.svg?react'

import SidebarBlock from './SidebarBlock'
import Sidebar_main from '../../icon/sidebar_main.svg?react'
import Sidebar_new from '../../icon/sidebar_new.svg?react'
import Sidebar_like from '../../icon/sidebar_like.svg?react'
import Sidebar_others from '../../icon/sidebar_others.svg?react'
import SidebarMagazine from './SidebarMagazine'
import SidebarSectionList from './SidebarSectionList'
import Setting from '../../icon/setting.svg?react'

interface SidebarProps {
    onclick: () => void
}

export default function SidebarOpen({ onclick }: SidebarProps) {
    return (
        <div className="h-screen w-66.5 bg-main-light rounded-r-[25px] z-50 transition-transform duration-30">
            <div className="flex flex-col h-full gap-6">
                <div className="flex gap-2 mt-11.5 ml-6.25 items-center">
                    <MineLogo />
                    <div className="pr-20 font-semibold24 text-main-default">MINE</div>
                    <SidebarButton onClick={onclick} />
                </div>
                <div className="flex flex-col">
                    <SidebarBlock icon={<Sidebar_main />} title="메인" />
                    <SidebarBlock icon={<Sidebar_new />} title="새 매거진" />
                    <SidebarBlock icon={<Sidebar_like />} title="저장한 매거진" />
                    <SidebarBlock icon={<Sidebar_others />} title="둘러보기" />
                </div>
                <div className="flex flex-col mt-6">
                    <SidebarMagazine title="베스트셀러" child={<SidebarSectionList />} />
                    <SidebarMagazine title="2025 브랜드 리브랜딩" />
                </div>

                <div className="flex justify-between mt-auto mb-6 pl-6.5 pr-6 items-center ">
                    <div className="flex gap-2 items-center">
                        <div className="w-7.5 h-7.5 rounded-full bg-black-icon"></div>
                        <div className="font-light14 text-black-textSmallTitle">닉네임</div>
                    </div>
                    <Setting />
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react'
import MineLogo from '../../icon/minelogo.svg?react'
import SidebarButton from '../../icon/SidebarButton.svg?react'
import ToggleDown from '../../icon/Toggle_down.svg?react'
import ToggleUp from '../../icon/Toggle_up.svg?react'
import Hamburger from '../../icon/Hamburger.svg?react'

interface SidebarProps {
    onclick: () => void
}

export default function SidebarOpen({ onclick }: SidebarProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const toggleList = () => {
        setIsToggleOpen((prev) => !prev)
    }
    return (
        <div className="w-66.5 h-screen bg-main-lightlight rounded-r-[25px]">
            <div className="flex flex-col h-full ml-6.5 gap-10">
                <div className="flex gap-2 mt-12 items-center">
                    <MineLogo />
                    <div className="pr-20 font-semibold24 text-main-default">MINE</div>
                    <SidebarButton onClick={onclick} />
                </div>
                <div className="flex flex-col pl-2.5 pr-9 gap-2">
                    <div className="flex justify-between">
                        <div className="font-light14 text-black-textSmallTitle">sports</div>
                        {!isToggleOpen && <ToggleDown onClick={toggleList} />}
                        {isToggleOpen && <ToggleUp onClick={toggleList} />}
                    </div>
                    {isToggleOpen && (
                        <div className="flex flex-col pl-4">
                            <div className="flex items-center justify-between group">
                                <div className="font-light14 text-black-textSmallTitle">balenciaga</div>
                                <Hamburger className="opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    )}
                    <div className="my-10 border border-black-icon"></div>
                    <div className="font-light14 text-black-textSmallTitle">최근 열람한 매거진</div>
                    <div className="flex flex-col ml-4 gap-2">
                        <div className="flex items-center justify-between group">
                            <div className="font-light14 text-black-textSmallTitle">balenciaga</div>
                            <Hamburger className="opacity-0 group-hover:opacity-100" />
                        </div>
                        <div className="flex items-center justify-between group">
                            <div className="font-light14 text-black-textSmallTitle">balenciaga</div>
                            <Hamburger className="opacity-0 group-hover:opacity-100" />
                        </div>
                        <div className="flex items-center justify-between group">
                            <div className="font-light14 text-black-textSmallTitle">balenciaga</div>
                            <Hamburger className="opacity-0 group-hover:opacity-100" />
                        </div>
                    </div>
                </div>
                <div className="flex mt-auto mb-6 gap-2 items-center ">
                    <div className="w-7.5 h-7.5 rounded-full bg-black-icon"></div>
                    <div className="font-light14 text-black-textSmallTitle">닉네임</div>
                </div>
            </div>
        </div>
    )
}

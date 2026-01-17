import { useState } from 'react'
import Toggle from '../../icon/toggle_up.svg?react'

interface SidebarMagazineProps {
    title: string
    child?: React.ReactNode
}

export default function SidebarMagazine({ title, child }: SidebarMagazineProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const toggleList = () => {
        setIsToggleOpen((prev) => !prev)
    }
    return (
        <div className="w-full flex flex-col ">
            <div
                className="w-full flex justify-between hover:bg-main-opacity20 py-2 items-center pl-7 pr-4 text-black-textSmallTitle font-semibold14"
                onClick={toggleList}
            >
                {title}
                {isToggleOpen ? <Toggle /> : <Toggle className="rotate-180" />}
            </div>
            {isToggleOpen && <>{child}</>}
        </div>
    )
}

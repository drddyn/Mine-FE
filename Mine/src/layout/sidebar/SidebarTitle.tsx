import Toggle from '../../icon/toggle.svg?react'
interface SidebarTitleProps {
    onClick: () => void
    title: string
    isOpen: boolean
}

export default function SidebarTitle({ onClick, title, isOpen }: SidebarTitleProps) {
    return (
        <div
            className="flex ml-5 my-[6.5px] gap-2 items-center text-gray-300 font-medium12 cursor-pointer"
            onClick={onClick}
        >
            <span className="leading-none">{title}</span>
            <Toggle className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </div>
    )
}

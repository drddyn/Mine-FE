import Share from '../../icon/share.svg?react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'

interface HamburgerSectionProps {
    icon: React.ReactNode
    title: string
}

interface SidebarHamburgerModalProps {
    top: number
    left: number
}

function HamburgerSection({ icon, title }: HamburgerSectionProps) {
    return (
        <div className="flex h-9 w-full px-5 py-2 items-center gap-2 bg-main-light hover:bg-main-opacity20 font-medium14 hover:font-semibold14 text-black-textSmallTitle">
            <span className="[&>svg]:w-5 [&>svg]:h-5 text-black-textSmallTitle">{icon}</span>
            {title}
        </div>
    )
}

export default function SidebarHamburgerModal({ top, left }: SidebarHamburgerModalProps) {
    return (
        <div
            className="fixed flex flex-col w-36.5 h-31 py-2 rounded-lg bg-white border border-main-opacity20 shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] z-100"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <HamburgerSection title="공유" icon={<Share />} />
            <HamburgerSection title="이름 변경" icon={<Edit />} />
            <HamburgerSection title="삭제" icon={<Delete />} />
        </div>
    )
}

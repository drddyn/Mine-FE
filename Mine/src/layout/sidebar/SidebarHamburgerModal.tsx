import Share from '../../icon/share.svg?react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import useDeleteMagazine from '../../hooks/useDeleteMagazine'

interface HamburgerSectionProps {
    icon: React.ReactNode
    title: string
    onclick?: React.MouseEventHandler<HTMLDivElement>
}

interface SidebarHamburgerModalProps {
    top: number
    left: number
    id: number
    handleClose: () => void
    onEdit: (id: number) => void
}

function HamburgerSection({ icon, title, onclick }: HamburgerSectionProps) {
    return (
        <div
            className="flex h-9 w-full px-5 py-2 items-center gap-2 bg-main-light hover:bg-main-opacity20 font-medium14 hover:font-semibold14 text-black-textSmallTitle"
            onClick={onclick}
        >
            <span className="[&>svg]:w-5 [&>svg]:h-5 text-black-textSmallTitle">{icon}</span>
            {title}
        </div>
    )
}

export default function SidebarHamburgerModal({ id, top, left, handleClose, onEdit }: SidebarHamburgerModalProps) {
    const deleteMutation = useDeleteMagazine()
    const onDeleteClick: React.MouseEventHandler<HTMLDivElement> = () => {
        deleteMutation.mutate({ id: id })
        handleClose()
    }
    const onEditClick: React.MouseEventHandler<HTMLDivElement> = () => {
        onEdit(id)
        handleClose()
    }
    return (
        <div
            key={id}
            className="fixed flex flex-col w-36.5 h-31 py-2 rounded-lg bg-white border border-main-opacity20 shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] z-100"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <HamburgerSection title="공유" icon={<Share />} />
            <HamburgerSection title="이름 변경" icon={<Edit />} onclick={onEditClick} />
            <HamburgerSection title="삭제" icon={<Delete />} onclick={onDeleteClick} />
        </div>
    )
}

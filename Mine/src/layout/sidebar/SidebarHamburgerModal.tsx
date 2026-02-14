import Share from '../../icon/share.svg?react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import useDeleteMagazine from '../../hooks/useDeleteMagazine'
import { HamburgerSection } from '../../components/HamburgerSection'

interface SidebarHamburgerModalProps {
    top: number
    left: number
    id: number
    handleClose: () => void
    onEdit: (id: number) => void
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

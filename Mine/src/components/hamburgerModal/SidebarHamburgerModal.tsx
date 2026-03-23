import { useState, useRef } from 'react'
import Share from '../../icon/share.svg?react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import useDeleteMagazine from '../../hooks/useDeleteMagazine'
import { HamburgerSection } from './HamburgerSection'
import useClickOutside from '../../hooks/useClickOutside'
import ShareModal from './ShareModal'

interface SidebarHamburgerModalProps {
    top: number
    left: number
    id: number
    handleClose: () => void
    onEdit: (id: number) => void
}

export default function SidebarHamburgerModal({ id, top, left, handleClose, onEdit }: SidebarHamburgerModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const deleteMutation = useDeleteMagazine()
    const [showShareModal, setShowShareModal] = useState(false)

    const onDeleteClick: React.MouseEventHandler<HTMLDivElement> = () => {
        deleteMutation.mutate({ id: id })
        handleClose()
    }
    const onEditClick: React.MouseEventHandler<HTMLDivElement> = () => {
        onEdit(id)
        handleClose()
    }

    return (
        <>
            {!showShareModal && (
                <div
                    ref={modalRef}
                    key={id}
                    className="absolute flex flex-col px-1 py-2 rounded-lg bg-gray-500-op70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-100"
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <HamburgerSection title="공유" icon={<Share />} onClick={() => setShowShareModal(true)} />
                    <HamburgerSection title="이름 변경" icon={<Edit />} onClick={onEditClick} />
                    <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
                </div>
            )}

            {showShareModal && <ShareModal onClose={handleClose} />}
        </>
    )
}

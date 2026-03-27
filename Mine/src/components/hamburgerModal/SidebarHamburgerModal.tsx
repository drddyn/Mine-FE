import { useState, useRef } from 'react'
import Share from '../../icon/share.svg?react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteMagazine from '../../hooks/useDeleteMagazine'
import useClickOutside from '../../hooks/useClickOutside'
import ShareModal from './ShareModal'
import ConfirmModal from '../common/ConfirmModal'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

interface SidebarHamburgerModalProps {
    top: number
    left: number
    id: number
    title: string
    handleClose: () => void
    onEdit: (id: number) => void
}

export default function SidebarHamburgerModal({ id, title, top, left, handleClose, onEdit }: SidebarHamburgerModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const navigate = useNavigate()
    const deleteMutation = useDeleteMagazine({
        onSuccess: () => {
            navigate('/')
        }
    })
    const [showShareModal, setShowShareModal] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const onDeleteClick = () => {
        setShowConfirmModal(true)
    }

    const onConfirmDelete = () => {
        deleteMutation.mutate({ id })
        setShowConfirmModal(false)
        handleClose()
    }

    const onEditClick: React.MouseEventHandler<HTMLDivElement> = () => {
        onEdit(id)
        handleClose()
    }

    return (
        <>
            {!showShareModal && !showConfirmModal && (
                <div
                    ref={modalRef}
                    className="absolute flex flex-col px-1 py-2 rounded-lg bg-gray-500-op70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-100"
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <HamburgerSection title="공유" icon={<Share />} onClick={() => setShowShareModal(true)} />
                    <HamburgerSection title="이름 변경" icon={<Edit />} onClick={onEditClick} />
                    <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
                </div>
            )}

            {showShareModal && <ShareModal onClose={handleClose} />}

            {showConfirmModal &&
                createPortal(
                    <ConfirmModal
                        title="해당 매거진을 삭제하시겠습니까?"
                        description="매거진"
                        itemName={title}
                        onConfirm={onConfirmDelete}
                        onCancel={() => setShowConfirmModal(false)}
                    />,
                    document.body
                )}
        </>
    )
}
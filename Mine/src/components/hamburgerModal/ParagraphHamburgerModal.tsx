import { useRef, useState } from 'react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteParagraph from '../../hooks/useDeleteParagraph'
import useClickOutside from '../../hooks/useClickOutside'
import ConfirmModal from '../common/ConfirmModal'
import { createPortal } from 'react-dom'

interface ParagraphHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    paragraphId?: number
    subtitle: string
    handleClose: () => void
}

export default function ParagraphHamburgerModal({
    paragraphId,
    sectionId,
    magazineId,
    subtitle,
    top,
    left,
    handleClose,
}: ParagraphHamburgerModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const deleteParagraphMutation = useDeleteParagraph()
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const onDeleteClick = () => {
        setShowConfirmModal(true)
    }

    const onConfirmDelete = () => {
        deleteParagraphMutation.mutate({
            magazineId: Number(magazineId),
            sectionId: Number(sectionId),
            paragraphId: Number(paragraphId),
        })
        setShowConfirmModal(false)
        handleClose()
    }

    return (
        <>
            {!showConfirmModal && (
                <div
                    ref={modalRef}
                    className="absolute flex flex-col px-1 py-1 rounded-lg bg-gray-500-op70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-100"
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <HamburgerSection title="이름 변경" icon={<Edit />} />
                    <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
                </div>
            )}

            {showConfirmModal &&
                createPortal(
                    <ConfirmModal
                        title="해당 문단을 삭제하시겠습니까?"
                        description="문단"
                        itemName={subtitle}
                        onConfirm={onConfirmDelete}
                        onCancel={() => setShowConfirmModal(false)}
                    />,
                    document.body
                )}
        </>
    )
}
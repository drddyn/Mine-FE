import { useRef, useState } from 'react'
import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteParagraph from '../../hooks/useDeleteParagraph'
import useDeleteSection from '../../hooks/useDeleteSection'
import useClickOutside from '../../hooks/useClickOutside'
import ConfirmModal from '../common/ConfirmModal'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import useGetSectionDetail from '../../hooks/useGetSectionDetail'

interface ParagraphHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    paragraphId?: number
    subtitle: string
    handleClose: () => void
    onEdit: () => void
}

export default function ParagraphHamburgerModal({
    paragraphId,
    sectionId,
    magazineId,
    subtitle,
    top,
    left,
    handleClose,
    onEdit,
}: ParagraphHamburgerModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const navigate = useNavigate()
    const { data: sectionDetail } = useGetSectionDetail(magazineId ?? 0, sectionId ?? 0)

    const deleteParagraphMutation = useDeleteParagraph()
    const deleteSectionMutation = useDeleteSection({
        onSuccess: () => {
            navigate(`/${magazineId}`)
        },
    })

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const onDeleteClick = () => {
        setShowConfirmModal(true)
    }

    const onConfirmDelete = () => {
        const paragraphCount = sectionDetail?.paragraphs?.length ?? 0

        if (paragraphCount <= 1) {
            if (magazineId === undefined || sectionId === undefined) {
                return
            }
            deleteSectionMutation.mutate({ magazineId, sectionId })
        } else {
            if (magazineId === undefined || sectionId === undefined || paragraphId === undefined) {
                return
            }
            deleteParagraphMutation.mutate({ magazineId, sectionId, paragraphId })
        }
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
                    <HamburgerSection title="이름 변경" icon={<Edit />} onClick={onEdit} />
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
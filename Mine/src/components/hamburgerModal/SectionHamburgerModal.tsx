import { useRef, useState } from 'react'
import Edit from '../../icon/edit.svg?react'
import Share from '../../icon/share.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteSection from '../../hooks/useDeleteSection'
import useDeleteMagazine from '../../hooks/useDeleteMagazine'
import ShareModal from './ShareModal'
import useClickOutside from '../../hooks/useClickOutside'
import ConfirmModal from '../common/ConfirmModal'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useMagazine } from '../../pages/magazine/MagazineProvider'

interface SectionHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    heading: string
    handleClose: () => void
    onEdit: () => void
}

export default function SectionHamburgerModal({
    sectionId,
    magazineId,
    heading,
    top,
    left,
    handleClose,
    onEdit,
}: SectionHamburgerModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const navigate = useNavigate()
    const magazinedata = useMagazine()

    const deleteSectionMutation = useDeleteSection({
        onSuccess: () => {
            navigate(`/${magazineId}`)
        },
    })
    const deleteMagazineMutation = useDeleteMagazine({
        onSuccess: () => {
            navigate('/')
        },
    })

    const [showShareModal, setShowShareModal] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const onDeleteClick = () => {
        setShowConfirmModal(true)
    }

    const onConfirmDelete = () => {
        const sectionCount = magazinedata?.sections?.length ?? 0

        if (magazineId === undefined) {
            return
        }

        if (sectionCount <= 1) {
            deleteMagazineMutation.mutate({ id: magazineId })
        } else {
            if (sectionId === undefined) {
                return
            }
            deleteSectionMutation.mutate({ magazineId, sectionId })
        }
        setShowConfirmModal(false)
        handleClose()
    }

    return (
        <>
            {!showShareModal && !showConfirmModal && (
                <div
                    ref={modalRef}
                    className="absolute flex flex-col px-1 py-1 rounded-lg bg-gray-500-op70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-100"
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <HamburgerSection title="공유" icon={<Share />} onClick={() => setShowShareModal(true)} />
                    <HamburgerSection title="이름 변경" icon={<Edit />} onClick={onEdit} />
                    <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
                </div>
            )}

            {showShareModal && <ShareModal onClose={handleClose} />}

            {showConfirmModal &&
                createPortal(
                    <ConfirmModal
                        title="해당 섹션을 삭제하시겠습니까?"
                        description="섹션"
                        itemName={heading}
                        onConfirm={onConfirmDelete}
                        onCancel={() => setShowConfirmModal(false)}
                    />,
                    document.body
                )}
        </>
    )
}
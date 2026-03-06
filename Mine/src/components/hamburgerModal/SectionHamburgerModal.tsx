import Edit from '../../icon/edit.svg?react'
import Share from '../../icon/share.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteSection from '../../hooks/useDeleteSection'

interface SectionHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    children?: React.ReactNode
    handleClose: () => void
    // onEdit: (id?: number) => void
}

export default function SectionHamburgerModal({
    sectionId,
    magazineId,
    top,
    left,
    handleClose,
}: SectionHamburgerModalProps) {
    const deleteSectionMutation = useDeleteSection()
    const onDeleteClick: React.MouseEventHandler<HTMLDivElement> = () => {
        deleteSectionMutation.mutate({ magazineId: Number(magazineId), sectionId: Number(sectionId) })
        handleClose()
    }

    return (
        <div
            key={sectionId}
            className="fixed flex flex-col px-1 py-1 rounded-lg bg-gray-500-op70 shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] z-100"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <HamburgerSection title="공유" icon={<Share />} />
            <HamburgerSection title="이름 변경" icon={<Edit />} />
            <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
        </div>
    )
}

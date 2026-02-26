import Edit from '../icon/edit.svg?react'
import Delete from '../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'

interface ParagraphHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    children?: React.ReactNode
    handleClose: () => void
    // onEdit: (id?: number) => void
}

export default function ParagraphHamburgerModal({
    sectionId,
    // magazineId,
    top,
    left,
    handleClose,
}: ParagraphHamburgerModalProps) {
    // const deleteSectionMutation = useDeleteSection()
    const onDeleteClick: React.MouseEventHandler<HTMLDivElement> = () => {
        // deleteSectionMutation.mutate({ magazineId: Number(magazineId), sectionId: Number(sectionId) })
        handleClose()
    }

    return (
        <div
            key={sectionId}
            className="fixed flex flex-col w-36.5 py-2 rounded-lg bg-white border border-main-opacity20 shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] z-100"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <HamburgerSection title="이름 변경" icon={<Edit />} />
            <HamburgerSection title="삭제" icon={<Delete />} onClick={onDeleteClick} />
        </div>
    )
}

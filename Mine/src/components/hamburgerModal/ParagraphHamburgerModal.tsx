import Edit from '../../icon/edit.svg?react'
import Delete from '../../icon/delete.svg?react'
import { HamburgerSection } from './HamburgerSection'
import useDeleteParagraph from '../../hooks/useDeleteParagraph'

interface ParagraphHamburgerModalProps {
    top: number
    left: number
    sectionId?: number
    magazineId?: number
    paragraphId?: number
    children?: React.ReactNode
    handleClose: () => void
    // onEdit: (id?: number) => void
}

export default function ParagraphHamburgerModal({
    paragraphId,
    sectionId,
    magazineId,
    top,
    left,
    handleClose,
}: ParagraphHamburgerModalProps) {
    const deleteParagraphMutation = useDeleteParagraph()
    const onDeleteClick: React.MouseEventHandler<HTMLDivElement> = () => {
        deleteParagraphMutation.mutate({
            magazineId: Number(magazineId),
            sectionId: Number(sectionId),
            paragraphId: Number(paragraphId),
        })
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

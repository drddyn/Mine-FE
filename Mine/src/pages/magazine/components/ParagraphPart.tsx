import { useRef, useState } from 'react'
import Hamburger from '../../../icon/hamburger.svg?react'
import ReactMarkDown from 'react-markdown'
import ParagraphHamburgerModal from '../../../components/hamburgerModal/ParagraphHamburgerModal'
import { useMagazine } from '../MagazineProvider'
import usePatchSection from '../../../hooks/usePatchSection'
import useGetSectionDetail from '../../../hooks/useGetSectionDetail'

interface ParagraphPartProps {
    paragrahId?: number
    sectionId?: number
    sectionDir?: string
    titleDir?: string
    smallTitle?: string
    content: string
    imageUrl?: string
}

export default function ParagraphPart({
    paragrahId,
    sectionId,
    sectionDir,
    titleDir,
    smallTitle,
    content,
    imageUrl,
}: ParagraphPartProps) {
    const magazinedata = useMagazine()
    const patchSectionMutation = usePatchSection()
    const { data: sectionDetail } = useGetSectionDetail(magazinedata?.magazineId ?? 0, sectionId ?? 0)

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [draftTitle, setDraftTitle] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const isCommittingRef = useRef(false)

    const handleHamburger = () => setIsHamburgerOpen((prev) => !prev)
    const closeHamburger = () => setIsHamburgerOpen(false)

    const beginEdit = () => {
        setDraftTitle(smallTitle ?? '')
        setIsEditing(true)
        requestAnimationFrame(() => inputRef.current?.focus())
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setDraftTitle('')
        isCommittingRef.current = false
    }

    const commitEdit = () => {
        if (isCommittingRef.current) return
        isCommittingRef.current = true

        const next = draftTitle.trim()
        if (!next || next === smallTitle) {
            cancelEdit()
            return
        }

        const updatedParagraphs = sectionDetail?.paragraphs.map((p) => ({
            paragraphId: p.paragraphId,
            subtitle: p.paragraphId === paragrahId ? next : (p.subtitle ?? ''),
            text: p.text ?? '',
            imageUrl: p.imageUrl ?? '',
        }))

        patchSectionMutation.mutate(
            {
                magazineId: magazinedata?.magazineId ?? 0,
                sectionId: sectionId ?? 0,
                paragraphs: updatedParagraphs,
            },
            { onSuccess: () => cancelEdit() }
        )
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            e.preventDefault()
            cancelEdit()
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            commitEdit()
        }
    }

    return (
        <section className="group flex w-full items-center gap-10" dir={sectionDir}>
            {imageUrl && <img src={imageUrl} className="object-scale-down max-h-70 max-w-[45%] shrink-0" />}
            <div className="flex flex-col ltr:ml-2.5 rtl:mr-2.5 h-full items-start gap-6 flex-1">
                <div className="flex w-full justify-between items-center" dir={titleDir}>
                    {!isEditing ? (
                        <div className="font-medium36 font-notoserif text-gray-600">{smallTitle}</div>
                    ) : (
                        <input
                            ref={inputRef}
                            value={draftTitle}
                            onChange={(e) => setDraftTitle(e.target.value)}
                            onKeyDown={onKeyDown}
                            onBlur={commitEdit}
                            className="bg-transparent outline-none font-medium36 font-notoserif text-gray-600 w-full"
                        />
                    )}
                    <div className="relative flex items-center" dir="ltr">
                        <Hamburger
                            className="hover:text-black-icon text-black-icon cursor-pointer"
                            onClick={handleHamburger}
                        />
                        {isHamburgerOpen && (
                            <ParagraphHamburgerModal
                                handleClose={closeHamburger}
                                sectionId={sectionId}
                                magazineId={magazinedata?.magazineId}
                                paragraphId={paragrahId}
                                subtitle={smallTitle ?? ''}
                                top={10}
                                left={10}
                                onEdit={() => {
                                    closeHamburger()
                                    beginEdit()
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full font-regular16 text-black-textMain break-all" dir="ltr">
                    <ReactMarkDown>{content}</ReactMarkDown>
                </div>
            </div>
        </section>
    )
}
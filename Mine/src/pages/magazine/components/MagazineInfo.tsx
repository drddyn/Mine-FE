import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import { useRef, useState } from 'react'
import SectionHamburgerModal from '../../../components/hamburgerModal/SectionHamburgerModal'
import SidebarHamburgerModal from '../../../components/hamburgerModal/SidebarHamburgerModal'
import HeartCount from './HeartCount'
import { useMagazine } from '../MagazineProvider'
import { createPortal } from 'react-dom'
import useUpdateMagazineTitle from '../../../hooks/useUpdateMagazineTitle'

interface MagazineInfoProps {
    nickname?: string
    profileImage?: string
    magazineId?: number
    sectionId?: number
    mode: 'section' | 'magazine'
    onClick?: (magazineId: number) => void
}

export default function MagazineInfo({ nickname, profileImage, sectionId, mode, onClick }: MagazineInfoProps) {
    const magazinedata = useMagazine()
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 })
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [draftTitle, setDraftTitle] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const updateTitleMutation = useUpdateMagazineTitle()

    const openHamburger = () => setIsHamburgerOpen(true)
    const closeHamburger = () => setIsHamburgerOpen(false)

    const handleHamburger = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setModalPos({
            top: rect.top + window.scrollY,
            left: rect.right + 10,
        })
        openHamburger()
    }

    const beginEdit = () => {
        setDraftTitle(magazinedata?.title ?? '')
        setIsEditing(true)
        requestAnimationFrame(() => {
            inputRef.current?.focus()
        })
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setDraftTitle('')
    }

    const commitEdit = () => {
        const next = draftTitle.trim()
        if (!next || next === magazinedata?.title) {
            cancelEdit()
            return
        }
        updateTitleMutation.mutate(
            { id: magazinedata?.magazineId ?? 0, title: next, introduction: '' },
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
        <div className="flex w-full justify-between items-center self-stretch">
            <div className="flex items-center gap-2 basis-100">
                {!isEditing ? (
                    <div
                        className={`cursor-pointer ${mode === 'section' ? 'font-regular16 font-notoserif text-gray-600' : 'font-semibold20 font-pretendard text-gray-100'}`}
                        onClick={() => magazinedata?.magazineId && onClick?.(magazinedata.magazineId)}
                    >
                        {magazinedata?.title}
                    </div>
                ) : (
                    <input
                        ref={inputRef}
                        value={draftTitle}
                        onChange={(e) => setDraftTitle(e.target.value)}
                        onKeyDown={onKeyDown}
                        onBlur={commitEdit}
                        className={`bg-transparent outline-none ${mode === 'section' ? 'font-regular16 font-notoserif text-gray-600' : 'font-semibold20 font-pretendard text-gray-100'}`}
                    />
                )}

                <Hamburger className="rotate-90 text-black-icon cursor-pointer" onClick={handleHamburger} />

                {isHamburgerOpen && mode === 'section' && magazinedata?.magazineId !== undefined && sectionId !== undefined && (
                    <SectionHamburgerModal
                        handleClose={closeHamburger}
                        magazineId={magazinedata?.magazineId}
                        sectionId={sectionId}
                        top={modalPos.top}
                        left={modalPos.left}
                    />
                )}
            </div>

            <HeartCount
                hearts={magazinedata?.likeCount}
                magazineId={magazinedata?.magazineId}
                classname="basis-1 justify-center"
            />
            <ProfileBox nickname={nickname} profileImage={profileImage} mode={mode} classname="basis-100 justify-end" />

            {isHamburgerOpen && mode === 'magazine' && magazinedata?.magazineId !== undefined &&
                createPortal(
                    <SidebarHamburgerModal
                        handleClose={closeHamburger}
                        id={magazinedata.magazineId}
                        top={modalPos.top}
                        left={modalPos.left}
                        onEdit={() => {
                            closeHamburger()
                            beginEdit()
                        }}
                    />,
                    document.body
                )
            }
        </div>
    )
}
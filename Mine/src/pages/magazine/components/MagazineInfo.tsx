import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import { useRef, useState } from 'react'
import SectionHamburgerModal from '../../../components/hamburgerModal/SectionHamburgerModal'
import SidebarHamburgerModal from '../../../components/hamburgerModal/SidebarHamburgerModal'
import HeartCount from './HeartCount'
import { useMagazine } from '../MagazineProvider'
import useUpdateMagazineTitle from '../../../hooks/useUpdateMagazineTitle'

interface MagazineInfoProps {
    nickname?: string
    profileImage?: string
    magazineId?: number
    sectionId?: number
    likeCount?: number
    isLiked?: boolean
    mode: 'section' | 'magazine'
    onClick?: (magazineId: number) => void
}

export default function MagazineInfo({
    nickname,
    profileImage,
    sectionId,
    magazineId,
    likeCount,
    isLiked,
    mode,
    onClick,
}: MagazineInfoProps) {
    const magazinedata = useMagazine()
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [draftTitle, setDraftTitle] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const updateTitleMutation = useUpdateMagazineTitle()

    const toggleHamburger = () => setIsHamburgerOpen((prev) => !prev)
    const closeHamburger = () => setIsHamburgerOpen(false)

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
            { id: magazinedata?.magazineId ?? 0, title: next, introduction: magazinedata?.introduction ?? '' },
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

                <div className="relative flex items-center">
                    <Hamburger className="rotate-90 text-black-icon cursor-pointer" onClick={toggleHamburger} />

                    {isHamburgerOpen &&
                        mode === 'section' &&
                        magazinedata?.magazineId !== undefined &&
                        sectionId !== undefined && (
                            <SectionHamburgerModal
                                handleClose={closeHamburger}
                                magazineId={magazinedata?.magazineId}
                                sectionId={sectionId}
                                top={10}
                                left={10}
                            />
                        )}

                    {isHamburgerOpen && mode === 'magazine' && magazinedata?.magazineId !== undefined && (
                        <SidebarHamburgerModal
                            handleClose={closeHamburger}
                            id={magazinedata.magazineId}
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

            <HeartCount
                likeCount={likeCount} // SectionContent에서 받은 값
                isLiked={isLiked} // SectionContent에서 받은 값
                magazineId={magazineId || magazinedata?.magazineId}
                sectionId={sectionId} // 연결 고리 완성!
                classname="basis-1 justify-center"
            />
            <ProfileBox nickname={nickname} profileImage={profileImage} mode={mode} classname="basis-100 justify-end" />
        </div>
    )
}

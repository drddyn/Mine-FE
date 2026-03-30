import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import { useRef, useState } from 'react'
import SectionHamburgerModal from '../../../components/hamburgerModal/SectionHamburgerModal'
import SidebarHamburgerModal from '../../../components/hamburgerModal/SidebarHamburgerModal'
import HeartCount from './HeartCount'
import { useMagazine } from '../MagazineProvider'
import useUpdateMagazineTitle from '../../../hooks/useUpdateMagazineTitle'
import usePatchSection from '../../../hooks/usePatchSection'

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
    const isCommittingRef = useRef(false)
    const updateTitleMutation = useUpdateMagazineTitle()
    const patchSectionMutation = usePatchSection()

    const toggleHamburger = () => setIsHamburgerOpen((prev) => !prev)
    const closeHamburger = () => setIsHamburgerOpen(false)

    const currentHeading = magazinedata?.sections?.find((s) => s.sectionId === sectionId)?.heading ?? ''

    const beginMagazineEdit = () => {
        setDraftTitle(magazinedata?.title ?? '')
        setIsEditing(true)
        requestAnimationFrame(() => inputRef.current?.focus())
    }

    const beginSectionEdit = () => {
        setDraftTitle(currentHeading)
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

        if (mode === 'magazine') {
            if (!next || next === magazinedata?.title) {
                cancelEdit()
                return
            }
            updateTitleMutation.mutate(
                { id: magazinedata?.magazineId ?? 0, title: next, introduction: magazinedata?.introduction ?? '' },
                { onSuccess: () => cancelEdit() }
            )
        } else {
            if (!next || next === currentHeading || sectionId === undefined) {
                cancelEdit()
                return
            }
            patchSectionMutation.mutate(
                { magazineId: magazinedata?.magazineId ?? 0, sectionId, heading: next },
                { onSuccess: () => cancelEdit() }
            )
        }
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

    const displayTitle = mode === 'section' ? currentHeading : magazinedata?.title

    const handleTitleClick = () => {
        if (mode === 'section' && magazinedata?.magazineId) {
            onClick?.(magazinedata.magazineId)
        }
    }
    const currentSectionHeading = magazinedata?.sections?.find((s) => s.sectionId === sectionId)?.heading ?? ''

    return (
        <div className="flex w-full justify-between items-center self-stretch">
            <div className="flex items-center gap-2 basis-100">
                {!isEditing ? (
                    <div
                        className={`cursor-pointer ${mode === 'section' ? 'font-regular16 font-notoserif text-gray-600' : 'font-semibold20 font-pretendard text-gray-100'}`}
                        onClick={handleTitleClick}
                    >
                        {displayTitle}
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
                    <Hamburger
                        className={`rotate-90 cursor-pointer ${mode === 'section' ? 'text-gray-300' : 'text-gray-100-op70'}`}
                        onClick={toggleHamburger}
                    />

                    {isHamburgerOpen &&
                        mode === 'section' &&
                        magazinedata?.magazineId !== undefined &&
                        sectionId !== undefined && (
                            <SectionHamburgerModal
                                handleClose={closeHamburger}
                                magazineId={magazinedata?.magazineId}
                                sectionId={sectionId}
                                heading={currentSectionHeading}
                                top={10}
                                left={10}
                                onEdit={() => {
                                    closeHamburger()
                                    beginSectionEdit()
                                }}
                            />
                        )}

                    {isHamburgerOpen && mode === 'magazine' && magazinedata?.magazineId !== undefined && (
                        <SidebarHamburgerModal
                            handleClose={closeHamburger}
                            id={magazinedata.magazineId}
                            title={magazinedata.title ?? ''}
                            top={10}
                            left={10}
                            onEdit={() => {
                                closeHamburger()
                                beginMagazineEdit()
                            }}
                        />
                    )}
                </div>
            </div>

            <HeartCount
                likeCount={likeCount} // SectionContent에서 받은 값
                isLiked={isLiked} // SectionContent에서 받은 값
                magazineId={magazineId || magazinedata?.magazineId}
                classname="basis-1 justify-center"
            />
            <ProfileBox nickname={nickname} profileImage={profileImage} mode={mode} classname="basis-100 justify-end" />
        </div>
    )
}

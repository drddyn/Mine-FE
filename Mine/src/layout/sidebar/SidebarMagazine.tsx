import { useEffect, useRef, useState } from 'react'
import Hamburger from '../../icon/hamburger.svg?react'
import SidebarHamburgerModal from './SidebarHamburgerModal'
import { createPortal } from 'react-dom'
import useUpdateMagazineTitle from '../../hooks/useUpdateMagazineTitle'

interface SidebarMagazineProps {
    id: number
    title: string
    child?: React.ReactNode
}

export default function SidebarMagazine({ title, id }: SidebarMagazineProps) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 }) // 좌표 상태

    const [isEditing, setIsEditing] = useState(false)
    const [draftTitle, setDraftTitle] = useState(title)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const updateTitleMutation = useUpdateMagazineTitle()
    const handleCloseHamburger = () => {
        setIsHamburgerOpen((prev) => !prev)
    }
    useEffect(() => {
        if (!isEditing) setDraftTitle(title)
    }, [title, isEditing])

    useEffect(() => {
        if (isEditing) {
            requestAnimationFrame(() => {
                inputRef.current?.focus()
                const len = inputRef.current?.value.length ?? 0
                inputRef.current?.setSelectionRange(len, len)
            })
        }
    }, [isEditing])

    const handleHamburger = (e: React.MouseEvent) => {
        // 클릭된 요소(햄버거 아이콘)의 위치 정보를 가져옵니다.
        const rect = e.currentTarget.getBoundingClientRect()
        // 아이콘의 오른쪽 끝 지점을 기준으로 위치 설정
        setModalPos({
            top: rect.top + window.scrollY,
            left: rect.right + 10, // 아이콘 오른쪽에서 10px 띄움
        })
        handleCloseHamburger()
    }

    const beginEdit = () => {
        setIsEditing(true)
    }

    const cancelEdit = () => {
        setDraftTitle(title)
        setIsEditing(false)
    }
    const commitEdit = () => {
        const next = draftTitle.trim()
        if (!next) {
            cancelEdit()
            return
        }
        if (next === title) {
            setIsEditing(false)
            return
        }

        updateTitleMutation.mutate(
            { id, title: next, introduction: '' },
            {
                onSuccess: () => {
                    setIsEditing(false)
                },
            }
        )
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Escape') {
            e.preventDefault()
            cancelEdit()
            return
        }
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            commitEdit()
        }
    }

    return (
        <div className="w-full flex flex-col ">
            <div
                key={id}
                className={`w-full flex justify-between hover:bg-main-opacity20 py-2 items-center pl-6 pr-4 text-black-textSmallTitle font-medium14 select-none ${isEditing && 'bg-main-opacity20'}`}
            >
                {!isEditing ? (
                    <span className="truncate">{title}</span>
                ) : (
                    <textarea
                        ref={inputRef}
                        value={draftTitle}
                        onChange={(e) => setDraftTitle(e.target.value)}
                        onKeyDown={onKeyDown}
                        onBlur={commitEdit}
                        className="w-full resize-none overflow-hidden outline-none text-black-textSmallTitle font-medium14"
                    />
                )}
                <Hamburger className="cursor-pointer" onClick={handleHamburger} />
            </div>
            {isHamburgerOpen &&
                createPortal(
                    <SidebarHamburgerModal
                        handleClose={handleCloseHamburger}
                        id={id}
                        top={modalPos.top}
                        left={modalPos.left}
                        onEdit={() => beginEdit()}
                    />,
                    document.body
                )}
        </div>
    )
}

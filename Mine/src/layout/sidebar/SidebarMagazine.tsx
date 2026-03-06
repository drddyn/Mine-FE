import { useRef, useState } from 'react'
import Hamburger from '../../icon/hamburger.svg?react'
import SidebarHamburgerModal from '../../components/hamburgerModal/SidebarHamburgerModal'
import { createPortal } from 'react-dom'
import useUpdateMagazineTitle from '../../hooks/useUpdateMagazineTitle'

interface SidebarMagazineProps {
    id: number
    title: string
    child?: React.ReactNode
    onclick?: () => void
}

export default function SidebarMagazine({ title, id, onclick }: SidebarMagazineProps) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 })

    const [isEditing, setIsEditing] = useState(false)
    const [draftTitle, setDraftTitle] = useState('')
    const inputRef = useRef<HTMLTextAreaElement>(null)

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
        setDraftTitle(title)
        setIsEditing(true)
        requestAnimationFrame(() => {
            inputRef.current?.focus()
            const len = inputRef.current?.value.length ?? 0
            inputRef.current?.setSelectionRange(len, len)
        })
    }

    const cancelEdit = () => {
        setIsEditing(false)
        setDraftTitle('')
    }

    const commitEdit = () => {
        const next = draftTitle.trim()

        if (!next) {
            cancelEdit()
            return
        }

        if (next === title) {
            cancelEdit()
            return
        }

        updateTitleMutation.mutate(
            { id, title: next, introduction: '' },
            {
                onSuccess: () => {
                    cancelEdit()
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

    const shownTitle = isEditing ? draftTitle : title

    return (
        <div className="w-full flex flex-col">
            <div
                key={id}
                className={`w-full flex justify-between hover:bg-gray-600-op80 hover:text-gray-100 py-2 items-center pl-5 pr-4 text-gray-100-op70 font-medium14 select-none ${
                    isEditing ? 'bg-main-opacity20' : ''
                }`}
                onClick={onclick}
            >
                {!isEditing ? (
                    <span className="truncate">{shownTitle}</span>
                ) : (
                    <textarea
                        ref={inputRef}
                        value={shownTitle}
                        onChange={(e) => setDraftTitle(e.target.value)}
                        onKeyDown={onKeyDown}
                        onBlur={commitEdit}
                        className="w-full resize-none overflow-hidden bg-transparent outline-none text-black-textSmallTitle font-medium14"
                        rows={1}
                    />
                )}

                <Hamburger className="cursor-pointer shrink-0" onClick={handleHamburger} />
            </div>

            {isHamburgerOpen &&
                createPortal(
                    <SidebarHamburgerModal
                        handleClose={closeHamburger}
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

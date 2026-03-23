import { useRef, useState } from 'react'
import ProfileSettings from './ProfileSettings'
import InterestSettings from './InterestSettings'
import X from '../../icon/X.svg?react'
import Logout from '../../icon/logout.svg?react'
import Edit from '../../icon/edit.svg?react'
import usePostLogout from '../../hooks/usePostLogout'
import usePutInterests from '../../hooks/usePutInterests'
import Toast from '../common/Toast'
import { createPortal } from 'react-dom'
import useClickOutside from '../../hooks/useClickOutside'

interface SettingsProps {
    onClose: () => void
}

export default function SettingsModal({ onClose }: SettingsProps) {
    const [activeTab, setActiveTab] = useState<'profile' | 'interest'>('profile')
    const [editMode, setEditMode] = useState(false)
    const [showLogoutToast, setShowLogoutToast] = useState(false)
    const [showSaveToast, setShowSaveToast] = useState(false)
    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const { mutate: logout, isPending } = usePostLogout()
    const { mutateAsync: putInterests } = usePutInterests()

    const handleLogout = () => {
        if (isPending) return
        logout()
        onClose()
        setShowLogoutToast(true)
        setTimeout(() => {
            setShowLogoutToast(false)
        }, 2000)
    }

    const cancelRef = useRef<HTMLButtonElement>(null)
    const saveRef = useRef<HTMLButtonElement>(null)

    const handleClose = () => {
        if (editMode) {
            cancelRef.current?.click()
            setEditMode(false)
        }
        onClose()
    }

    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, handleClose)

    const handleSave = async () => {
        if (activeTab === 'profile') {
            saveRef.current?.click()
            setEditMode(false)
        } else if (activeTab === 'interest') {
            if (selectedInterests.length === 0) return
            try {
                await putInterests(selectedInterests)
            } catch (error) {
                console.error('관심사 저장 실패:', error)
                return
            }
        }
        setShowSaveToast(true)
        setTimeout(() => setShowSaveToast(false), 2000)
    }

    return createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-999">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div
                    ref={modalRef}
                    className="relative w-193 h-65 bg-gray-600-op70 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex overflow-hidden"
                >
                    <button onClick={handleClose} className="absolute top-5 right-5 p-1 z-10">
                        <X className="w-6 h-6 text-white **:stroke-white" />
                    </button>

                    <div className="w-45 pt-10 pl-10 flex flex-col gap-2 shrink-0">
                        <button
                            onClick={() => {
                                setActiveTab('profile')
                                setEditMode(false)
                            }}
                            className={`text-left transition-all cursor-pointer ${activeTab === 'profile' ? 'text-[20px] text-white font-semibold20' : 'text-[16px] text-white/50'}`}
                        >
                            프로필 설정
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('interest')
                                setEditMode(false)
                            }}
                            className={`text-left transition-all cursor-pointer ${activeTab === 'interest' ? 'text-[20px] text-white font-semibold20' : 'text-[16px] text-white/50'}`}
                        >
                            관심사 설정
                        </button>
                    </div>

                    <div className="flex-1 py-14 pr-10 overflow-hidden">
                        {activeTab === 'profile' && (
                            <ProfileSettings
                                editMode={editMode}
                                onCancelEdit={() => setEditMode(false)}
                                onSave={() => setEditMode(false)}
                                refCancel={cancelRef}
                                refSave={saveRef}
                            />
                        )}
                        {activeTab === 'interest' && (
                            <InterestSettings interests={selectedInterests} onChange={setSelectedInterests} />
                        )}
                    </div>

                    {activeTab === 'profile' && (
                        <button
                            className="absolute left-12 bottom-8 flex gap-1 items-center font-semibold14 text-white/70 hover:text-white cursor-pointer"
                            onClick={handleLogout}
                        >
                            <Logout className="w-4 h-4 aspect-square text-white/70" />
                            로그아웃
                        </button>
                    )}

                    {activeTab === 'profile' &&
                        (!editMode ? (
                            <button
                                onClick={() => setEditMode(true)}
                                className="absolute right-12 bottom-8 flex items-center gap-1 font-semibold16 text-white/70 hover:text-white cursor-pointer"
                            >
                                <Edit className="w-4 h-4" />
                                수정
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="absolute right-12 bottom-8 flex items-center gap-1 font-semibold16 text-white cursor-pointer"
                            >
                                <Edit className="w-4 h-4" />
                                저장
                            </button>
                        ))}
                    {activeTab === 'interest' && (
                        <button
                            onClick={handleSave}
                            disabled={selectedInterests.length === 0}
                            className="absolute right-12 bottom-8 flex font-semibold16 text-white disabled:opacity-40 px-3 py-1 rounded-2xl border border-gray-100 hover:bg-gray-100-op40 cursor-pointer"
                        >
                            저장
                        </button>
                    )}
                </div>

                {showLogoutToast && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-19.5 animate-in fade-in slide-in-from-top-2 z-50">
                        <Toast message="로그아웃되었습니다." />
                    </div>
                )}

                {showSaveToast && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-19.5 animate-in fade-in slide-in-from-top-2 z-50">
                        <Toast message="저장되었습니다." />
                    </div>
                )}
            </div>
        </div>,
        document.body
    )
}

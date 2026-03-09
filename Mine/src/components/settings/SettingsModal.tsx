import { useRef, useState } from 'react'
import ProfileSettings from './ProfileSettings'
import ScreenSettings from './ScreenSettings'
import InterestSettings from './InterestSettings'

import X from '../../icon/X.svg?react'
import Logout from '../../icon/logout.svg?react'
import Edit from '../../icon/edit.svg?react'
import Check from '../../icon/check.svg?react'
import usePostLogout from '../../hooks/usePostLogout'
import usePutInterests from '../../hooks/usePutInterests'

interface SettingsProps {
    onClose: () => void
}

export default function SettingsModal({ onClose }: SettingsProps) {
    const [activeTab, setActiveTab] = useState<'profile' | 'interest' | 'screen'>('profile')
    const [editMode, setEditMode] = useState(false)
    const [showLogoutToast, setShowLogoutToast] = useState(false)
    const [showSaveToast, setShowSaveToast] = useState(false)
    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const { mutate: logout, isPending } = usePostLogout()
    const { mutateAsync: putInterests } = usePutInterests()

    const handleLogout = () => {
        if (isPending) return
        logout()
        setShowLogoutToast(true)
        setTimeout(() => {
            setShowLogoutToast(false)
            onClose()
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

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-999">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-193 h-65 bg-gray-500 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex overflow-hidden">
                    <button onClick={handleClose} className="absolute top-5 right-5 p-1 z-10">
                        <X className="w-6 h-6 text-white **:stroke-white" />
                    </button>

                    <div className="w-45 pt-10 pl-10 flex flex-col gap-2 shrink-0">
                        <button
                            onClick={() => { setActiveTab('profile'); setEditMode(false) }}
                            className={`text-left transition-all ${activeTab === 'profile' ? 'text-[20px] text-white font-semibold20' : 'text-[16px] text-white/50'}`}
                        >
                            프로필 설정
                        </button>
                        <button
                            onClick={() => { setActiveTab('interest'); setEditMode(false) }}
                            className={`text-left transition-all ${activeTab === 'interest' ? 'text-[20px] text-white font-semibold20' : 'text-[16px] text-white/50'}`}
                        >
                            관심사 설정
                        </button>
                        <button
                            onClick={() => { setActiveTab('screen'); setEditMode(false) }}
                            className={`text-left transition-all ${activeTab === 'screen' ? 'text-[20px] text-white font-semibold20' : 'text-[16px] text-white/50'}`}
                        >
                            화면 설정
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
                            <InterestSettings
                                interests={selectedInterests}
                                onChange={setSelectedInterests}
                            />
                        )}
                        {activeTab === 'screen' && <ScreenSettings />}
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

                    {activeTab === 'profile' && (
                        !editMode ? (
                            <button
                                onClick={() => setEditMode(true)}
                                className="absolute right-12 bottom-8 flex items-center gap-1 font-semibold16 text-white/70 hover:text-white"
                            >
                                <Edit className="w-4 h-4" />
                                수정
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="absolute right-12 bottom-8 flex items-center gap-1 font-semibold16 text-white"
                            >
                                <Edit className="w-4 h-4" />
                                저장
                            </button>
                        )
                    )}

                    {activeTab === 'interest' && (
                        <button
                            onClick={handleSave}
                            className="absolute right-8 bottom-4 flex items-center gap-1 font-semibold16 text-white"
                        >
                            <Edit className="w-4 h-4" />
                            저장
                        </button>
                    )}
                </div>

                {showLogoutToast && (
                    <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-19.5 animate-in fade-in slide-in-from-top-2"
                        style={{ display: 'flex', width: '270px', height: '48px', padding: '12px 20px', alignItems: 'center', gap: '4px', borderRadius: '8px', background: '#505050', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)', zIndex: 1001 }}
                    >
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white text-4 font-semibold16 leading-none">로그아웃되었습니다.</span>
                    </div>
                )}

                {showSaveToast && (
                    <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-19.5 animate-in fade-in slide-in-from-top-2"
                        style={{ display: 'flex', width: '270px', height: '48px', padding: '12px 20px', alignItems: 'center', gap: '4px', borderRadius: '8px', background: '#505050', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)', zIndex: 1001 }}
                    >
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white text-4 font-semibold16 leading-none">저장되었습니다.</span>
                    </div>
                )}
            </div>
        </div>
    )
}
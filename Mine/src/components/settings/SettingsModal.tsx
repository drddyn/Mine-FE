import { useState } from 'react'
import ProfileSettings from './ProfileSettings'
import ScreenSettings from './ScreenSettings'

import X from '../../icon/X.svg?react'
import Logout from '../../icon/logout.svg?react'
import Edit from '../../icon/edit.svg?react'
import usePostLogout from '../../hooks/usePostLogout'

interface SettingsProps {
    onClose: () => void
}

export default function SettingsModal({ onClose }: SettingsProps) {
    const [activeTab, setActiveTab] = useState<'profile' | 'screen'>('profile')
    const { mutate: logout, isPending } = usePostLogout()
    const handleLogout = () => {
        if (isPending) return
        logout()
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-999">
            <div
                className="relative w-193 h-65 bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-1 rounded-full text-black-icon transition-all duration-150 z-10"
                >
                    <X className="w-6 h-6 aspect-square" />
                </button>

                <div className="w-45 pt-10 pl-10 flex flex-col gap-2 shrink-0">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`text-left font-semibold20 transition-all ${
                            activeTab === 'profile'
                                ? 'text-[20px] text-black-textBigTitle'
                                : 'text-[16px] text-black-icon'
                        }`}
                    >
                        프로필 설정
                    </button>

                    <button
                        onClick={() => setActiveTab('screen')}
                        className={`text-left font-semibold20 transition-all ${
                            activeTab === 'screen'
                                ? 'text-[20px] text-black-textBigTitle'
                                : 'text-[16px] text-black-icon'
                        }`}
                    >
                        화면 설정
                    </button>
                </div>

                <div className="flex-1 py-14.25 pr-10 overflow-hidden">
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'screen' && <ScreenSettings />}
                </div>

                {activeTab === 'profile' && (
                    <>
                        <button
                            className="absolute left-12 bottom-8 flex gap-1 font-semibold14 text-black-icon transition duration-150 hover:brightness-75 hover:contrast-125 cursor-pointer hover:text-main-default"
                            onClick={handleLogout}
                        >
                            <Logout className="w-4 h-4 aspect-square  text-black-icon" />
                            로그아웃
                        </button>

                        <button className="absolute right-12 bottom-8 flex items-center gap-1 font-semibold16 text-black-icon transition duration-150  hover:brightness-75 hover:contrast-125 cursor-pointer hover:text-main-default">
                            <Edit className="w-4 h-4 aspect-square" />
                            수정
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Minelogo from '../../icon/logo_with_title.svg?react'
import FindIdForm from './components/FindIdForm'
import FindPasswordForm from './components/FindPasswordForm'

export default function FindingPage() {
    const [tab, setTab] = useState<'id' | 'password'>('id')
    const location = useLocation()

    const bgUrl = (location.state as { bgUrl?: string } | null)?.bgUrl ?? sessionStorage.getItem('landingBg') ?? ''

    return (
        <div
            className="relative w-screen h-screen overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
        >
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-y-0 right-0 w-1/2">
                <div className="absolute inset-0 bg-linear-to-l from-black/10 via-black/5 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[6px]" />
                <div className="absolute inset-0 bg-white/5" />
            </div>

            <div
                className="absolute z-10 text-white leading-6 font-semibold20"
                style={{ width: 120, height: 72, top: 68, left: 80, opacity: 1 }}
            >
                나만의 매거진
                <br />
                아카이빙
                <br />
                플랫폼
            </div>

            <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center z-10">
                <div className="w-110">
                    <div className="text-center mb-10">
                        <Minelogo className="mx-auto h-12.5 w-35 text-gray-100/50" />
                    </div>

                    <div className="flex w-full mb-10 flex-col">
                        <div className="flex w-full">
                            <button
                                onClick={() => setTab('id')}
                                className={`flex-1 text-center font-semibold16 pb-2.5 transition-colors ${tab === 'id' ? 'text-gray-100' : ' text-gray-300'}`}
                            >
                                아이디 찾기
                            </button>
                            <button
                                onClick={() => setTab('password')}
                                className={`flex-1 text-center font-semibold16 pb-2.5 transition-colors ${tab === 'password' ? 'text-gray-100' : ' text-gray-300'}`}
                            >
                                비밀번호 찾기
                            </button>
                        </div>
                        <div className="flex w-full">
                            <div className="flex-1 flex justify-center">
                                <div
                                    className={`h-1 w-55 rounded-l-[15px] transition-colors ${tab === 'id' ? 'bg-gray-100' : 'bg-gray-300'}`}
                                />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div
                                    className={`h-1 w-55 rounded-r-[15px] transition-colors ${tab === 'password' ? 'bg-gray-100' : 'bg-gray-300'}`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {tab === 'id' && <FindIdForm />}
                    {tab === 'password' && <FindPasswordForm />}
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Minelogo from '../../icon/logo_with_title.svg?react'
import UserIcon from '../../icon/user.svg?react'
import LockIcon from '../../icon/lock.svg?react'
import EyeIcon from '../../icon/eye.svg?react'
import usePostAuthorization from '../../hooks/usePostAuthorization'
import landingBg from '../../assets/bg1.png'

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const bgUrl = (location.state as { bgUrl?: string } | null)?.bgUrl ?? sessionStorage.getItem('landingBg') ?? ''

    const [userId, setUserId] = useState('')
    const [pw, setPw] = useState('')
    const [showPw, setShowPw] = useState(false)

    const { mutate: login, isPending } = usePostAuthorization()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!userId.trim() || !pw.trim()) {
            alert('아이디와 비밀번호를 입력해주세요.')
            return
        }

        login({ username: userId, password: pw })
    }

    return (
        <div
            className="relative w-screen h-screen overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: `url(${landingBg})` }}
        >
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-y-0 right-0 w-1/2">
                <div className="absolute inset-0 bg-linear-to-l from-black/10 via-black/5 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[6px]" />
                <div className="absolute inset-0 bg-gray-100/5" />
            </div>

            <div className="absolute z-10 text-gray-100 font-semibold20 w-30 h-18 top-17 left-20">
                나만의 매거진
                <br />
                아카이빙
                <br />
                플랫폼
            </div>

            <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center z-10">
                <div className="w-105 translate-y-1.5">
                    <Minelogo className="mx-auto h-17.5 w-35 mb-10 text-gray-100/50 transition-transform" />
                    <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
                        <div className="relative w-100">
                            <span className="absolute left-7.5 top-1/2 -translate-y-1/2 text-gray-100/80">
                                <UserIcon className="w-6 h-6" />
                            </span>
                            <input
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder="아이디"
                                className="w-full h-12 pl-16 pr-4 py-2.75 rounded-[15px]
                           bg-gray-100/10 border border-black-whiteBoxOutline text-gray-100
                           placeholder:text-gray-100/60 outline-none focus:border-gray-100/70"
                            />
                        </div>

                        <div className="relative w-100">
                            <span className="absolute left-7.5 top-1/2 -translate-y-1/2 text-gray-100/80">
                                <LockIcon className="w-6 h-6" />
                            </span>
                            <input
                                type={showPw ? 'text' : 'password'}
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                placeholder="비밀번호"
                                className="w-full h-12 pl-16 pr-11 py-2.75 rounded-[15px]
                           bg-gray-100/10 border border-black-whiteBoxOutline text-gray-100
                           placeholder:text-gray-100/60 outline-none focus:border-gray-100/70"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPw((v) => !v)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-100/70 hover:text-gray-100 transition"
                            >
                                <EyeIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="w-100 flex justify-end pr-1.5">
                            <button
                                type="button"
                                onClick={() => navigate('/login/finding', { state: { bgUrl } })}
                                className="font-light14 text-gray-200 hover:text-gray-100 transition cursor-pointer"
                            >
                                아이디/비밀번호 찾기
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-100 h-12 mt-6 rounded-2xl text-gray-100 font-medium16 bg-gray-600-op70 px-3.5 transition hover:bg-gray-600 cursor-pointer"
                        >
                            로그인
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                            className="w-100 h-12 rounded-2xl text-gray-100 font-medium16 bg-gray-100-op40 hover:bg-gray-300 px-3.5 transition border border-gray-400 cursor-pointer"
                        >
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

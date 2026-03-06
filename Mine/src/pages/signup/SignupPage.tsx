import { useState, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import logo from '../../icon/minelogo.svg?url'
import SignupChecks from './components/SignupChecks'
import SignupForms from './components/SignupForms'
import SignupInterests from './components/SignupInterest'
import usePostSignup from '../../hooks/usePostSignup'

export default function SignupPage() {
    const location = useLocation()
    const navigate = useNavigate()

    const bgUrl = (location.state as { bgUrl?: string } | null)?.bgUrl ?? sessionStorage.getItem('landingBg') ?? ''

    const [step, setStep] = useState(1)
    const { mutate: signup, isPending } = usePostSignup()

    const [signupForm, setSignupForm] = useState({
        nickname: '',
        id: '',
        password: '',
        passwordCheck: '',
        email: '',
        interests: [] as string[],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setSignupForm((prev) => ({ ...prev, [id]: value }))
    }

    const handleInterestsChange = (newInterests: string[]) => {
        setSignupForm((prev) => ({ ...prev, interests: newInterests }))
    }

    const handleSignupSubmit = () => {
        if (isPending) return
        signup({
            nickname: signupForm.nickname,
            username: signupForm.id,
            password: signupForm.password,
            email: signupForm.email,
            interests: signupForm.interests,
        })
    }

    const goNext = () => setStep((s) => Math.min(3, s + 1))
    const goPrev = () => setStep((s) => Math.max(1, s - 1))

    const canGoNext1 =
        signupForm.id.trim() !== '' && signupForm.nickname.trim() !== '' && signupForm.email.trim() !== ''

    const isValidPassword = useMemo(() => {
        const pw = signupForm.password
        if (pw.length < 8 || pw.length > 16) return false
        return /[A-Za-z]/.test(pw) && /[0-9]/.test(pw)
    }, [signupForm.password])

    const canGoNext2 = isValidPassword && !!signupForm.passwordCheck && signupForm.password === signupForm.passwordCheck

    const canSubmit3 = signupForm.interests.length > 0

    const handlePrevClick = () => {
        if (step === 1) navigate('/login')
        else goPrev()
    }

    const handleNextClick = () => {
        if (step === 1) goNext()
        else if (step === 2) goNext()
        else if (step === 3) handleSignupSubmit()
    }

    const nextLabel = step === 3 ? '가입하기' : '다음으로'
    const isNextDisabled = (step === 1 && !canGoNext1) || (step === 2 && !canGoNext2) || (step === 3 && !canSubmit3)

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
                className="absolute z-10 text-white font-semibold20 leading-6 font-semibold"
                style={{ width: 120, height: 72, top: 68, left: 80, opacity: 1 }}
            >
                나만의 매거진
                <br />
                아카이빙
                <br />
                플랫폼
            </div>

            <div className="absolute top-27.75 right-0 w-1/2 flex justify-center z-20">
                <img src={logo} alt="Mine logo" className="h-17.5 w-35" />
            </div>

            <div className="absolute top-55.25 right-0 w-1/2 flex justify-center z-10">
                <div className="w-105">
                    {step === 1 && <SignupForms formData={signupForm} onChange={handleChange} />}
                    {step === 2 && <SignupChecks formData={signupForm} onChange={handleChange} />}
                    {step === 3 && (
                        <SignupInterests interests={signupForm.interests} onChange={handleInterestsChange} />
                    )}
                </div>
            </div>

            <div className="absolute bottom-12 right-0 w-1/2 flex justify-center z-20">
                <div className="flex items-center gap-10 w-105">
                    <button
                        type="button"
                        onClick={handlePrevClick}
                        className="w-50 h-12 rounded-2xl border border-black-image transition-colors duration-150 text-white font-medium16"
                        style={{ background: '#FFFFFF66' }}
                    >
                        이전으로
                    </button>
                    <button
                        type="button"
                        onClick={handleNextClick}
                        disabled={isNextDisabled}
                        className="w-50 h-12 rounded-2xl transition-colors duration-150 text-white font-medium16 disabled:opacity-50"
                        style={{ background: '#505050B2' }}
                    >
                        {nextLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import landingBg from '../../assets/bg1.png'
import Minelogo from '../../icon/logo_with_title.svg?react'
import SignupChecks from './components/SignupChecks'
import SignupForms from './components/SignupForms'
import SignupInterests from './components/SignupInterest'
import usePostSignup from '../../hooks/usePostSignup'

export default function SignupPage() {
    const navigate = useNavigate()

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

            <div className="absolute top-27.75 right-0 w-1/2 flex justify-center z-20">
                <Minelogo className="h-12.5 w-35 text-gray-100/50 opacity-70" />
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
                        className="w-50 h-12 rounded-2xl bg-gray-100-op40 hover:bg-gray-300 border border-gray-400 transition-colors duration-150 text-gray-100 font-medium16 cursor-pointer"
                    >
                        이전으로
                    </button>
                    <button
                        type="button"
                        onClick={handleNextClick}
                        disabled={isNextDisabled}
                        className="w-50 h-12 rounded-2xl transition-colors duration-150 text-gray-100 font-medium16 disabled:opacity-50 bg-gray-600-op70 enabled:hover:bg-gray-600 cursor-pointer"
                    >
                        {nextLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

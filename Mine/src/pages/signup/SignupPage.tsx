import { useState } from 'react'
import MineLogo from '../../icon/minelogo.svg?react'
import SignupChecks from './components/SignupChecks'
import SignupForms from './components/SignupForms'
import usePostSignup from '../../hooks/usePostSignup'
export default function SignupPage() {
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
        setSignupForm((prev) => ({
            ...prev,
            [id]: value,
        }))
    }
    const handleInterestsChange = (newInterests: string[]) => {
        setSignupForm((prev) => ({
            ...prev,
            interests: newInterests,
        }))
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

    const goNext = () => setStep((s) => Math.min(2, s + 1))
    const goPrev = () => setStep((s) => Math.max(1, s - 1))

    return (
        <>
            <div className="flex mt-18 gap-4 justify-center">
                <div className="flex flex-col items-start gap-1.25">
                    <div className="flex mt-5 items-center gap-2">
                        <MineLogo />
                        <div className="text-main-default text-2xl font-medium">MINE</div>
                    </div>
                    <div className="text-black text-[32px] font-bold">회원가입</div>
                </div>
                {step === 1 && <SignupForms formData={signupForm} onChange={handleChange} onNext={goNext} />}
                {step === 2 && (
                    <SignupChecks
                        formData={signupForm}
                        onChange={handleInterestsChange}
                        onPrev={goPrev}
                        onClick={handleSignupSubmit}
                    />
                )}
            </div>
        </>
    )
}

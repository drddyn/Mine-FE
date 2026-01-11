import { useState } from 'react'
import MineLogo from '../../icon/minelogo.svg?react'
import SigninChecks from './components/SigninChecks'
import SigninForms from './components/SigninForms'
export default function SignupPage() {
    const [step, setStep] = useState(1)

    const goNext = () => setStep((s) => Math.min(2, s + 1))
    const goPrev = () => setStep((s) => Math.max(1, s - 1))

    return (
        <>
            <div className="flex mt-18 gap-4 justify-center">
                <div className="flex flex-col items-start gap-1.25">
                    <div className="flex mt-5 items-center gap-2">
                        <MineLogo />
                        <div className="text-[#6898BB] text-2xl font-medium">MINE</div>
                    </div>
                    <div className="text-black text-[32px] font-bold">회원가입</div>
                </div>
                {step === 1 && <SigninForms onNext={goNext} />}
                {step === 2 && <SigninChecks onPrev={goPrev} />}
            </div>
        </>
    )
}

import { useMemo, useState } from 'react'
import EyeoffIcon from '../../../icon/eyeoff.svg?react'
import Eyeon from '../../../icon/eye.svg?react'

interface SignupChecksProps {
    formData: {
        password: string
        passwordCheck: string
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SignupChecks({ formData, onChange }: SignupChecksProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordCheck, setShowPasswordCheck] = useState(false)

    const isValidPassword = useMemo(() => {
        const pw = formData.password
        if (pw.length < 8 || pw.length > 16) return false
        return /[A-Za-z]/.test(pw) && /[0-9]/.test(pw)
    }, [formData.password])

    const showPwRuleError = useMemo(() => {
        if (!formData.password) return false
        return !isValidPassword
    }, [formData.password, isValidPassword])

    const isMismatch = useMemo(() => {
        if (!formData.passwordCheck) return false
        return formData.password !== formData.passwordCheck
    }, [formData.password, formData.passwordCheck])

    const fieldWrap =
        'flex items-center w-full h-12 py-5 pl-7 pr-11.25 rounded-[15px] border border-gray-500 bg-gray-100-op30'

    const inputBase = 'flex-1 bg-transparent outline-none text-gray-100 placeholder:text-gray-100/60'

    return (
        <div className="flex flex-col items-center">
            <div className="w-105 flex flex-col">
                {/* 비밀번호 */}
                <div className="w-full mb-10">
                    <div className="text-gray-100/80 font-semibold20 mb-2">비밀번호</div>
                    <div className={fieldWrap}>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={onChange}
                            placeholder="abcdef1234"
                            className={inputBase}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label="toggle password"
                            className="ml-auto"
                        >
                            {showPassword ? (
                                <EyeoffIcon className="w-6 h-6 text-gray-100/70" />
                            ) : (
                                <Eyeon className="w-6 h-6 text-gray-100/70" />
                            )}
                        </button>
                    </div>
                    <div className="pl-2 mt-2 font-light14">
                        {showPwRuleError ? (
                            <span className="text-red-500">
                                비밀번호는 8~16자이며 영어와 숫자를 모두 포함해야 합니다.
                            </span>
                        ) : (
                            <span className="text-gray-100/45">영어, 숫자 포함 8~16자</span>
                        )}
                    </div>
                </div>

                {/* 비밀번호 확인 */}
                <div className="w-full">
                    <div className="text-gray-100/80 font-semibold20 mb-2">비밀번호 확인</div>
                    <div className={fieldWrap}>
                        <input
                            id="passwordCheck"
                            type={showPasswordCheck ? 'text' : 'password'}
                            value={formData.passwordCheck}
                            onChange={onChange}
                            placeholder="abcdef1234"
                            className={inputBase}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPasswordCheck((v) => !v)}
                            aria-label="toggle passwordCheck"
                            className="ml-auto"
                        >
                            {showPasswordCheck ? (
                                <EyeoffIcon className="w-6 h-6 text-gray-100/70" />
                            ) : (
                                <Eyeon className="w-6 h-6 text-gray-100/70" />
                            )}
                        </button>
                    </div>
                    <div className="pl-2 mt-2 font-light14">
                        {isMismatch ? (
                            <span className="text-red-500">비밀번호가 같지 않습니다</span>
                        ) : (
                            <span className="text-gray-100/45"> </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

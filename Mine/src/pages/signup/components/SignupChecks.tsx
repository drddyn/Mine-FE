import { useMemo } from 'react'

import InputBoxWithPassword from '../../../components/InputBoxWithPassword'

interface SignupChecksProps {
    formData: {
        password: string
        passwordCheck: string
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SignupChecks({ formData, onChange }: SignupChecksProps) {
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

    return (
        <div className="flex flex-col items-center">
            <div className="w-105 flex flex-col gap-10">
                {/* 비밀번호 */}
                <InputBoxWithPassword
                    id="password"
                    title="비밀번호"
                    value={formData.password}
                    onChange={onChange}
                    placeholder="abcdef1234"
                    isError={showPwRuleError}
                    description={
                        showPwRuleError
                            ? '비밀번호는 8~16자이며 영어와 숫자를 모두 포함해야 합니다.'
                            : '영어, 숫자 포함 8~16자'
                    }
                />

                {/* 비밀번호 확인 */}
                <InputBoxWithPassword
                    id="passwordCheck"
                    title="비밀번호 확인"
                    value={formData.passwordCheck}
                    onChange={onChange}
                    placeholder="abcdef1234"
                    isError={isMismatch}
                    description={
                        isMismatch ? '비밀번호가 같지 않습니다' : ' ' // 레이아웃 유지를 위한 공백
                    }
                />
            </div>
        </div>
    )
}

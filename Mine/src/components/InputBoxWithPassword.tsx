import { useState, type ChangeEvent, type ReactNode } from 'react'
import EyeOff from '../icon/eyeoff.svg?react'
import EyeOn from '../icon/eye.svg?react'

interface InputBoxProps {
    id: string
    value?: string
    title?: string
    placeholder?: string
    description?: string
    isError?: boolean
    children?: ReactNode
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputBoxWithPassword({
    id,
    value,
    title,
    placeholder,
    description,
    isError = false,
    children,
    onChange,
}: InputBoxProps) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex flex-col select-none">
            {title && <div className="text-gray-100/80 font-semibold20 mb-2">{title}</div>}
            <div className="group w-full flex items-center h-12 rounded-[15px] px-7 gap-2 border border-gray-500 bg-gray-100-op30 focus-within:shadow-sm">
                {children}
                <input
                    id={id}
                    name={id}
                    value={value}
                    placeholder={placeholder}
                    className="flex-auto font-medium16 placeholder-gray-200/40 text-gray-100 outline-none"
                    maxLength={16}
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChange}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label="toggle password"
                    className="ml-auto"
                >
                    {showPassword ? (
                        <EyeOff className="w-6 h-6 text-gray-100/70" />
                    ) : (
                        <EyeOn className="w-6 h-6 text-gray-100/70" />
                    )}
                </button>
            </div>
            {description && (
                <div className="pl-2 mt-2 font-light14">
                    <span className={isError ? 'text-red-500' : 'text-gray-100/80'}>{description}</span>
                </div>
            )}
        </div>
    )
}
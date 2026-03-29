import { useState, type ChangeEvent, type ReactNode } from 'react'
import EyeOff from '../icon/eyeoff.svg?react'
import EyeOn from '../icon/eye.svg?react'
interface InputBoxProps {
    id: string
    value?: string
    title?: string
    placeholder?: string
    description?: string
    children?: ReactNode
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function InputBoxWithPassword({
    id,
    value,
    title,
    placeholder,
    description,
    children,
    onChange,
}: InputBoxProps) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="flex flex-col gap-2 select-none">
            {title && <div className="text-black-textSmallTitle font-semibold20">{title}</div>}
            <div className="group w-full flex items-center h-12 rounded-2xl py-2.5 px-4 gap-2 border border-black-whiteBoxOutline bg-white focus-within:shadow-sm">
                {children}
                <input
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    className="flex-auto font-medium16 placeholder-black-whiteBoxOutline text-black-textSmallTitle outline-none"
                    maxLength={16}
                    type="password"
                    onChange={onChange}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label="toggle password"
                    className="ml-auto"
                >
                    {showPassword ? (
                        <EyeOff type="button" className="w-6 h-6 text-gray-100/70" />
                    ) : (
                        <EyeOn type="button" className="w-6 h-6 text-gray-100/70" />
                    )}
                </button>
                <div className="text-black-whiteBoxOutline font-light14 pl-2.5">{description}</div>
            </div>
        </div>
    )
}

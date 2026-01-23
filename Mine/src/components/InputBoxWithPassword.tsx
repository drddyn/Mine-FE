import type { ChangeEvent, ReactNode } from 'react'
// import Eye from '../icon/eye.svg?react'
import EyeOff from '../icon/eyeoff.svg?react'

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
    return (
        <>
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
                    <EyeOff className="text-black-whiteBoxOutline group-focus-within:text-black-icon" />
                </div>
                <div className="text-black-whiteBoxOutline font-light14 pl-2.5">{description}</div>
            </div>
        </>
    )
}

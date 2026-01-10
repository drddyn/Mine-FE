import type { ReactNode } from 'react'
import Visablity from '../icon/visibility.svg?react'

interface InputBoxProps {
    id: string
    // value?: string
    title?: string
    placeholder?: string
    description?: string
    children?: ReactNode
}
export default function InputBoxWithPassword({ id, title, placeholder, description, children }: InputBoxProps) {
    return (
        <>
            <div className="flex flex-col gap-2 select-none">
                <div className="text-black-textSmallTitle font-semibold20">{title}</div>
                <div className="flex items-center h-12 rounded-2xl py-2.5 px-4 gap-2 border-2 border-black-whiteBoxOutline shadow-sm">
                    {children}
                    <input
                        id={id}
                        placeholder={placeholder}
                        className="w-full font-medium16 text-black-textSmallTitle outline-none"
                        maxLength={16}
                        type="password"
                    />
                    <Visablity className="self-end" />
                </div>

                <div className="text-black-textSmallTitle font-light14 pl-2.5">{description}</div>
            </div>
        </>
    )
}

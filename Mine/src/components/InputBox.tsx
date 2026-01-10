import type { ReactNode } from 'react'

interface InputBoxProps {
    id: string
    // value?: string
    title?: string
    placeholder?: string
    description?: string
    children?: ReactNode
}

export default function InputBox({ id, placeholder, title, description, children }: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-black-textSmallTitle font-semibold20">{title}</div>
            <div className="flex items-center h-12 rounded-2xl py-2.5 px-4 gap-2 border-2 border-black-whiteBoxOutline shadow-sm">
                {children}
                <input
                    id={id}
                    placeholder={placeholder}
                    className="font-medium16 text-black-textSmallTitle w-66 outline-none "
                />
            </div>
            <div className="text-black-textSmallTitle font-light14 pl-2.5">{description}</div>
        </div>
    )
}

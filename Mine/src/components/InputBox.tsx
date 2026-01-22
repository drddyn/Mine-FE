import type { ChangeEvent, ReactNode } from 'react'

interface InputBoxProps {
    id: string
    title?: string
    placeholder?: string
    description?: string
    children?: ReactNode
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox({ id, placeholder, title, description, children, value, onChange }: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            {title && <div className="text-black-textSmallTitle font-semibold20">{title}</div>}
            <div
                className={`flex items-center w-full h-12 rounded-[15px] py-2.5 px-4 gap-2 border border-black-whiteBoxOutline bg-white focus-within:shadow-sm`}
            >
                {children}
                <input
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    className="flex-1 outline-none placeholder-black-whiteBoxOutline font-medium16 text-black-textSmallTitle bg-transparent"
                    onChange={onChange}
                />
            </div>

            {description && <div className="text-black-whiteBoxOutline font-light14 pl-2.5">{description}</div>}
        </div>
    )
}

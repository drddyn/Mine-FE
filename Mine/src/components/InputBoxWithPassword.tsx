import Visablity from '../icon/visibility.svg?react'

interface InputBoxProps {
    id: string
    // value?: string
    title?: string
    placeholder?: string
    description?: string
}
export default function InputBoxWithPassword({ id, title, placeholder, description }: InputBoxProps) {
    return (
        <>
            <div className="flex flex-col gap-2 select-none">
                <div className="text-black-textSmallTitle font-semibold20">{title}</div>
                <div className="flex flex-row justify-between items-center w-100 h-12 rounded-2xl py-2.5 px-4  border-2 border-black-whiteBoxOutline shadow-sm">
                    <input
                        id={id}
                        placeholder={placeholder}
                        className="w-full font-medium16 placeholder-black-textInTheBox outline-none"
                        maxLength={16}
                        type="password"
                    />
                    <Visablity />
                </div>

                <div className="text-black-textSmallTitle font-light14 pl-2.5">{description}</div>
            </div>
        </>
    )
}

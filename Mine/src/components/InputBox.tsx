interface InputBoxProps {
    id: string
    // value?: string
    title?: string
    placeholder?: string
    description?: string
}

export default function InputBox({ id, placeholder, title, description }: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-black-textSmallTitle font-semibold20">{title}</div>
            <input
                id={id}
                placeholder={placeholder}
                className="flex flex-col justify-center w-100 h-12 rounded-2xl py-2.5 px-4 outline-none border-2  border-black-whiteBoxOutline shadow-sm font-medium16 "
            />
            <div className="text-black-textSmallTitle font-light14 pl-2.5">{description}</div>
        </div>
    )
}

interface InputBoxProps {
    id: string
    // value?: string
    title?: string
    placeholder?: string
}

export default function InputBox({ id, placeholder, title }: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-[#545156] font-bold text-lg">{title}</div>
            <input
                id={id}
                placeholder={placeholder}
                className="flex flex-col justify-center w-100 h-12 rounded-2xl px-4 outline-none border-2 border-[#D9D9D9] bg-white shadow-sm"
            />
        </div>
    )
}

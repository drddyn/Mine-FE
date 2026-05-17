interface SectionIndexProps {
    title: string
}

export default function SectionIndexOpen({ title }: SectionIndexProps) {
    return (
        <div className="flex bg-gray-600 w-30 h-8.5 px-2 py-3 justify-center items-center cursor-pointer">
            <div className="font-medium12 text-gray-100 truncate">{title}</div>
        </div>
    )
}
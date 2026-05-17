interface ChipProps {
    title: string
    isActive: boolean
    onClick: () => void
}

export default function Chip({ title, isActive, onClick }: ChipProps) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer h-12 px-5 flex items-center justify-center
        rounded-3xl font-semibold20 transition-all duration-150 border
        ${
            isActive
                ? 'bg-gray-100 text-gray-600 border-gray-100'
                : 'bg-transparent text-gray-100 border-gray-100/50 hover:bg-gray-100/15'
        }
      `}
        >
            {title}
        </div>
    )
}

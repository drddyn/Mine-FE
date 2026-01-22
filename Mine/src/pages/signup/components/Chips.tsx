interface ChipProps {
    key?: number
    title: string
    isActive: boolean
    onClick: () => void
}

export default function Chip({ key, title, isActive, onClick }: ChipProps) {
    return (
        <div
            key={key}
            className={`flex px-5 py-2.5 justify-center items-center rounded-3xl font-semibold16 hover:bg-main-emphasis hover:text-white ${isActive ? 'bg-main-default text-white' : ' bg-black-whiteBoxOutline text-black-textBigTitle'}`}
            onClick={onClick}
        >
            {title}
        </div>
    )
}

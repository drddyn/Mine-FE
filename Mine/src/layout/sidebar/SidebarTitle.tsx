interface SidebarTitleProps {
    onClick: () => void
    title: string
}

export default function SidebarTitle({ onClick, title }: SidebarTitleProps) {
    return (
        <div
            className="w-full flex py-2 gap-2 items-center pl-7 text-gray-300 font-medium12 cursor-pointer"
            onClick={onClick}
        >
            {title}
        </div>
    )
}

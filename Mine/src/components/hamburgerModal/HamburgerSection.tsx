interface HamburgerSectionProps {
    icon: React.ReactNode
    title: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
export function HamburgerSection({ icon, title, onClick }: HamburgerSectionProps) {
    return (
        <div
            className="flex h-9 w-34 px-5 py-2 items-center gap-2 bg-main-light rounded-lg hover:bg-gray-600 font-medium14 hover:font-semibold14 text-gray-100-op70 hover:text-gray-100"
            onClick={onClick}
        >
            <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>
            {title}
        </div>
    )
}

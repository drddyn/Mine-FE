interface HamburgerSectionProps {
    icon: React.ReactNode
    title: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
export function HamburgerSection({ icon, title, onClick }: HamburgerSectionProps) {
    return (
        <div
            className="flex h-9 w-full px-5 py-2 items-center gap-2 bg-main-light hover:bg-main-opacity20 font-medium14 hover:font-semibold14 text-black-textSmallTitle"
            onClick={onClick}
        >
            <span className="[&>svg]:w-5 [&>svg]:h-5 text-black-textSmallTitle">{icon}</span>
            {title}
        </div>
    )
}

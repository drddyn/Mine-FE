interface SidebarBlockProps {
    title: string
    icon?: React.ReactNode
}

export default function SidebarBlock({ title, icon }: SidebarBlockProps) {
    return (
        <div className="w-full flex hover:bg-main-opacity20 py-2 gap-2 items-center pl-6 text-black-textSmallTitle font-semibold14">
            {icon}
            {title}
        </div>
    )
}

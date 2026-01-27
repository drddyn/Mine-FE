interface SidebarSectionListProps {
    title: string
    key?: number
}

export default function SidebarSectionList({ title, key }: SidebarSectionListProps) {
    return (
        <div
            key={key}
            className="w-full flex justify-between hover:bg-main-opacity20 py-2 items-center pl-7 pr-4 text-black-textSmallTitle font-medium14 select-none"
        >
            {title}
        </div>
    )
}

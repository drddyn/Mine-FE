interface SidebarSectionListProps {
    title: string
    key?: number
    onclick: (magazineId: number, sectionId: number) => void
    magazineId: number
    sectionId: number
}

export default function SidebarSectionList({ title, key, onclick, magazineId, sectionId }: SidebarSectionListProps) {
    return (
        <div
            key={key}
            className="flex hover:bg-gray-600-op70 py-2 h-9 items-center pl-5 pr-5 select-none"
            onClick={() => onclick(magazineId, sectionId)}
        >
            <label className="block w-full hover:text-gray-100 overflow-hidden text-ellipsis whitespace-nowrap text-gray-100-op70 font-medium14">
                {title}
            </label>
        </div>
    )
}

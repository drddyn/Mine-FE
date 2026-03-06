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
            className="w-full flex justify-between hover:bg-gray-600-op80  hover:text-gray-100 py-2 items-center p-6 pr-4 text-gray-100-op70 font-medium14 select-none"
            onClick={() => onclick(magazineId, sectionId)}
        >
            {title}
        </div>
    )
}

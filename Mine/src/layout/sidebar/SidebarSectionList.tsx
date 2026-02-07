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
            className="w-full flex justify-between hover:bg-main-opacity20 py-2 items-center pl-6 pr-4 text-black-textSmallTitle font-medium14 select-none"
            onClick={() => onclick(magazineId, sectionId)}
        >
            {title}
        </div>
    )
}

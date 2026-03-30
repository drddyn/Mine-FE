export default function SidebarSkeleton() {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex hover:bg-gray-600-op70 py-2 h-9 select-none" />
            ))}
        </>
    )
}

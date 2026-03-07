import { useNavigate } from 'react-router-dom'

interface SidebarClosedBlockProps {
    icon: React.ReactNode
    title: string
    to: string
}

export default function SidebarClosedBlock({ icon, title, to }: SidebarClosedBlockProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(to)
    }
    return (
        <div className="relative py-2 group z-50">
            <button type="button" onClick={handleClick} className="w-full flex justify-center">
                {icon}
            </button>

            <button
                type="button"
                onClick={handleClick}
                className="
                    absolute -left-7.5 top-1/2 -translate-y-1/2
                    flex px-6 py-1.75 bg-gray-500-op70 text-gray-100 font-semibold14 rounded-tr-lg rounded-br-2xl
                    opacity-0 group-hover:opacity-100 group-hover:bg-gray-600 pointer-events-none group-hover:pointer-events-auto transition z-50 cursor-pointer
                "
            >
                <div className="flex items-center gap-3 ">
                    <span className="shrink-0 ml-1.5">{icon}</span>
                    <span className="whitespace-nowrap">{title}</span>
                </div>
            </button>
        </div>
    )
}

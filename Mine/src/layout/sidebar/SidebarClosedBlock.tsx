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
        <div className="group">
            <div className="relative group-hover:bg-gray-600-op80">
                <button className="flex px-5 py-2" onClick={handleClick}>
                    {icon}
                </button>
                <div className="absolute left-16 top-1 px-3 py-0.75 bg-gray-600-op80 group-hover:opacity-100 opacity-0 rounded-full text-gray-100 whitespace-nowrap">
                    {title}
                </div>
            </div>
        </div>
    )
}

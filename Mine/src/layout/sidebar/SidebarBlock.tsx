import { useNavigate } from 'react-router-dom'

interface SidebarBlockProps {
    title: string
    icon?: React.ReactNode
    to: string
}

export default function SidebarBlock({ title, icon, to }: SidebarBlockProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(to)
    }
    return (
        <div
            className="w-full flex hover:bg-gray-600-op80 py-1.75 gap-3 items-center pl-5 text-gray-100-op70  hover:text-gray-100 font-semibold14 cursor-pointer"
            onClick={handleClick}
        >
            {icon}
            {title}
        </div>
    )
}

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
            className="w-full flex hover:bg-main-opacity20 py-2 gap-2 items-center pl-6 text-black-textSmallTitle font-semibold14 cursor-pointer"
            onClick={handleClick}
        >
            {icon}
            {title}
        </div>
    )
}

import { useNavigate } from 'react-router-dom'

interface SectionIndexProps {
    title: string
    sectionId: number
    magazineId?: number
}

export default function SectionIndexClose({ title, sectionId, magazineId }: SectionIndexProps) {
    const navigate = useNavigate()
    const onClickhandle = () => {
        navigate(`/${magazineId}/${sectionId}`)
    }
    return (
        <div
            className="flex bg-gray-600-op30 px-2 py-3 w-30 h-8.5 justify-center items-center cursor-pointer"
            onClick={onClickhandle}
        >
            <div className="flex w-full font-medium12 text-gray-100 truncate">{title}</div>
        </div>
    )
}
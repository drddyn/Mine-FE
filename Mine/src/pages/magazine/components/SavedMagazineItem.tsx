import { useNavigate } from 'react-router-dom'
import type { Magazine } from '../../../types/magazine'

type Props = {
  magazine: Magazine
}

export default function SavedMagazineItem({ magazine }: Props) {
  const navigate = useNavigate()

  return (
    <div
      className="flex w-119 h-67 p-[16px_20px] justify-end items-end gap-2.5 shrink-0 cursor-pointer"
      style={{
        backgroundImage: `url(${magazine.coverImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => navigate(`/magazine/${magazine.magazineId}`)}
    >
      <span className="text-white text-right leading-normal font-[MaruBuri] font-semibold24">
        {magazine.title}
      </span>
    </div>
  )
}
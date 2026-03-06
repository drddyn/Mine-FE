import type { Magazine } from '../../../types/magazine'

type Props = {
  magazine: Magazine
}

const isValidUrl = (url: string) => {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export default function SavedMagazineItem({ magazine }: Props) {
  const safeImageUrl = isValidUrl(magazine.coverImageUrl) ? magazine.coverImageUrl : ''

  return (
    <div
      className="flex w-119 h-67 p-[16px_20px] justify-end items-end gap-2.5 shrink-0"
      style={{
        backgroundImage: safeImageUrl ? `url(${safeImageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-white text-right leading-normal font-[MaruBuri] font-semibold24">
        {magazine.title}
      </span>
    </div>
  )
}
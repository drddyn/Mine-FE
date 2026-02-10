interface SectionCoverProps {
    size?: string
    onclick?: () => void
    imageUrl?: string
}

export default function SectionCover({ imageUrl, size, onclick }: SectionCoverProps) {
    return (
        <img
            src={imageUrl}
            className={`cursor-pointer select-none rounded-lg object-cover max-w-70 max-h-100 ${size}`}
            onClick={onclick}
        />
    )
}

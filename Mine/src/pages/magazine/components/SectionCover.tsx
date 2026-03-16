interface SectionCoverProps {
    size?: string
    onclick?: () => void
    imageUrl?: string
}

export default function SectionCover({ imageUrl, size, onclick }: SectionCoverProps) {
    return (
        <img
            src={imageUrl}
            className={`cursor-pointer select-none object-cover w-full h-full ${size}`}
            onClick={onclick}
        />
    )
}

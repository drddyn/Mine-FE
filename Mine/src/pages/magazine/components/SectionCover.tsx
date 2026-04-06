interface SectionCoverProps {
    onclick?: () => void
    imageUrl?: string
    title?: string
}

export default function SectionCover({ imageUrl, onclick, title }: SectionCoverProps) {
    return (
        <div className={`relative w-full h-full`}>
            <img
                src={imageUrl}
                className={`cursor-pointer select-none object-cover w-full h-full overflow-hidden`}
                onClick={onclick}
            />
            <span className="absolute z-10 bottom-3 right-3 text-white  leading-normal font-notoserif font-semibold20">
                {title}
            </span>
        </div>
    )
}

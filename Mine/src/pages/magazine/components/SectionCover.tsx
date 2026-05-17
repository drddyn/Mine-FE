interface SectionCoverProps {
    onclick?: () => void
    imageUrl?: string
    title?: string
}

export default function SectionCover({ imageUrl, onclick, title }: SectionCoverProps) {
    return (
        <div
            className="flex justify-end items-end cursor-pointer w-full h-full pb-2 pr-5 bg-cover bg-center"
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
            }}
            onClick={onclick}
        >
            <span className="text-gray-100 text-right leading-normal font-notoserif font-semibold20 break-keep">
                {title}
            </span>
        </div>
    )
}

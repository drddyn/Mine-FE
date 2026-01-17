interface SectionCoverProps {
    size?: string
    onclick?: () => void
}

export default function SectionCover({ size, onclick }: SectionCoverProps) {
    return <div className={` bg-black-image rounded-lg ${size}`} onClick={onclick}></div>
}

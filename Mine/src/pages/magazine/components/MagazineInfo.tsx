import Share from '../../../icon/share.svg?react'

interface MagazineInfoProps {
    magTitle?: string
}
export default function MagazineInfo({ magTitle }: MagazineInfoProps) {
    return (
        <div className="flex max-w-245 w-full justify-between items-center self-stretch mt-9">
            <div className="font-regular16 font-maruburi text-black-textBigTitle">{magTitle}</div>
            <Share />
        </div>
    )
}

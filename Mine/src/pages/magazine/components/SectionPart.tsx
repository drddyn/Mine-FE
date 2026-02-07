import Delete from '../../../icon/delete.svg?react'
import parse from 'html-react-parser'

interface SectionPartProps {
    sectionDir?: string
    titleDir?: string
    size?: string
    smallTitle?: string
    content: string
    imageUrl?: string
}

export default function SectionPart({ sectionDir, titleDir, size, smallTitle, content, imageUrl }: SectionPartProps) {
    const htmlcontent = content
    return (
        <section className="group flex w-full h-69.5 items-start gap-10" dir={sectionDir}>
            <img src={imageUrl} className={`w-57.5 h-full rounded-lg ${size}`}></img>
            <div className="flex flex-col ltr:ml-2.5 rtl:mr-2.5 h-full items-start gap-6 flex-1">
                <div className="flex w-full justify-between items-center " dir={titleDir}>
                    <div className="font-semibold36 font-maruburi text-black-textBigTitle">{smallTitle}</div>
                    <Delete className="hover:text-black-icon text-transparent" />
                </div>
                <div className="w-full font-regular16 text-black-textMain break-all " dir="ltr">
                    {parse(htmlcontent)}
                </div>
            </div>
        </section>
    )
}

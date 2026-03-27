import { useState } from 'react'
import Hamburger from '../../../icon/hamburger.svg?react'
import ReactMarkDown from 'react-markdown'
import ParagraphHamburgerModal from '../../../components/hamburgerModal/ParagraphHamburgerModal'
import { useMagazine } from '../MagazineProvider'

interface ParagraphPartProps {
    paragrahId?: number
    sectionId?: number
    sectionDir?: string
    titleDir?: string
    smallTitle?: string
    content: string
    imageUrl?: string
}

export default function ParagraphPart({
    paragrahId,
    sectionId,
    sectionDir,
    titleDir,
    smallTitle,
    content,
    imageUrl,
}: ParagraphPartProps) {
    const magazinedata = useMagazine()

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const handleHamburger = () => setIsHamburgerOpen((prev) => !prev)
    const closeHamburger = () => setIsHamburgerOpen(false)

    return (
        <section className="group flex w-full items-center gap-10" dir={sectionDir}>
            {imageUrl && <img src={imageUrl} className="object-scale-down max-h-70 max-w-[45%] shrink-0" />}
            <div className="flex flex-col ltr:ml-2.5 rtl:mr-2.5 h-full items-start gap-6 flex-1">
                <div className="flex w-full justify-between items-center" dir={titleDir}>
                    <div className="font-medium36 font-notoserif text-gray-600">{smallTitle}</div>
                    <div className="relative flex items-center" dir="ltr">
                        <Hamburger
                            className="hover:text-black-icon text-black-icon cursor-pointer"
                            onClick={handleHamburger}
                        />
                        {isHamburgerOpen && (
                            <ParagraphHamburgerModal
                                handleClose={closeHamburger}
                                sectionId={sectionId}
                                magazineId={magazinedata?.magazineId}
                                paragraphId={paragrahId}
                                subtitle={smallTitle ?? ''}
                                top={10}
                                left={10}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full font-regular16 text-black-textMain break-all" dir="ltr">
                    <ReactMarkDown>{content}</ReactMarkDown>
                </div>
            </div>
        </section>
    )
}
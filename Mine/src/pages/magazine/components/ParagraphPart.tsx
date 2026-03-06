import { useState } from 'react'
import Hamburger from '../../../icon/hamburger.svg?react'
import parse from 'html-react-parser'
import ParagraphHamburgerModal from '../../../components/hamburgerModal/ParagraphHamburgerModal'
import { useMagazine } from '../MagazineProvider'

interface ParagraphPartProps {
    paragrahId?: number
    sectionId?: number
    sectionDir?: string
    titleDir?: string
    size?: string
    smallTitle?: string
    content: string
    imageUrl?: string
}

export default function ParagraphPart({
    paragrahId,
    sectionId,
    sectionDir,
    titleDir,
    size,
    smallTitle,
    content,
    imageUrl,
}: ParagraphPartProps) {
    const magazinedata = useMagazine()

    const htmlcontent = content
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 })
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const openHamburger = () => setIsHamburgerOpen(true)
    const closeHamburger = () => setIsHamburgerOpen(false)

    const handleHamburger = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setModalPos({
            top: rect.top + window.scrollY,
            left: rect.right + 10,
        })
        openHamburger()
    }
    return (
        <section className="group flex w-full h-69.5 items-start gap-10" dir={sectionDir}>
            <img src={imageUrl} className={`w-57.5 h-full rounded-lg ${size}`}></img>
            <div className="flex flex-col ltr:ml-2.5 rtl:mr-2.5 h-full items-start gap-6 flex-1">
                <div className="flex w-full justify-between items-center " dir={titleDir}>
                    <div className="font-medium36 font-maruburi text-black-textBigTitle">{smallTitle}</div>
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
                            top={modalPos.top}
                            left={modalPos.left}
                            // onEdit={}
                        />
                    )}
                </div>
                <div className="w-full font-regular16 text-black-textMain break-all " dir="ltr">
                    {parse(htmlcontent)}
                </div>
            </div>
        </section>
    )
}

import Share from '../../../icon/share.svg?react'
import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import Heart from '../../../icon/heart.svg?react'
import { useState } from 'react'
import SectionHamburgerModal from '../../../components/SectionHamburgerModal'

interface MagazineInfoProps {
    magTitle?: string
    nickname?: string
    profileImage?: string
    hearts?: number
    sectionId?: number
}
export default function MagazineInfo({ magTitle, nickname, profileImage, hearts, sectionId }: MagazineInfoProps) {
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
        <div className="flex max-w-245 w-full justify-between items-center self-stretch mt-9">
            <div className="flex items-center gap-2">
                <div className="font-regular16 font-maruburi text-black-textBigTitle">{magTitle}</div>
                <Hamburger className="rotate-90 text-black-icon" onClick={handleHamburger} />
                {isHamburgerOpen && (
                    <SectionHamburgerModal
                        handleClose={closeHamburger}
                        sectionId={sectionId}
                        top={modalPos.top}
                        left={modalPos.left}
                        // onEdit={}
                    />
                )}
            </div>
            <div className="flex items-center gap-1">
                <Heart className="text-black-icon" />
                <div className="text-black-icon">{hearts}</div>
                <Share className="text-black-icon" />
            </div>
            <ProfileBox nickname={nickname} profileImage={profileImage} mode="section" />
        </div>
    )
}

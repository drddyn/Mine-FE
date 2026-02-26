import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import { useState } from 'react'
import SectionHamburgerModal from '../../../components/hamburgerModal/SectionHamburgerModal'
import HeartCount from './HeartCount'
import { useMagazine } from '../MagazineProvider'

interface MagazineInfoProps {
    nickname?: string
    profileImage?: string
    sectionId?: number
}
export default function MagazineInfo({ nickname, profileImage, sectionId }: MagazineInfoProps) {
    const magazinedata = useMagazine()
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
                <div className="font-regular16 font-maruburi text-black-textBigTitle">{magazinedata?.title}</div>
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
            <HeartCount hearts={magazinedata?.likeCount} magazineId={magazinedata?.magazineId} />
            <ProfileBox nickname={nickname} profileImage={profileImage} mode="section" />
        </div>
    )
}

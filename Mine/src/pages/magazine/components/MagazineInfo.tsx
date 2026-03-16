import Hamburger from '../../../icon/hamburger.svg?react'
import ProfileBox from './ProfileBox'
import { useState } from 'react'
import SectionHamburgerModal from '../../../components/hamburgerModal/SectionHamburgerModal'
import HeartCount from './HeartCount'
import { useMagazine } from '../MagazineProvider'

interface MagazineInfoProps {
    nickname?: string
    profileImage?: string
    magazineId?: number
    sectionId?: number
    mode: 'section' | 'magazine'
    onClick?: (magazineId: number) => void
}
export default function MagazineInfo({ nickname, profileImage, sectionId, mode, onClick }: MagazineInfoProps) {
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
        <div className="flex w-full justify-between items-center self-stretch">
            <div className="flex items-center gap-2 basis-100">
                <div
                    className={`cursor-pointer ${mode === 'section' ? 'font-regular16 font-notoserif text-gray-600' : 'font-semibold20 font-pretendard text-gray-100'}`}
                    onClick={() => magazinedata?.magazineId && onClick?.(magazinedata.magazineId)}
                >
                    {magazinedata?.title}
                </div>
                <Hamburger className="rotate-90 text-black-icon cursor-pointer" onClick={handleHamburger} />
                {isHamburgerOpen && magazinedata?.magazineId !== undefined && sectionId !== undefined && (
                    <SectionHamburgerModal
                        handleClose={closeHamburger}
                        magazineId={magazinedata?.magazineId}
                        sectionId={sectionId}
                        top={modalPos.top}
                        left={modalPos.left}
                        // onEdit={}
                    />
                )}
            </div>
            <HeartCount
                hearts={magazinedata?.likeCount}
                magazineId={magazinedata?.magazineId}
                classname="basis-1 justify-center"
            />
            <ProfileBox nickname={nickname} profileImage={profileImage} mode={mode} classname="basis-100 justify-end" />
        </div>
    )
}

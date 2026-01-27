import { useState } from 'react'
import Hamburger from '../../icon/hamburger.svg?react'
import SidebarHamburgerModal from './SidebarHamburgerModal'
import { createPortal } from 'react-dom'

interface SidebarMagazineProps {
    title: string
    child?: React.ReactNode
}

export default function SidebarMagazine({ title }: SidebarMagazineProps) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 }) // 좌표 상태

    const handleHamburger = (e: React.MouseEvent) => {
        // 클릭된 요소(햄버거 아이콘)의 위치 정보를 가져옵니다.
        const rect = e.currentTarget.getBoundingClientRect()
        // 아이콘의 오른쪽 끝 지점을 기준으로 위치 설정
        setModalPos({
            top: rect.top + window.scrollY,
            left: rect.right + 10, // 아이콘 오른쪽에서 10px 띄움
        })

        setIsHamburgerOpen((prev) => !prev)
    }

    return (
        <div className="w-full flex flex-col ">
            <div className=" w-full flex justify-between hover:bg-main-opacity20 py-2 items-center pl-7 pr-4 text-black-textSmallTitle font-semibold14">
                {title}
                <Hamburger className="cursor-pointer" onClick={handleHamburger} />
            </div>
            {isHamburgerOpen &&
                createPortal(<SidebarHamburgerModal top={modalPos.top} left={modalPos.left} />, document.body)}
        </div>
    )
}

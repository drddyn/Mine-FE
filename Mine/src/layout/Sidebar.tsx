import { useState } from 'react'
import MineLogo from '../icon/minelogo.svg?react'
import SidebarOpen from './sidebar/SidebarOpen'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <div className="fixed top-0 left-0 ">
            {!isSidebarOpen && <MineLogo className="ml-6.5 mt-12 cursor-pointer" onClick={toggleSidebar} />}

            {isSidebarOpen && (
                <>
                    <div className=" inset-0 z-40 pointer-events-none" onClick={toggleSidebar} />
                    <SidebarOpen onclick={toggleSidebar} />
                </>
            )}
        </div>
    )
}

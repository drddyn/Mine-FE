import { useState } from 'react'
import MineLogo from '../icon/minelogo.svg?react'
import SidebarOpen from './sidebar/SidebarOpen'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <>
            {!isSidebarOpen && <MineLogo className="ml-6.5 mt-12" onClick={toggleSidebar} />}

            {isSidebarOpen && <SidebarOpen onclick={toggleSidebar} />}
        </>
    )
}

import type React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation()

    const hideSidebarRoutes = ['/login', '/signup', '/landing']
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {!shouldHideSidebar && <Sidebar isSidebarOpen={isOpen} setIsSidebarOpen={setIsOpen} />}
            {/* flex-1이 핵심: 남은 공간을 채우며 사이드바를 밀어냄 */}
            <main className="flex-1 overflow-y-auto bg-white transition-all duration-300">{children}</main>
        </div>
    )
}

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
        <div className="relative h-screen w-full overflow-hidden">
            {!shouldHideSidebar && <Sidebar isSidebarOpen={isOpen} setIsSidebarOpen={setIsOpen} />}

            <main className="h-full w-full overflow-y-auto duration-300">{children}</main>
        </div>
    )
}

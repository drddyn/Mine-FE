import type React from 'react'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation()

    const hideSidebarRoutes = ['/login', '/signup', '/landing']
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname)

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {!shouldHideSidebar && <Sidebar />}

            <main className="h-full w-full overflow-y-auto duration-300">{children}</main>
        </div>
    )
}

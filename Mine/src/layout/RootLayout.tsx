import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function RootLayout() {
    const location = useLocation()

    const hideSidebarRoutes = ['/login', '/signup']
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname)

    return (
        <div className="relative">
            {!shouldHideSidebar && <Sidebar />}
            <Outlet />
        </div>
    )
}

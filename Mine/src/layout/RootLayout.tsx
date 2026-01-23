import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function RootLayout() {
    const location = useLocation()

    const hideSidebarRoutes = ['/login', '/signup', '/landing']
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname)

    return (
        <div className="relative min-h-screen">
            {!shouldHideSidebar && <Sidebar />}

            <div className={!shouldHideSidebar ? 'pl-20.5' : ''}>
                <Outlet />
            </div>
        </div>
    )
}

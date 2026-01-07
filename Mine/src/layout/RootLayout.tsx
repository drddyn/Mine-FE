import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function RootLayout() {
    return (
        <div className="relative">
            <Sidebar />
            <Outlet />
        </div>
    )
}

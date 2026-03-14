import type React from 'react'
import Sidebar from './Sidebar'
import { useAuthStore } from '../stores/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useAuthStore()
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {isLoggedIn && <Sidebar />}

            <main className="h-full w-full overflow-y-auto duration-300">{children}</main>
        </div>
    )
}

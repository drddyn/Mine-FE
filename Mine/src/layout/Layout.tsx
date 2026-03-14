import type React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {token && <Sidebar />}

            <main className="h-full w-full overflow-y-auto duration-300">{children}</main>
        </div>
    )
}

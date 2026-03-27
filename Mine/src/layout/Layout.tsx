import type React from 'react'
import Sidebar from './Sidebar'
import { useAuthStore } from '../stores/auth'
import useToastStore from '../stores/toast'
import Toast from '../components/common/Toast'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useAuthStore()
    const { message, hideToast } = useToastStore()

    useEffect(() => {
        if (!message) return
        const timer = setTimeout(() => hideToast(), 3000)
        return () => clearTimeout(timer)
    }, [message, hideToast])

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {isLoggedIn && <Sidebar />}
            <main className="h-full w-full overflow-y-auto duration-300">{children}</main>
            {message && (
                <div className="fixed z-[9999] bottom-10 left-1/2 -translate-x-1/2">
                    <Toast message={message} />
                </div>
            )}
        </div>
    )
}
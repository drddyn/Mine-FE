import type React from 'react'
import Sidebar from './Sidebar'
import { useAuthStore } from '../stores/auth'
import useToastStore from '../stores/toast'
import Toast from '../components/common/Toast'
import { useEffect } from 'react'
import { useErrorStore } from '../stores/error'
import NotFoundPage from '../pages/NotFoundPage'
import { useLocation } from 'react-router-dom'

const TOAST_DURATION = 3000

export default function Layout({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useAuthStore()
    const { message, hideToast } = useToastStore()
    const { isNotFound, setNotFound } = useErrorStore()
    const location = useLocation()

    useEffect(() => {
        if (!message) return
        const timer = setTimeout(() => hideToast(), TOAST_DURATION)
        return () => clearTimeout(timer)
    }, [message, hideToast])

    //페이지 이동 시 상태 초기화
    useEffect(() => {
        setNotFound(false)
    }, [location.pathname, setNotFound]) // 주소(pathname)가 바뀔 때마다 실행됨

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {isLoggedIn && <Sidebar />}
            {isNotFound && <NotFoundPage />}
            {!isNotFound && <main className="h-full w-full overflow-y-auto duration-300">{children}</main>}
            {message && (
                <div className="fixed bottom-37.25 left-1/2 -translate-x-1/2 z-9999">
                    <Toast message={message} />
                </div>
            )}
        </div>
    )
}

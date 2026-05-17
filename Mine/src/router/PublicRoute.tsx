import { useAuthStore } from '../stores/auth'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
    children: React.ReactNode
}

export default function PublicRoute({ children }: PublicRouteProps) {
    const { isLoggedIn } = useAuthStore()

    if (isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return <>{children}</>
}
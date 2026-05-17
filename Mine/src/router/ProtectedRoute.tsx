import { useAuthStore } from '../stores/auth'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/landing" replace />
    }

    return <>{children}</>
}
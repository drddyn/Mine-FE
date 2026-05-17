import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import MagazinePage from '../pages/magazine/MagazinePage'
import LoginPage from '../pages/login/LoginPage'
import FindingPage from '../pages/login/FindingPage'
import SignupPage from '../pages/signup/SignupPage'
import LandingPage from '../pages/landing/LandingPage'
import GuestPage from '../pages/main/GuestPage'
import ExplorePage from '../pages/magazine/ExplorePage'
import SavedMagazinePage from '../pages/magazine/SavedMagazinePage'
import RootLayout from '../layout/RootLayout'
import SectionPage from '../pages/magazine/SectionPage'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'landing',
                element: (
                    <PublicRoute>
                        <LandingPage />
                    </PublicRoute>
                ),
            },
            {
                path: 'guest',
                element: (
                    <PublicRoute>
                        <GuestPage />
                    </PublicRoute>
                ),
            },
            {
                path: ':magazineId',
                element: (
                    <ProtectedRoute>
                        <MagazinePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ':magazineId/:sectionId',
                element: (
                    <ProtectedRoute>
                        <SectionPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'explore',
                element: (
                    <ProtectedRoute>
                        <ExplorePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'saved',
                element: (
                    <ProtectedRoute>
                        <SavedMagazinePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'login',
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                ),
            },
            {
                path: 'login/finding',
                element: (
                    <PublicRoute>
                        <FindingPage />
                    </PublicRoute>
                ),
            },
            {
                path: 'signup',
                element: (
                    <PublicRoute>
                        <SignupPage />
                    </PublicRoute>
                ),
            },
        ],
    },
])
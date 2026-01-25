import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import MagazinePage from '../pages/magazine/MagazinePage'
import LoginPage from '../pages/login/LoginPage'
import FindingPage from '../pages/login/FindingPage'
import SignupPage from '../pages/signup/SignupPage'
import LandingPage from '../pages/landing/LandingPage'


import RootLayout from '../layout/RootLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'landing', element: <LandingPage /> },
            { path: 'mymagazine', element: <MagazinePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'signup', element: <SignupPage /> },
            { path: 'login/finding', element: <FindingPage /> },
        ],
    },
])

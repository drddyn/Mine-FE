import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import MagazinePage from '../pages/magazine/MagazinePage'
import LoginPage from '../pages/login/LoginPage'
import FindingPage from '../pages/login/FindingPage'
import SignupPage from '../pages/signup/SignupPage'
import LandingPage from '../pages/landing/LandingPage'
import ExplorePage from '../pages/magazine/ExplorePage'
import SavedMagazinePage from '../pages/magazine/SavedMagazinePage'
import RootLayout from '../layout/RootLayout'
import SectionPage from '../pages/magazine/SectionPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'landing', element: <LandingPage /> },
            { path: 'mymagazine', element: <MagazinePage /> },
            { path: 'magazine/:magazineId/section/:sectionId', element: <SectionPage /> },
            { path: 'magazine/explore', element: <ExplorePage /> },
            { path: 'magazine/saved', element: <SavedMagazinePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'signup', element: <SignupPage /> },
            { path: 'login/finding', element: <FindingPage /> },
        ],
    },
])

import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import MagazinePage from '../pages/magazine/MagazinePage'
import LoginPage from '../pages/login/LoginPage'
import FindingPage from '../pages/signin/FindingPage' 
import SignupPage from '../pages/signup/SignupPage'

import RootLayout from '../layout/RootLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'mymagazine', element: <MagazinePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'signup', element: <SignupPage /> },
            { path: 'signin/finding', element: <FindingPage /> }, 
        ],
    },
])

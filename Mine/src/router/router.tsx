import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import MagazinePage from '../pages/magazine/MagazinePage'
import LoginPage from '../pages/login/LoginPage'
import SigninPage from '../pages/signin/SigninPage'

export const router = createBrowserRouter([
    {
        path: '/',
        // element:
        children: [
            { index: true, element: <MainPage /> },
            { path: '/mymagazine', element: <MagazinePage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/signin', element: <SigninPage /> },
        ],
    },
])

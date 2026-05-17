import { Outlet } from 'react-router-dom'

import Layout from './Layout'
import LLMInputLayout from '../components/LLMInputLayout'
import GlobalLoadingToast from '../components/common/GlobalLoadingToast'

export default function RootLayout() {
    return (
        <div>
            <Layout>
                <Outlet />
            </Layout>
            <LLMInputLayout />
            <GlobalLoadingToast />
        </div>
    )
}

import { Outlet } from 'react-router-dom'

import Layout from './Layout'
import LLMInputLayout from '../components/LLMInputLayout'

export default function RootLayout() {
    return (
        <div>
            <Layout>
                <Outlet />
            </Layout>
            <LLMInputLayout />
        </div>
    )
}

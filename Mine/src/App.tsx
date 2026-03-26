import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'


function App() {
    console.log(import.meta.env.VITE_API_BASE_URL)
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App

import { useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'

export default function LLMInputLayout() {
    const location = useLocation()
    const hiddenPath = ['/login', '/signup', '/']
    const isHiddenPath = hiddenPath.includes(location.pathname)

    if (!isHiddenPath)
        return (
            <div className="absolute bottom-8 translate-x-1/2">
                <LLMInputBox />
            </div>
        )
    return null
}

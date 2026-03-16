import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import usePostMagazine from '../hooks/usePostMagazine'
import { useAuthStore } from '../stores/auth'

export default function LLMInputLayout() {
    const { isLoggedIn } = useAuthStore()
    const location = useLocation()
    const hiddenPath = ['/login', '/signup', '/landing', '/']
    const isHiddenPath = hiddenPath.includes(location.pathname)

    const postAddSectionMutation = usePostAddSection()
    const postAddInSectionPageMutation = usePostAddSectionInSectionPage()
    const postMagazineMutation = usePostMagazine()

    const sectionMatch = matchPath('/magazine/:magazineId/section/:sectionId', location.pathname)
    const magazineMatch = matchPath('/magazine/:magazineId', location.pathname)

    const currentMagazineId = magazineMatch?.params.magazineId

    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    let handleSend = (value: string) => {
        console.log('기본 전송:', value)
    }
    if (!isLoggedIn || isHiddenPath) return null
    if (!isHiddenPath && sectionMatch) {
        const { magazineId, sectionId } = sectionMatch.params
        handleSend = async (value: string) => {
            postAddInSectionPageMutation.mutate({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            })
        }
    } else if (!isHiddenPath && magazineMatch && isNumericMagazineId) {
        const { magazineId } = magazineMatch.params
        handleSend = async (value: string) => {
            postAddSectionMutation.mutate({
                magazineId: Number(magazineId),
                message: value,
            })
        }
    } else if (!isHiddenPath) {
        handleSend = async (value: string) => {
            postMagazineMutation.mutate({
                topic: value,
                user_mood: '',
            })
        }
    }

    return (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-50 pointer-events-none">
            <div className="pointer-events-auto">
                <LLMInputBox onSend={handleSend} />
            </div>
        </div>
    )
}

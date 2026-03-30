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

    const sectionMatch = matchPath('/:magazineId/:sectionId', location.pathname)
    const magazineMatch = matchPath('/:magazineId', location.pathname)

    const currentMagazineId = magazineMatch?.params.magazineId

    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const isAnyPending =
        postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending || postMagazineMutation.isPending

    if (!isLoggedIn || isHiddenPath) return null

    const handleSend = (value: string) => {
        if (sectionMatch) {
            // 섹션 페이지
            const { magazineId, sectionId } = sectionMatch.params
            postAddInSectionPageMutation.mutate({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            })
        } else if (magazineMatch && isNumericMagazineId) {
            // 매거진 페이지
            const { magazineId } = magazineMatch.params
            postAddSectionMutation.mutate({
                magazineId: Number(magazineId),
                message: value,
            })
        } else {
            // 그외 페이지
            postMagazineMutation.mutate({
                topic: value,
                user_mood: '',
            })
        }
    }

    return (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-50 pointer-events-none">
            <div className="pointer-events-auto">
                <LLMInputBox onSend={handleSend} isPending={isAnyPending} />
            </div>
        </div>
    )
}

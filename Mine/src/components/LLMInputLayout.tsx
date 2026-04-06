import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import { useAuthStore } from '../stores/auth'
import useUserStore from '../stores/user'
import useGetMagazineDetail from '../hooks/useGetMagazineDetail'

export default function LLMInputLayout() {
    const { isLoggedIn } = useAuthStore()
    const { user } = useUserStore()
    const location = useLocation()
    const hiddenPath = ['/login', '/signup', '/landing', '/explore', '/saved', '/']
    const isHiddenPath = hiddenPath.includes(location.pathname)

    const postAddSectionMutation = usePostAddSection()
    const postAddInSectionPageMutation = usePostAddSectionInSectionPage()

    const sectionMatch = matchPath('/:magazineId/:sectionId', location.pathname)
    const magazineMatch = matchPath('/:magazineId', location.pathname)

    //magazineId 추출
    const currentMagazineId = sectionMatch?.params.magazineId || magazineMatch?.params.magazineId
    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const { data: magazineDetail } = useGetMagazineDetail(Number(currentMagazineId))

    // 매거진 주인이 '나'인지 판별
    const isMyMagazine = magazineDetail?.user.id === user?.id

    const isAnyPending = postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending
    if (!isLoggedIn || isHiddenPath || !isMyMagazine) return null

    const handleSend = (value: string) => {
        if (sectionMatch && isMyMagazine) {
            // 섹션 페이지
            const { magazineId, sectionId } = sectionMatch.params
            postAddInSectionPageMutation.mutate({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            })
        } else if (magazineMatch && isNumericMagazineId && isMyMagazine) {
            // 매거진 페이지
            const { magazineId } = magazineMatch.params
            postAddSectionMutation.mutate({
                magazineId: Number(magazineId),
                message: value,
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

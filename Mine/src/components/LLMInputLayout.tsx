import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import { useAuthStore } from '../stores/auth'
import useUserStore from '../stores/user'
import { useToastStore } from '../stores/toastStore'
import useGetMagazineDetail from '../hooks/useGetMagazineDetail'

export default function LLMInputLayout() {
    const { isLoggedIn } = useAuthStore()
    const { user } = useUserStore()
    const location = useLocation()
    const { setToast } = useToastStore()
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
        if (!isMyMagazine) return

        if (sectionMatch) {
            // 섹션 페이지 (문단 추가)
            const { magazineId, sectionId } = sectionMatch.params
            
            setToast('paragraph', 'loading') // 토스트 시작
            
            postAddInSectionPageMutation.mutate({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            }, {
                onSuccess: () => setToast('paragraph', 'success'),
                onError: () => setToast('paragraph', 'error')
            })
        } else if (magazineMatch && isNumericMagazineId) {
            // 매거진 페이지 (섹션 추가)
            const { magazineId } = magazineMatch.params
            
            setToast('section', 'loading') // 토스트 시작
            
            postAddSectionMutation.mutate({
                magazineId: Number(magazineId),
                message: value,
            }, {
                onSuccess: () => setToast('section', 'success'),
                onError: () => setToast('section', 'error')
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

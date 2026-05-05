import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import { useAuthStore } from '../stores/auth'
import useUserStore from '../stores/user'
import { useToastStore } from '../stores/toastStore'
import useGetMagazineDetail from '../hooks/useGetMagazineDetail'
import useSidebarStore from '../stores/sidebar'

export default function LLMInputLayout() {
    const { isLoggedIn } = useAuthStore()
    const { user } = useUserStore()
    const location = useLocation()
    const { setToast } = useToastStore()
    const { isOpen } = useSidebarStore()
    const hiddenPath = ['/login', '/signup', '/landing', '/explore', '/saved', '/']
    const isHiddenPath = hiddenPath.includes(location.pathname)

    const postAddSectionMutation = usePostAddSection()
    const postAddInSectionPageMutation = usePostAddSectionInSectionPage()

    const sectionMatch = matchPath('/:magazineId/:sectionId', location.pathname)
    const magazineMatch = matchPath('/:magazineId', location.pathname)

    const currentMagazineId = sectionMatch?.params.magazineId || magazineMatch?.params.magazineId
    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const { data: magazineDetail } = useGetMagazineDetail(Number(currentMagazineId))

    const isMyMagazine = magazineDetail?.user.id === user?.id

    const isAnyPending = postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending
    if (!isLoggedIn || isHiddenPath || !isMyMagazine) return null

    const handleSend = (value: string) => {
        if (!isMyMagazine) return

        if (sectionMatch) {
            const { magazineId, sectionId } = sectionMatch.params
            setToast('paragraph', 'loading')
            postAddInSectionPageMutation.mutate({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            }, {
                onSuccess: () => setToast('paragraph', 'success'),
                onError: () => setToast('paragraph', 'error')
            })
        } else if (magazineMatch && isNumericMagazineId) {
            const { magazineId } = magazineMatch.params
            setToast('section', 'loading')
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
        <div
            className={`fixed bottom-8 w-full flex justify-center z-50 pointer-events-none transition-all duration-300 ${
                isOpen ? 'pl-60' : 'pl-15'
            }`}
        >
            <div className="pointer-events-auto">
                <LLMInputBox onSend={handleSend} isPending={isAnyPending} />
            </div>
        </div>
    )
}
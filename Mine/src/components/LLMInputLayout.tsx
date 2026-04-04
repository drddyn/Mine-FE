import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import usePostMagazine from '../hooks/usePostMagazine'
import { useAuthStore } from '../stores/auth'
import useUserStore from '../stores/user'
import useGetMagazineDetail from '../hooks/useGetMagazineDetail'
import { useToastStore } from '../stores/toastStore'

export default function LLMInputLayout() {
    const { isLoggedIn } = useAuthStore()
    const { user } = useUserStore()
    const location = useLocation()
    const hiddenPath = ['/login', '/signup', '/landing', '/']
    const isHiddenPath = hiddenPath.includes(location.pathname)

    const postAddSectionMutation = usePostAddSection()
    const postAddInSectionPageMutation = usePostAddSectionInSectionPage()
    const postMagazineMutation = usePostMagazine()

    const sectionMatch = matchPath('/:magazineId/:sectionId', location.pathname)
    const magazineMatch = matchPath('/:magazineId', location.pathname)

    //magazineId 추출
    const currentMagazineId = magazineMatch?.params.magazineId
    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const { data: magazineDetail } = useGetMagazineDetail(Number(currentMagazineId))

    // 🌟 매거진 주인이 '나'인지 판별 (실제 백엔드 DTO의 필드명에 맞게 수정해 주세요)
    const isMyMagazine = magazineDetail?.user.id === user?.id

    const { setToast } = useToastStore()

    const isAnyPending =
        postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending || postMagazineMutation.isPending

    if (!isLoggedIn || isHiddenPath) return null

    const handleSend = async (value: string) => {
        if (sectionMatch && isMyMagazine) {
            // 섹션 페이지
            const { magazineId, sectionId } = sectionMatch.params
            setToast('section', 'loading')
            try {
                await postAddInSectionPageMutation.mutateAsync({
                    magazineId: Number(magazineId),
                    sectionId: Number(sectionId),
                    message: value,
                })
                setToast('section', 'success')
            } catch (error) {
                setToast('section', 'hidden')
            }
        } else if (magazineMatch && isNumericMagazineId && isMyMagazine) {
            // 매거진 페이지
            const { magazineId } = magazineMatch.params
            setToast('section', 'loading')
            try {
                await postAddSectionMutation.mutateAsync({
                    magazineId: Number(magazineId),
                    message: value,
                })
                setToast('section', 'success')
            } catch (error) {
                setToast('section', 'hidden')
            }
        } else {
            // 그외 페이지
            postMagazineMutation.mutate({
                topic: value,
                user_mood: '',
            })
        }
    }

    return (
        <>
            <div className="fixed bottom-8 left-0 w-full flex justify-center z-50 pointer-events-none">
                <div className="pointer-events-auto">
                    <LLMInputBox onSend={handleSend} isPending={isAnyPending} />
                </div>
            </div>
        </>
    )
}

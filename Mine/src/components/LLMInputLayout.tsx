import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import usePostMagazine from '../hooks/usePostMagazine'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toastStore'
import useUserStore from '../stores/user'
import useGetMagazineDetail from '../hooks/useGetMagazineDetail'

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
    const currentMagazineId = sectionMatch?.params.magazineId
    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const { data: magazineDetail } = useGetMagazineDetail(Number(currentMagazineId))

    // 🌟 매거진 주인이 '나'인지 판별 (실제 백엔드 DTO의 필드명에 맞게 수정해 주세요)
    const isMyMagazine = magazineDetail?.user.id === user?.id

    const { setToast } = useToastStore()

    const isAnyPending =
        postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending || postMagazineMutation.isPending

    if (!isLoggedIn || isHiddenPath) return null

    const handleSend = async (value: string) => {
    // 공통 보안 로직: 매거진/섹션 페이지인데 내 매거진이 아니라면 아무것도 하지 않음
    if ((sectionMatch || magazineMatch) && !isMyMagazine) {
        // console.warn('본인 매거진이 아닙니다.');
        return;
    }

    if (sectionMatch) {
        // 섹션 페이지 동작
        const { magazineId, sectionId } = sectionMatch.params
        setToast('paragraph', 'loading') 
        try {
            await postAddInSectionPageMutation.mutateAsync({
                magazineId: Number(magazineId),
                sectionId: Number(sectionId),
                message: value,
            })
            setToast('paragraph', 'success')
        } catch (error) {
            console.error('Failed to add section:', error);
            setToast('paragraph', 'error')
        }
    } else if (magazineMatch && isNumericMagazineId) {
        // 매거진 페이지 동작 (여기서도 isMyMagazine을 체크하도록 위에서 통합 처리함)
        const { magazineId } = magazineMatch.params
        setToast('section', 'loading')
        try {
            await postAddSectionMutation.mutateAsync({
                magazineId: Number(magazineId),
                message: value,
            })
            setToast('section', 'success')
        } catch (error) {
            setToast('section', 'error')
        }
    } else {
        // 그외 (메인 페이지 등 - 여기는 보통 권한 체크가 필요 없음)
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

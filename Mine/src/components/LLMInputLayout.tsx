import { matchPath, useLocation } from 'react-router-dom'
import LLMInputBox from './LLMInputBox'
import usePostAddSection from '../hooks/usePostAddSection'
import usePostAddSectionInSectionPage from '../hooks/usePostAddSectionInSectionPage'
import usePostMagazine from '../hooks/usePostMagazine'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toastStore'
import { useState } from 'react'
import ConfirmModal from './common/ConfirmModal'

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

    //magazineId 추출
    const currentMagazineId = magazineMatch?.params.magazineId
    const isNumericMagazineId = currentMagazineId && !isNaN(Number(currentMagazineId))

    const { setToast } = useToastStore()
    const [isViolationModalOpen, setIsViolationModalOpen] = useState(false)

    const isAnyPending =
        postAddSectionMutation.isPending || postAddInSectionPageMutation.isPending || postMagazineMutation.isPending

    if (!isLoggedIn || isHiddenPath) return null

    const handleSend = async (value: string) => {
        if (sectionMatch) {
            // 섹션 페이지
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
                setToast('paragraph', 'hidden')
                console.error('Failed to add section in section page:', error)
            }
        } else if (magazineMatch && isNumericMagazineId) {
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
            postMagazineMutation.mutate(
                {
                    topic: value,
                    user_mood: '',
                },
                {
                    onError: () => {
                        setIsViolationModalOpen(true)
                    },
                }
            )
        }
    }

    return (
        <>
            <div className="fixed bottom-8 left-0 w-full flex justify-center z-50 pointer-events-none">
                <div className="pointer-events-auto">
                    <LLMInputBox onSend={handleSend} isPending={isAnyPending} />
                </div>
            </div>

            {isViolationModalOpen && (
                <ConfirmModal
                    title="유해 키워드가 감지되었습니다."
                    titleColor="text-heartON"
                    description="3회 이상 감지될 경우 계정이 제한될 수 있습니다."
                    onConfirm={() => setIsViolationModalOpen(false)}
                    confirmButtonColor="hover:bg-heartON active:bg-heartON bg-gray-600-op70"
                />
            )}
        </>
    )
}

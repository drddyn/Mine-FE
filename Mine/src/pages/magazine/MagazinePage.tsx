import { useNavigate, useParams } from 'react-router-dom'
import SectionCover from './components/SectionCover'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'
import { GridContainor } from './components/GridContainor'
import useSidebarStore from '../../stores/sidebar'
import MagazineInfo from './components/MagazineInfo'
import { MagazineProvider } from './MagazineProvider'
import MagazineSkeleton from '../../components/skeleton/MagazineSkeleton'
import { useState, useEffect } from 'react'
import IconWandStars from '../../icon/wand_stars.svg?react'
import ScreenSettingsModal from '../../components/settings/ScreenSettingsModal'
import ConfirmModal from '../../components/common/ConfirmModal'
import useCreateMoodboard from '../../hooks/useCreateMoodboard'
import { useToastStore } from '../../stores/toastStore'

const isValidUrl = (url?: string) => {
    if (!url) return false
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:'
    } catch {
        return false
    }
}

export default function MagazinePage() {
    const { isOpen } = useSidebarStore()
    const { magazineId } = useParams()
    const { data, isPending } = useGetMagazineDetail(Number(magazineId))
    const navigate = useNavigate()
    const [isScreenSettingsOpen, setIsScreenSettingsOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const { mutateAsync: createMoodboard } = useCreateMoodboard()
    const { setToast } = useToastStore()

    const handleSectionClick = (magazineId: number, sectionId: number) => {
        navigate(`/${magazineId}/${sectionId}`)
    }

    const handleConfirm = async () => {
        // 확인 즉시 모달을 닫고 'loading' 토스트를 띄웁니다.
        setIsConfirmOpen(false)
        setToast('moodboard', 'loading')
        try {
            await createMoodboard(Number(magazineId))
            setToast('moodboard', 'success')
        } catch (error) {
            console.error('무드보드 생성 실패:', error)
            setToast('moodboard', 'hidden')
        }
    }

    if (isPending) return <MagazineSkeleton />
    if (!data) return <></>

    const safeCoverImageUrl = isValidUrl(data.coverImageUrl) ? data.coverImageUrl : ''
    const content = data?.sections

    return (
        <MagazineProvider id={Number(magazineId)}>
            <div
                style={{ backgroundImage: safeCoverImageUrl ? `url(${safeCoverImageUrl})` : 'none' }}
                className="bg-cover h-full w-full overflow-hidden fixed bg-fixed"
            >
                <div className={`flex flex-col h-full transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-15'}`}>
                    {data.user && (
                        <div className="mt-9 pr-7 pl-10.5">
                            <MagazineInfo
                                nickname={data.user.nickname}
                                profileImage={data.user.profileImageUrl}
                                magazineId={data.magazineId}
                                mode="magazine"
                                likeCount={data.likeCount} // data(섹션 상세정보)에서 가져온 하트수 전달
                                isLiked={data.isLiked} // 내 좋아요 상태 전달
                            />
                        </div>
                    )}
                    <section className="flex-1 flex h-full w-full justify-center items-center pt-19 pb-40 overflow-hidden">
                        <div className="flex w-full justify-center px-30">
                            <GridContainor>
                                {content?.map((item) => (
                                    <SectionCover
                                        key={item.sectionId}
                                        imageUrl={item.thumbnailUrl}
                                        onclick={() => handleSectionClick(Number(magazineId), item.sectionId)}
                                    />
                                ))}
                            </GridContainor>
                        </div>
                    </section>
                </div>

                <button
                    onClick={() => setIsScreenSettingsOpen(true)}
                    className="fixed bottom-4 right-4 z-50 transition-all duration-200 text-gray-100-op40 hover:text-gray-100"
                >
                    <IconWandStars className="w-6 h-6 **:fill-current" />
                </button>
            </div>

            <ScreenSettingsModal
                isOpen={isScreenSettingsOpen}
                onClose={() => setIsScreenSettingsOpen(false)}
                onRequestConfirm={() => setIsConfirmOpen(true)}
            />

            {isConfirmOpen && (
                <ConfirmModal
                    title="무드보드를 변경하시겠습니까?"
                    description={`AI가 새로운 이미지를 생성하여 현재 무드보드에\n적용합니다.`}
                    onConfirm={handleConfirm}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}
        </MagazineProvider>
    )
}

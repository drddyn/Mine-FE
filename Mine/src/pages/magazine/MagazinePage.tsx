import { useNavigate, useParams } from 'react-router-dom'
import SectionCover from './components/SectionCover'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'
import { GridContainor } from './components/GridContainor'
import useSidebarStore from '../../stores/sidebar'
import MagazineInfo from './components/MagazineInfo'
import { MagazineProvider } from './MagazineProvider'
import { useState, useEffect } from 'react'
import IconWandStars from '../../icon/wand_stars.svg?react'
import ScreenSettingsModal from '../../components/settings/ScreenSettingsModal'
import ConfirmModal from '../../components/common/ConfirmModal'
import useCreateMoodboard from '../../hooks/useCreateMoodboard'
import Toast from '../../components/common/Toast'

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
    const [isConfirmLoading, setIsConfirmLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const { mutateAsync: createMoodboard } = useCreateMoodboard()

    useEffect(() => {
        if (!showToast) return
        const timer = setTimeout(() => setShowToast(false), 3000)
        return () => clearTimeout(timer)
    }, [showToast])

    const handleSectionClick = (magazineId: number, sectionId: number) => {
        navigate(`/${magazineId}/${sectionId}`)
    }

    const handleConfirm = async () => {
        if (isConfirmLoading) return
        setIsConfirmLoading(true)
        try {
            await createMoodboard(Number(magazineId))
            setIsConfirmOpen(false)
            setShowToast(true)
        } catch (error) {
            console.error('무드보드 생성 실패:', error)
        } finally {
            setIsConfirmLoading(false)
        }
    }

    if (isPending) return <></>
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
                    isLoading={isConfirmLoading}
                />
            )}

            {showToast && (
                <div className="fixed left-1/2 -translate-x-1/2 z-50 top-[calc(50%+208px)]">
                    <Toast message="무드보드가 변경되었습니다." />
                </div>
            )}
        </MagazineProvider>
    )
}

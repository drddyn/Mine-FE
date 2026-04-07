import useGetSectionDetail from '../../../hooks/useGetSectionDetail'
import { useMagazine } from '../MagazineProvider'
import MagazineInfo from './MagazineInfo'
import SectionIndexList from './SectionIndexList'
import ParagraphPart from './ParagraphPart'
import useSidebarStore from '../../../stores/sidebar'
import { useNavigate } from 'react-router-dom'
import SectionSkeleton from '../../../components/skeleton/SectionSkeleton'
import { useState, useEffect } from 'react'
import IconWandStars from '../../../icon/wand_stars.svg?react'
import ScreenSettingsModal from '../../../components/settings/ScreenSettingsModal'
import ConfirmModal from '../../../components/common/ConfirmModal'
import useCreateMoodboard from '../../../hooks/useCreateMoodboard'
import { useQueryClient } from '@tanstack/react-query'
import { useToastStore } from '../../../stores/toastStore'

interface SectionContentProps {
    sectionId: number
    magazineId: number
}

export default function SectionContent({ sectionId, magazineId }: SectionContentProps) {
    const { isOpen } = useSidebarStore()
    const magazinedata = useMagazine()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data, isLoading, isSuccess } = useGetSectionDetail(Number(magazineId), Number(sectionId))
    const user = magazinedata?.user
    const content = data?.paragraphs
    const [isScreenSettingsOpen, setIsScreenSettingsOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const { mutateAsync: createMoodboard } = useCreateMoodboard()
    const { setToast } = useToastStore()

    useEffect(() => {
        // 2. 디테일 API 호출이 성공적으로 완료되었다면?
        if (isSuccess) {
            // 3. 서버에 조회 기록이 남았을 테니, 최근 본 섹션 목록을 새로고침합니다!
            queryClient.invalidateQueries({ queryKey: ['recentsections'] })
        }
    }, [isSuccess, queryClient]) // isSuccess가 true로 바뀔 때 한 번 실행됨

    const handleClick = (magazineId: number) => {
        navigate(`/${magazineId}`)
    }

    const handleConfirm = async () => {
        setIsConfirmOpen(false)
        setToast('moodboard', 'loading')
        try {
            await createMoodboard(Number(magazineId))
            queryClient.invalidateQueries({ queryKey: ['magazinedetail', Number(magazineId)] })
            setToast('moodboard', 'success')
        } catch (error) {
            console.error('무드보드 생성 실패:', error)
            setToast('moodboard', 'hidden')
        }
    }

    if (isLoading) {
        return <SectionSkeleton />
    }

    return (
        <div
            style={{ backgroundImage: `url(${magazinedata?.coverImageUrl})` }}
            className="w-full overflow-hidden bg-fixed bg-cover h-screen"
        >
            <div
                className={`justify-center h-full overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-200 scrollbar-no ${isOpen ? 'ml-60' : 'ml-15'}`}
            >
                <div className="flex justify-center px-15 bg-white relative min-h-full w-275 mr-32">
                    <SectionIndexList sectionId={Number(sectionId)} />
                    <div className="flex flex-col w-245 items-center gap-14 mt-9 mb-22 z-10">
                        <MagazineInfo
                            nickname={user?.nickname}
                            profileImage={user?.profileImageUrl}
                            sectionId={Number(sectionId)}
                            magazineId={Number(magazineId)}
                            likeCount={magazinedata?.likeCount} // data(섹션 상세정보)에서 가져온 하트수 전달
                            isLiked={magazinedata?.isLiked} // 내 좋아요 상태 전달
                            mode="section"
                            onClick={handleClick}
                        />
                        {content?.map((item, index) => (
                            <ParagraphPart
                                key={item?.paragraphId}
                                paragrahId={item?.paragraphId}
                                sectionId={sectionId}
                                smallTitle={item?.subtitle}
                                content={item?.text}
                                imageUrl={item?.imageUrl}
                                sectionDir={index % 2 === 0 ? 'rtl' : 'ltr'}
                                titleDir={index % 2 === 0 ? 'ltr' : 'rtl'}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsScreenSettingsOpen(true)}
                        className="fixed bottom-4 right-4 z-50 transition-all duration-200 text-gray-100-op40 hover:text-gray-100"
                    >
                        <IconWandStars className="w-6 h-6 **:fill-current" />
                    </button>
                </div>
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
        </div>
    )
}

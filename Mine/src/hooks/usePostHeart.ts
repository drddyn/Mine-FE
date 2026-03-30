import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postHeart } from '../api/magazine'
import type { ResponseMagazineDetail } from '../types/magazine'

export default function usePostHeart(sectionId: number) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (magazineId: number) => postHeart(magazineId),
        onMutate: async (magazineId: number) => {
            // [핵심] SectionContent에서 쓰는 ['section', magId, secId]와 완벽히 일치시켜야 함
            const queryKey = ['section', magazineId, Number(sectionId)]

            await queryClient.cancelQueries({ queryKey })
            const previousData = queryClient.getQueryData(queryKey)

            queryClient.setQueryData<ResponseMagazineDetail | undefined>(queryKey, (old) => {
                if (!old) return old
                return {
                    ...old,
                    likeCount: old.isLiked ? (old.likeCount || 0) - 1 : (old.likeCount || 0) + 1,
                    isLiked: !old.isLiked,
                }
            })
            return { previousData }
        },
        onError: (err, magazineId, context) => {
            const queryKey = ['section', magazineId, Number(sectionId)]
            queryClient.setQueryData(queryKey, context?.previousData)
            console.error('매거진 하트 누르기 실패:', err)
            alert('매거진 하트 누르기에 실패했습니다.')
        },
        onSettled: (_data, _error, magazineId) => {
            queryClient.invalidateQueries({ queryKey: ['magazine', magazineId, Number(sectionId)] })
        },
    })
}

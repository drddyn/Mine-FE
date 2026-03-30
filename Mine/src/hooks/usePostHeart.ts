import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postHeart } from '../api/magazine'
import type { ResponseMagazineDetail } from '../types/magazine'

export default function usePostHeart() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (magazineId: number) => postHeart(magazineId),
        onMutate: async (magazineId: number) => {
            const queryKey = ['magazinedetail', magazineId]

            await queryClient.cancelQueries({ queryKey })
            const previousData = queryClient.getQueryData<ResponseMagazineDetail>(queryKey)
            if (previousData) {
                queryClient.setQueryData<ResponseMagazineDetail>(queryKey, (old) => {
                    if (!old) return old
                    return {
                        ...old,
                        // 하트 수 계산 및 상태 반전
                        likeCount: old.isLiked ? (old.likeCount || 0) - 1 : (old.likeCount || 0) + 1,
                        isLiked: !old.isLiked,
                    }
                })
            }
            return { previousData, queryKey }
        },
        onError: (err, _magazineId, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(context.queryKey, context.previousData)
            }
            console.error('매거진 하트 누르기 실패:', err)
        },
        onSettled: (_data, _error, _magazineId, context) => {
            if (context?.queryKey) {
                queryClient.invalidateQueries({ queryKey: context.queryKey })
            }
        },
    })
}

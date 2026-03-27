import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMagazine } from '../api/magazine'
import type { RequestDeleteMagazine, ResponseMyMagazine } from '../types/magazine'
import useToastStore from '../stores/toast'

interface UseDeleteMagazineOptions {
    onSuccess?: () => void
}

export default function useDeleteMagazine(options?: UseDeleteMagazineOptions) {
    const queryClient = useQueryClient()
    const { showToast } = useToastStore()

    return useMutation({
        mutationFn: (params: RequestDeleteMagazine) => deleteMagazine(params),
        onMutate: async ({ id }) => {
            await queryClient.cancelQueries({ queryKey: ['mymagazines'] })
            const previousData = queryClient.getQueriesData<ResponseMyMagazine>({ queryKey: ['mymagazines'] })
            queryClient.setQueriesData<ResponseMyMagazine>(
                { queryKey: ['mymagazines'] },
                (old) => {
                    if (!old) return old
                    return {
                        ...old,
                        content: old.content.filter((m) => m.magazineId !== id),
                    }
                }
            )
            return { previousData }
        },
        onSuccess: () => {
            showToast('매거진이 삭제되었습니다.')
            options?.onSuccess?.()
        },
        onError: (_, __, context) => {
            if (context?.previousData) {
                context.previousData.forEach(([queryKey, data]) => {
                    queryClient.setQueryData(queryKey, data)
                })
            }
            alert('매거진 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
            queryClient.invalidateQueries({ queryKey: ['recentsections'] })
        },
    })
}
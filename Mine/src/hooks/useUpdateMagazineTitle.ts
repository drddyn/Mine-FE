import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchMagazineTitle } from '../api/magazine'
import type { PatchMagazineTitleDto, ResponseMyMagazine, ResponseMagazineDetail } from '../types/magazine'
import useToastStore from '../stores/toast'

export default function useUpdateMagazineTitle() {
    const queryClient = useQueryClient()
    const { showToast } = useToastStore()

    return useMutation({
        mutationFn: ({ id, title, introduction }: PatchMagazineTitleDto) =>
            patchMagazineTitle({ id, title, introduction }),
        onMutate: async ({ id, title }) => {
            await queryClient.cancelQueries({ queryKey: ['mymagazines'] })
            await queryClient.cancelQueries({ queryKey: ['magazine', id] })

            const previousMyMagazines = queryClient.getQueriesData<ResponseMyMagazine>({ queryKey: ['mymagazines'] })
            const previousMagazineDetail = queryClient.getQueryData<ResponseMagazineDetail>(['magazine', id])

            queryClient.setQueriesData<ResponseMyMagazine>({ queryKey: ['mymagazines'] }, (old) => {
                if (!old) return old
                return {
                    ...old,
                    content: old.content.map((m) => (m.magazineId === id ? { ...m, title } : m)),
                }
            })

            queryClient.setQueryData<ResponseMagazineDetail>(['magazine', id], (old) => {
                if (!old) return old
                return { ...old, title }
            })

            return { previousMyMagazines, previousMagazineDetail, id }
        },
        onSuccess: () => {
            showToast('수정이 완료되었습니다.')
        },
        onError: (_, __, context) => {
            if (context?.previousMyMagazines) {
                context.previousMyMagazines.forEach(([queryKey, data]) => {
                    queryClient.setQueryData(queryKey, data)
                })
            }
            if (context?.previousMagazineDetail) {
                queryClient.setQueryData(['magazine', context.id], context.previousMagazineDetail)
            }
            alert('변경에 실패했습니다.')
        },
        onSettled: (_, __, variables) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
            queryClient.invalidateQueries({ queryKey: ['magazine', variables.id] })
            queryClient.invalidateQueries({ queryKey: ['magazinedetail', variables.id] })
        },
    })
}

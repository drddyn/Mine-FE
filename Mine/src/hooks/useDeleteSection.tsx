import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteSection } from '../api/magazine'
import type { DeleteSectionDto, ResponseMagazineDetail } from '../types/magazine'
import useToastStore from '../stores/toast'

interface UseDeleteSectionOptions {
    onSuccess?: () => void
}

export default function useDeleteSection(options?: UseDeleteSectionOptions) {
    const queryClient = useQueryClient()
    const { showToast } = useToastStore()

    return useMutation({
        mutationFn: (params: DeleteSectionDto) => deleteSection(params),
        onMutate: async ({ magazineId, sectionId }) => {
            await queryClient.cancelQueries({ queryKey: ['magazine', magazineId] })
            const previousData = queryClient.getQueryData<ResponseMagazineDetail>(['magazine', magazineId])
            queryClient.setQueryData<ResponseMagazineDetail>(['magazine', magazineId], (old) => {
                if (!old) return old
                return {
                    ...old,
                    sections: old.sections.filter((s) => s.sectionId !== sectionId),
                }
            })
            return { previousData, magazineId }
        },
        onSuccess: () => {
            showToast('섹션이 삭제되었습니다.')
            options?.onSuccess?.()
        },
        onError: (_, __, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(['magazine', context.magazineId], context.previousData)
            }
            alert('섹션 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
        onSettled: (_, __, variables) => {
            queryClient.invalidateQueries({ queryKey: ['magazine', variables.magazineId] })
            queryClient.invalidateQueries({ queryKey: ['recentsections'] })
        },
    })
}
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteParagraph } from '../api/magazine'
import type { DeleteParagraphDto, ResponseGetSectionDetail } from '../types/magazine'
import useToastStore from '../stores/toast'

export default function useDeleteParagraph() {
    const queryClient = useQueryClient()
    const { showToast } = useToastStore()

    return useMutation({
        mutationFn: (params: DeleteParagraphDto) => deleteParagraph(params),
        onMutate: async ({ magazineId, sectionId, paragraphId }) => {
            await queryClient.cancelQueries({ queryKey: ['section', magazineId, sectionId] })
            const previousData = queryClient.getQueryData<ResponseGetSectionDetail>(['section', magazineId, sectionId])
            queryClient.setQueryData<ResponseGetSectionDetail>(['section', magazineId, sectionId], (old) => {
                if (!old) return old
                return {
                    ...old,
                    paragraphs: old.paragraphs.filter((p) => p.paragraphId !== paragraphId),
                }
            })
            return { previousData, magazineId, sectionId }
        },
        onSuccess: () => {
            showToast('문단이 삭제되었습니다.')
        },
        onError: (_, __, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(['section', context.magazineId, context.sectionId], context.previousData)
            }
            alert('문단 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
        onSettled: (_, __, variables) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
            queryClient.invalidateQueries({ queryKey: ['magazinedetail', variables.magazineId] })
            queryClient.invalidateQueries({ queryKey: ['recentsections'] })
            queryClient.invalidateQueries({ queryKey: ['section', variables.magazineId, variables.sectionId] })
        },
    })
}

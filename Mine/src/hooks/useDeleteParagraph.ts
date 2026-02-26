import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteParagraph } from '../api/magazine'
import type { DeleteParagraphDto } from '../types/magazine'

export default function useDeleteParagraph() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (params: DeleteParagraphDto) => deleteParagraph(params),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines', variables.paragraphId] })
        },
        onError: (error) => {
            console.log('삭제 실패', error)
            alert('문단 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
    })
}

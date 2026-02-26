import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteSection } from '../api/magazine'
import type { DeleteSectionDto } from '../types/magazine'

export default function useDeleteSection() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (params: DeleteSectionDto) => deleteSection(params),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['magazine', variables.magazineId] })
        },
        onError: (error) => {
            console.log('삭제 실패', error)
            alert('섹션 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
    })
}

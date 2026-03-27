import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchSection } from '../api/magazine'
import type { PatchSectionDto } from '../types/magazine'
import useToastStore from '../stores/toast'

export default function usePatchSection() {
    const queryClient = useQueryClient()
    const { showToast } = useToastStore()

    return useMutation({
        mutationFn: (params: PatchSectionDto) => patchSection(params),
        onSuccess: (_, variables) => {
            showToast('수정이 완료되었습니다.')
            queryClient.invalidateQueries({ queryKey: ['magazine', variables.magazineId] })
            queryClient.invalidateQueries({ queryKey: ['section', variables.magazineId, variables.sectionId] })
        },
        onError: () => {
            alert('변경에 실패했습니다. 잠시 후 다시 시도해 주세요.')
        },
    })
}
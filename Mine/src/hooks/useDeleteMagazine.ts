import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMagazine } from '../api/magazine'
import type { RequestDeleteMagazine } from '../types/magazine'

export default function useDeleteMagazine() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (params: RequestDeleteMagazine) => deleteMagazine(params),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: (error) => {
            console.log('삭제 실패', error)
            alert('매거진 삭제에 실패했습니다. 잠시 후에 다시 시도해 주세요')
        },
    })
}

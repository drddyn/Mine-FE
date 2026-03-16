import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { RequestAddSection } from '../types/magazine'
import { postAddSection } from '../api/magazine'

export default function usePostAddSection() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ magazineId, message }: RequestAddSection) => postAddSection({ magazineId, message }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: (error) => {
            console.log('섹션 생성:', error)
            alert('섹션 생성에 실패했습니다.')
        },
    })
}

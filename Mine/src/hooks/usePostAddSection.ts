import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postAddSection } from '../api/magazine'

export default function usePostAddSection() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: postAddSection,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
            queryClient.invalidateQueries({ queryKey: ['magazinedetail', variables.magazineId] })
        },
        onError: (error) => {
            console.log('섹션 생성:', error)
            alert('섹션 생성에 실패했습니다.')
        },
    })
}

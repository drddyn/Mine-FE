import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postAddSection } from '../api/magazine'

export default function usePostAddSection() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: postAddSection,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: (error) => {
            console.log('섹션 생성:', error)
            alert('섹션 생성에 실패했습니다.')
        },
    })
}

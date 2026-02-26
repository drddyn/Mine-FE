import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postHeart } from '../api/magazine'

export default function usePostHeart() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => postHeart(id),
        onMutate: async (magazineId: number) => {
            const queryKey = ['hearts', magazineId]

            await queryClient.invalidateQueries({ queryKey })
        },
        onError: (error) => {
            console.log('매거진 하트 누르기 실패:', error)
            alert('매거진 하트 누르기에 실패했습니다.')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['hearts'] })
        },
    })
}

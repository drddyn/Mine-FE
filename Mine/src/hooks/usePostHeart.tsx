import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postHeart } from '../api/magazine'

export default function usePostHeart() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => postHeart(id),
        onSuccess: (data, magazineId) => {
            queryClient.invalidateQueries({ queryKey: ['hearts', magazineId] })
        },
        onError: (error) => {
            console.log('매거진 하트 누르기 실패:', error)
            alert('매거진 하트 누르기에 실패했습니다.')
        },
    })
}

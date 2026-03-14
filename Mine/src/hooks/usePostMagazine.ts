import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { PostMagazineDto } from '../types/magazine'
import { postMagazine } from '../api/magazine'

export default function usePostMagazine() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ topic, user_mood }: PostMagazineDto) => postMagazine({ topic, user_mood }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: (error) => {
            console.log('매거진 생성 실패:', error)
            alert('매거진 생성에 실패했습니다.')
        },
    })
}

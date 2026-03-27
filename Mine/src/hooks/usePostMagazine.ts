import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { PostMagazineDto } from '../types/magazine'
import { postMagazine } from '../api/magazine'
import { useNavigate } from 'react-router-dom'

export default function usePostMagazine() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: ({ topic, user_mood }: PostMagazineDto) => postMagazine({ topic, user_mood }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
            navigate(`/${data}`)
        },
        onError: () => {
            alert('매거진 생성에 실패했습니다.')
        },
    })
}
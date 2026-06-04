import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { PostMagazineDto } from '../types/magazine'
import { postMagazine } from '../api/magazine'
import { useToastStore } from '../stores/toastStore'

export default function usePostMagazine() {
    const queryClient = useQueryClient()
    const { setToast } = useToastStore()

    return useMutation({
        mutationFn: ({ topic, user_mood }: PostMagazineDto) => postMagazine({ topic, user_mood }),
        onMutate: () => {
            setToast('magazine', 'loading')
        },
        onSuccess: () => {
            setToast('magazine', 'success')
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: () => {
            setToast('magazine', 'error')
        },
    })
}

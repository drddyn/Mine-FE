import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { PostMagazineDto } from '../types/magazine'
import { postMagazine } from '../api/magazine'
import { useToastStore } from '../stores/toastStore'

export default function usePostMagazine() {
    const queryClient = useQueryClient()
    const { setToast } = useToastStore()

    return useMutation({
        mutationFn: async ({ topic, user_mood }: PostMagazineDto) => {
            setToast('magazine', 'loading')
            try {
                const data = await postMagazine({ topic, user_mood })
                setToast('magazine', 'success')
                return data
            } catch (error) {
                setToast('magazine', 'hidden')
                throw error
            }
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
    })
}
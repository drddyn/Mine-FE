import { useMutation, useQueryClient } from '@tanstack/react-query'
import { putInterests } from '../api/interest'

export default function usePutInterests() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (interests: string[]) => putInterests(interests),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        },
    })
}

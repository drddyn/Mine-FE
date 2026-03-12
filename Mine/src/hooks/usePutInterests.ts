import { useMutation } from '@tanstack/react-query'
import { putInterests } from '../api/interest'

export default function usePutInterests() {
    return useMutation({
        mutationFn: (interests: string[]) => putInterests(interests),
    })
}
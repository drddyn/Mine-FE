import { useMutation } from '@tanstack/react-query'
import { createMoodboard } from '../api/magazine'

export default function useCreateMoodboard() {
    return useMutation({
        mutationFn: (magazineId: number) => createMoodboard(magazineId),
    })
}
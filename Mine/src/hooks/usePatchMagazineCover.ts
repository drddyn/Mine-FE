import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchMagazineCover } from '../api/magazine'

export default function usePatchMagazineCover() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, coverImageUrl }: { id: number; coverImageUrl: string }) =>
            patchMagazineCover(id, coverImageUrl),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['magazineDetail'] })
        },
    })
}
import { useMutation } from '@tanstack/react-query'
import { patchVisibility } from '../api/user'

export default function usePatchVisibility() {
    return useMutation({
        mutationFn: (isPublic: boolean) => patchVisibility(isPublic),
    })
}
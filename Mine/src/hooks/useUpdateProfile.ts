import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchMyProfile } from '../api/user'
import useUserStore from '../stores/user'

export default function useUpdateProfile() {
    const queryClient = useQueryClient()
    const setUser = useUserStore((state) => state.setUser)
    return useMutation({
        mutationFn: patchMyProfile,
        onSuccess: (data) => {
            setUser(data)
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        },
    })
}

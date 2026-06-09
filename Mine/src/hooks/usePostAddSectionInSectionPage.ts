import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postAddSectionInSectionPage } from '../api/magazine'

export default function usePostAddSectionInSectionPage() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: postAddSectionInSectionPage,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines', 'section'] })
            queryClient.invalidateQueries({ queryKey: ['magazinedetail', variables.magazineId] })
            queryClient.invalidateQueries({ queryKey: ['section', variables.magazineId, variables.sectionId] })
        },
        onError: (error) => {
            console.log('섹션 생성:', error)
            // alert('섹션 생성에 실패했습니다.')
        },
    })
}

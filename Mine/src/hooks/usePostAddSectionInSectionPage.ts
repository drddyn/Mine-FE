import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { RequestAddSectionInSectionPage } from '../types/magazine'
import { postAddSectionInSectionPage } from '../api/magazine'

export default function usePostAddSectionInSectionPage() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ magazineId, sectionId, message }: RequestAddSectionInSectionPage) =>
            postAddSectionInSectionPage({ magazineId, sectionId, message }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines', 'sections'] })
        },
        onError: (error) => {
            console.log('섹션 생성:', error)
            alert('섹션 생성에 실패했습니다.')
        },
    })
}

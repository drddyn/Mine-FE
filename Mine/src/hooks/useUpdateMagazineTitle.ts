import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchMagazineTitle } from '../api/magazine'
import type { PatchMagazineTitleDto } from '../types/magazine'

export default function useUpdateMagazineTitle() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, title, introduction }: PatchMagazineTitleDto) =>
            patchMagazineTitle({ id, title, introduction }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mymagazines'] })
        },
        onError: (error) => {
            console.log('매거진 제목 변경 실패:', error)
            alert('매거진 제목 변경에 실패했습니다.')
        },
    })
}

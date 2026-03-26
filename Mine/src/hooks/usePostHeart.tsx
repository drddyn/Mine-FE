import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postHeart } from '../api/magazine'

export default function usePostHeart(sectionId: number) { 
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (magazineId: number) => postHeart(magazineId),
        onMutate: async (magazineId: number) => {
            // [핵심] SectionContent에서 쓰는 ['section', magId, secId]와 완벽히 일치시켜야 함
            const queryKey = ['section', magazineId, Number(sectionId)];

            await queryClient.cancelQueries({ queryKey });
            const previousData = queryClient.getQueryData(queryKey);

            queryClient.setQueryData(queryKey, (old: any) => {
                if (!old) return old;
                return {
                    ...old,
                    likeCount: old.isLiked ? (old.likeCount || 0) - 1 : (old.likeCount || 0) + 1,
                    isLiked: !old.isLiked
                };
            });
            return { previousData };
        },
        onError: (_err, magazineId, context) => {
            queryKey = ['section', magazineId, Number(sectionId)];
            queryClient.setQueryData(queryKey, context?.previousData);
        },
        onSettled: () => {
            //queryClient.invalidateQueries({ queryKey: ['section', magazineId, sectionId] });
        },
    });
}
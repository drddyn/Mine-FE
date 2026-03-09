import { useMutation } from '@tanstack/react-query'
import { uploadImage } from '../api/image'

export default function useUploadImage() {
    return useMutation({
        mutationFn: (file: File) => uploadImage(file),
    })
}
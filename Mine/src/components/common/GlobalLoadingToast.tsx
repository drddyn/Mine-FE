import LoadingToast from './LoadingToast'
import { useToastStore } from '../../stores/toastStore'

export default function GlobalLoadingToast() {
    const { status, toastType, hideToast } = useToastStore()
    
    return (
        <LoadingToast 
            status={status} 
            toastType={toastType} 
            onClose={hideToast} 
        />
    )
}
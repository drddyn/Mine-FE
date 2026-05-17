import { create } from 'zustand'
import type { ToastStatus, ToastType } from '../components/common/LoadingToast'

interface ToastState {
    status: ToastStatus
    toastType: ToastType
    setToast: (toastType: ToastType, status: ToastStatus) => void
    hideToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
    status: 'hidden',
    toastType: 'magazine',
    setToast: (toastType, status) => set({ toastType, status }),
    hideToast: () => set({ status: 'hidden' }),
}))
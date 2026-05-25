// src/stores/errorStore.ts
import { create } from 'zustand'

interface ErrorState {
    isNotFound: boolean
    setNotFound: (status: boolean) => void
}

export const useErrorStore = create<ErrorState>((set) => ({
    isNotFound: false, // 기본은 정상(false)
    setNotFound: (status) => set({ isNotFound: status }),
}))

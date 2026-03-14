import { create } from 'zustand'
import type { ResponseProfile } from '../types/user'

interface UserState {
    user: ResponseProfile | null // 초기값은 데이터가 없으므로 null
    isLoading: boolean
    setUser: (userData: ResponseProfile) => void
    clearUser: () => void
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    isLoading: false,
    setUser: (userData) => set({ user: userData }),
    clearUser: () => set({ user: null }),
}))

export default useUserStore

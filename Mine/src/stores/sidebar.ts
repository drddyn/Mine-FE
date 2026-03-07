import { create } from 'zustand'

interface SidebarState {
    isOpen: boolean
    setIsOpen: (val: boolean) => void
    toggleSidebar: () => void
}

const useSidebarStore = create<SidebarState>((set) => ({
    isOpen: false,
    setIsOpen: (val) => set({ isOpen: val }),
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSidebarStore

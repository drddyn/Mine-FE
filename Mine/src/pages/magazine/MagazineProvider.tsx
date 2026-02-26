import { createContext, useContext, type ReactNode } from 'react'
import type { ResponseMagazineDetail } from '../../types/magazine'
import useGetMagazineDetail from '../../hooks/useGetMagazineDetail'

// components/magazine/MagazineProvider.tsx
const MagazineContext = createContext<ResponseMagazineDetail | null>(null)

export function MagazineProvider({ id, children }: { id: number; children: ReactNode }) {
    const { data } = useGetMagazineDetail(id) // 이미 캐싱된 데이터를 가져옴

    return <MagazineContext.Provider value={data ?? null}>{children}</MagazineContext.Provider>
}

// 하위 어디서든 꺼내 쓰는 커스텀 훅
export const useMagazine = () => useContext(MagazineContext)

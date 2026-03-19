import { useEffect, type RefObject } from 'react'

export default function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    handler: () => void
) {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler()
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [ref, handler])
}
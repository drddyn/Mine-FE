import { useState, useRef, useEffect } from 'react'
import Search from '../../icon/search.svg?react'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = '검색어를 입력해 주세요.' }: SearchInputProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
        }
    }, [isOpen])

    return (
        <div className="flex items-center justify-end">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="검색창 열기"
                    className="text-gray-200 hover:text-gray-100 transition-colors duration-200"
                >
                    <Search className="w-6 h-6 fill-current" />
                </button>
            ) : (
                <div className={`flex items-center gap-4 w-72 h-11 px-4 py-5 rounded-[80px] border border-gray-500 bg-gray-100-op90 transition-opacity duration-200 ${isFocused ? 'opacity-100' : 'opacity-40'}`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="검색창 닫기"
                        className="shrink-0 transition-opacity duration-200"
                    >
                        <Search className="w-6 h-6 text-gray-600 fill-current" />
                    </button>
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        aria-label="검색어 입력"
                        className="flex-1 bg-transparent outline-none font-regular16 text-gray-600 placeholder:text-gray-600"
                    />
                </div>
            )}
        </div>
    )
}
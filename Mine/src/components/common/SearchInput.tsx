import { useState, useRef, useEffect } from 'react'
import Search from '../../icon/search.svg?react'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = '검색어를 입력해 주세요.' }: SearchInputProps) {
    const [isOpen, setIsOpen] = useState(false)
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
                    className="text-gray-100 opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                    <Search className="w-6 h-6 fill-current" />
                </button>
            ) : (
                <div className="flex items-center gap-4 w-72 h-11 px-4 py-5 rounded-[80px] border border-gray-500 transition-opacity duration-200  bg-gray-100-op30">
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="검색창 닫기"
                        className={`shrink-0 text-gray-100 transition-opacity duration-200 ${value ? 'opacity-100' : 'opacity-60'}`}
                    >
                        <Search className="w-6 h-6 text-gray-100 fill-current" />
                    </button>
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={() => {
                            if (!value.trim()) {
                                setIsOpen(false)
                            }
                        }}
                        placeholder={placeholder}
                        aria-label="검색어 입력"
                        className="flex-1 bg-transparent outline-none font-regular16 text-gray-100 placeholder:text-gray-600-op40"
                    />
                </div>
            )}
        </div>
    )
}

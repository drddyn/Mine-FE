import React, { useState, useRef, useEffect } from 'react'

interface LLMInputBoxProps {
    placeholder?: string
    onSend?: (value: string) => void
    isPending?: boolean
}

export default function LLMInputBox({ onSend, isPending }: LLMInputBoxProps) {
    const [text, setText] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [isExpanded, setIsExpanded] = useState(false)

    const hasText = text.trim().length > 0

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            const scrollHeight = textareaRef.current.scrollHeight
            const expanded = scrollHeight > 30
            setIsExpanded(expanded)
            textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`
        }
    }, [text])

    const handleSend = () => {
        if (text.trim() && onSend) {
            onSend(text)
            setText('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div
            className={`relative flex justify-between transition-all duration-300 ease-in-out rounded-[20px] w-157.5 min-h-13.5 py-3 pl-7 pr-3 gap-10 ${isExpanded ? 'mb-0.5 items-end' : 'items-center '} ${isFocused ? 'bg-gray-100-op90 shadow-[0_16px_32px_0_rgba(0,0,0,0.20)]' : 'bg-gray-200/90 opacity-30'} `}
        >
            <textarea
                ref={textareaRef}
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder="관심있는 주제를 입력해 주세요."
                className="w-125 min-h-6 resize-none font-regular16 leading-normal text-gray-600 outline-none placeholder-gray-600-op30 overflow-y-auto"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            />
            <button
                onClick={handleSend}
                disabled={!hasText || isPending}
                className={
                    'flex shrink-0 px-4 py-2 rounded-full items-center justify-center transition-colors duration-200 font-medium12 text-gray-100' +
                    (isExpanded ? ' mb-0.5' : '') +
                    (hasText || isFocused ? ' bg-gray-500' : ' bg-gray-500-op40') +
                    (hasText ? ' shadow-[0_4px_8px_0_rgba(0,0,0,0.12),0_16px_32px_0_rgba(0,0,0,0.20)]' : '')
                }
            >
                입력
            </button>
        </div>
    )
}

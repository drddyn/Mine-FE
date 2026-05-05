import React, { useState, useRef, useEffect } from 'react'
import Arrow from '../icon/arrow.svg?react'

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

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            const scrollHeight = textareaRef.current.scrollHeight
            const expanded = scrollHeight > 30
            setIsExpanded(expanded)
            textareaRef.current.style.height = `${Math.min(scrollHeight, 104)}px`
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

    const isTextValid = Boolean(text.trim())

    return (
        <div
            className={`relative mx-auto flex items-center transition-all duration-300 ease-in-out w-192.5 min-h-13.5 bg-gray-100-op30 border-gray-500 border py-3 px-3 ${
                isFocused ? '' : 'opacity-40'
            } ${isExpanded ? 'rounded-[40px]' : 'rounded-[80px]'}`}
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
                className="ml-3 w-full min-h-6 resize-none font-regular16 leading-normal text-gray-100 outline-none placeholder:text-gray-100/80 overflow-y-auto"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            />

            <button
                onClick={handleSend}
                disabled={!isTextValid || isPending}
                className={`flex shrink-0 w-7.5 h-7.5 rounded-full p-1.25 bg-gray-500 items-center justify-center transition-all duration-200 ${
                    !isTextValid ? 'opacity-50' : 'opacity-100'
                }`}
            >
                <Arrow className="w-3 h-3" />
            </button>
        </div>
    )
}
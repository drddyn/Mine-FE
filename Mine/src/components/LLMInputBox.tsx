import React, { useState, useRef, useEffect } from 'react'
import Arrow from '../icon/arrow.svg?react'
interface LLMInputBoxProps {
    placeholder?: string
    onSend?: (value: string) => void
}

export default function LLMInputBox({ onSend }: LLMInputBoxProps) {
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

    return (
        <div
            className={`relative mx-auto flex items-end transition-all duration-300 ease-in-out w-192.5 min-h-13.5 bg-main-light border py-3 px-7 gap-10 ${isFocused ? 'border-main-default' : 'border-main-opacity50'} ${isExpanded ? 'rounded-4xl ' : 'rounded-full'}`}
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
                className="mb-1 w-full min-h-6 resize-none bg-transparent font-regular16 leading-normal text-black-textBigTitle outline-none placeholder-black-textInTheBox overflow-y-auto"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            />

            <button
                onClick={handleSend}
                disabled={!text.trim()}
                className={`flex shrink-0 w-7.5 h-7.5 rounded-full p-1.25 focus-within:bg-main-default bg-main-opacity50 items-center justify-center transition-colors duration-200 ${!isExpanded && 'mb-0.5'}
            `}
            >
                <Arrow />
            </button>
        </div>
    )
}

import {type KeyboardEvent } from 'react'

interface MagazineInputProps {
    topic: string
    userMood: string
    onTopicChange: (value: string) => void
    onUserMoodChange: (value: string) => void
    onSubmit: () => void
}

export default function MagazineInput({
    topic,
    userMood,
    onTopicChange,
    onUserMoodChange,
    onSubmit,
}: MagazineInputProps) {
    const handleKeyDown = (e: KeyboardEvent <HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSubmit()
        }
    }

    return (
        <div className="relative mx-auto flex flex-col w-192.5">
            <div
                className="flex items-center w-full border border-b-0 border-gray-500 bg-gray-100-op30"
                style={{
                    height: '54px',
                    padding: '20px 28px',
                    borderRadius: '20px 20px 0 0', //Tailwind 미지원 값
                }}
            >
                <div className="flex flex-col flex-1">
                    <span className="text-gray-100/50 font-medium12">주제</span>
                    <input
                        value={topic}
                        onChange={(e) => onTopicChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="관심있는 주제를 입력해 주세요."
                        className="w-full bg-transparent font-regular16 text-gray-100 outline-none placeholder-gray-100/40"
                    />
                </div>
            </div>

            <div
                className="flex items-center w-full border border-gray-500 bg-gray-100-op30"
                style={{
                    height: '54px',
                    padding: '20px 12px 20px 28px',
                    borderRadius: '0 0 20px 20px', //Tailwind 미지원 값
                }}
            >
                <div className="flex flex-col flex-1">
                    <span className="text-gray-100/50 font-medium12">분위기</span>
                    <input
                        value={userMood}
                        onChange={(e) => onUserMoodChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="원하는 분위기를 입력해 주세요."
                        className="w-full bg-transparent font-regular16 text-gray-100 outline-none placeholder-gray-100/40"
                    />
                </div>
                <button
                    onClick={onSubmit}
                    disabled={!topic.trim()}
                    className={`flex shrink-0 items-center justify-center transition-all duration-200 ${
                        topic.trim() ? 'bg-gray-500-op70' : ''
                    }`}
                    style={{
                        width: '53px',
                        height: '30px',
                        padding: '8px 16px',
                        borderRadius: '40px', //Tailwind 미지원 값
                        background: topic.trim() ? undefined : 'rgba(80, 80, 80, 0.40)', //디자인 시스템 변수 미지원 값
                        boxShadow: topic.trim()
                            ? '0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 16px 32px 0 rgba(0, 0, 0, 0.20)' //디자인 시스템 변수 미지원 값
                            : 'none',
                    }}
                >
                    <span className="text-gray-100 whitespace-nowrap font-medium14">입력</span>
                </button>
            </div>
        </div>
    )
}
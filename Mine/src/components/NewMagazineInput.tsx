import { type KeyboardEvent } from 'react'

interface MagazineInputProps {
    topic: string
    userMood: string
    onTopicChange: (value: string) => void
    onUserMoodChange: (value: string) => void
    onSubmit: () => void
    isPending: boolean
}

export default function NewMagazineInput({
    topic,
    userMood,
    onTopicChange,
    onUserMoodChange,
    onSubmit,
    isPending,
}: MagazineInputProps) {
    const isTopicValid = Boolean(topic.trim())
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSubmit()
        }
    }

    return (
        <div className="relative mx-auto flex flex-col w-192.5">
            <div className="flex items-center w-full border border-b-0 border-gray-500 bg-gray-100-op30 h-13.5 py-5 px-7 rounded-t-[20px]">
                <div className="flex flex-col flex-1">
                    <span className="text-gray-100/70 font-medium12">주제</span>
                    <input
                        value={topic}
                        onChange={(e) => onTopicChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="관심있는 주제를 입력해 주세요. ex) 산리오 캐릭터들 소개해줘"
                        className="w-full bg-transparent font-regular16 text-gray-100 outline-none placeholder:text-gray-100/40"
                    />
                </div>
            </div>

            <div className="flex items-center w-full border border-gray-500 bg-gray-100-op30 h-13.5 py-5 pl-7 pr-3 rounded-b-[20px]">
                <div className="flex flex-col flex-1">
                    <span className="text-gray-100/70 font-medium12">분위기</span>
                    <input
                        value={userMood}
                        onChange={(e) => onUserMoodChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="무드보드의 분위기를 입력해 주세요. ex) 알록달록 아기자기한 분위기"
                        className="w-full bg-transparent font-regular16 text-gray-100 outline-none placeholder:text-gray-100/40"
                    />
                </div>
                <button
                    onClick={onSubmit}
                    disabled={!isTopicValid || isPending}
                    className={`flex shrink-0 w-13.25 h-7.5 px-4 py-2 rounded-[40px] items-center justify-center transition-all duration-200 cursor-pointer ${
                        isTopicValid
                            ? 'bg-gray-500-op70 shadow-[0_4px_8px_0_rgba(0,0,0,0.12),0_16px_32px_0_rgba(0,0,0,0.20)]'
                            : 'bg-gray-500-op40 shadow-none'
                    }`}
                >
                    <span
                        className={`whitespace-nowrap font-medium12 ${isTopicValid ? 'text-gray-100' : 'text-gray-100/70'}`}
                    >
                        입력
                    </span>
                </button>
            </div>
        </div>
    )
}

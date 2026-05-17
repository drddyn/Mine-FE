import useGetInterests from '../../hooks/useGetInterests'

const MAX_INTERESTS = 3

interface Props {
    interests: string[]
    onChange: (interests: string[]) => void
}

export default function InterestSettings({ interests, onChange }: Props) {
    const { data: categories, isLoading } = useGetInterests()

    const toggleInterest = (code: string) => {
        if (interests.includes(code)) {
            onChange(interests.filter((i) => i !== code))
        } else {
            if (interests.length >= MAX_INTERESTS) return
            onChange([...interests, code])
        }
    }

    if (isLoading) return <div className="text-gray-100">불러오는 중...</div>

    return (
        <div className="flex flex-wrap gap-2 overflow-y-auto custom-scrollbar max-w-116.25 max-h-40">
            {categories?.map((item) => (
                <div
                    key={item.id}
                    onClick={() => toggleInterest(item.code)}
                    className={`cursor-pointer flex items-center justify-center px-3 py-1.5 rounded-full border font-semibold16 text-base transition-colors
                        ${
                            interests.includes(item.code)
                                ? 'bg-gray-100 text-gray-600'
                                : 'border-gray-100/30 bg-transparent text-gray-100'
                        }`}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}

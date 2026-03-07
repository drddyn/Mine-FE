import useGetInterests from '../../hooks/useGetInterests'

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
            if (interests.length >= 3) return
            onChange([...interests, code])
        }
    }

    if (isLoading) return <div className="text-white">불러오는 중...</div>

    return (
        <div className="flex flex-wrap gap-2 overflow-y-auto max-h-40">
            {categories?.map((item) => (
                <div
                    key={item.id}
                    onClick={() => toggleInterest(item.code)}
                    className="cursor-pointer"
                    style={{
                        display: 'flex',
                        padding: '6px 12px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '16px',
                        borderRadius: '24px',
                        border: '1px solid',
                        borderColor: interests.includes(item.code) ? '#fff' : 'rgba(255,255,255,0.3)',
                        background: interests.includes(item.code) ? '#1111114d' : 'transparent',
                        color: '#FFF',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '140%',
                        letterSpacing: '-0.4px',
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}
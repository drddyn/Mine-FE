import Chip from './Chips'
import useGetInterests from '../../../hooks/useGetInterests'

interface Props {
    interests: string[]
    onChange: (interests: string[]) => void
}

export default function SignupInterests({ interests, onChange }: Props) {
    const { data: categories, isLoading } = useGetInterests()

    const toggleInterest = (code: string) => {
        if (interests.includes(code)) {
            onChange(interests.filter((i) => i !== code))
        } else {
            if (interests.length >= 3) return
            onChange([...interests, code])
        }
    }

    if (isLoading) {
        return <div className="text-gray-100 text-center">불러오는 중...</div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-105">
                <div className="text-gray-100 font-semibold20 mb-6">
                    관심사 <span className="font-semibold16 text-gray-100/70">최대 3개를 선택해 주세요.</span>
                </div>

                <div
                    className="overflow-y-auto max-h-105 pr-1
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-100/30
                        [&::-webkit-scrollbar-track]:bg-transparent"
                >
                    <div className="flex flex-wrap gap-x-2 gap-y-4">
                        {categories?.map((item) => (
                            <Chip
                                key={item.id}
                                title={item.name}
                                isActive={interests.includes(item.code)}
                                onClick={() => toggleInterest(item.code)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

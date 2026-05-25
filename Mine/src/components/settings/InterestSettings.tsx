import { useEffect, useRef } from 'react'
import useGetInterests from '../../hooks/useGetInterests'
import useGetMyProfile from '../../hooks/useGetMyProfile'

const MAX_INTERESTS = 3

interface Props {
    interests: string[]
    onChange: (interests: string[]) => void
}

export default function InterestSettings({ interests, onChange }: Props) {
    const { data: categories, isLoading: isCategoryLoading } = useGetInterests()
    const { data: myprofile, isLoading: isMyProfileLoading } = useGetMyProfile()
    const myInterest = myprofile?.interests

    const isInitialized = useRef(false)

    useEffect(() => {
        if (categories && myInterest && !isInitialized.current) {
            // 1. 내 관심사(한글) 배열을 돌면서
            const translatedCodes = myInterest.map((koreanName: string) => {
                // 2. 전체 카테고리에서 한글 이름이 똑같은 객체를 찾습니다.
                const matchedItem = categories.find(
                    (category: { id: number; code: string; name: string }) => category.name === koreanName
                )

                // 3. 찾았다면 영어 코드(code)를 반환하고, 혹시 못 찾았으면 일단 그대로 둡니다.
                return matchedItem ? matchedItem.code : koreanName
            })

            // 4. 번역된 영어 코드 배열(['BEAUTY', 'ACCESSORY'])을 부모에게 전달!
            onChange(translatedCodes)

            isInitialized.current = true
        }
    }, [categories, myInterest, onChange])

    const toggleInterest = (code: string) => {
        if (interests.includes(code)) {
            onChange(interests.filter((i) => i !== code))
        } else {
            if (interests.length >= MAX_INTERESTS) return
            onChange([...interests, code])
        }
    }

    if (isCategoryLoading || isMyProfileLoading)
        return (
            <div className="flex h-full items-center justify-center">
                <div className="text-gray-100 font-medium20">불러오는 중...</div>
            </div>
        )

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

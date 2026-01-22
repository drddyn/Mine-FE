import ButtonwithText from '../../../components/ButtonwithText'
import useGetInterests from '../../../hooks/useGetInterests'
import ProgressBar_Second from '../../../icon/progressbar_second.svg?react'
import Chip from './Chips'

interface SignupChecksProps {
    formData: { interests: string[] }
    onChange: (interests: string[]) => void
    onClick: () => void
    onPrev?: () => void
}

export default function SignupChecks({ formData, onPrev, onChange, onClick }: SignupChecksProps) {
    const { data: interests } = useGetInterests()

    const handleChipClick = (code: string) => {
        const prev = formData.interests
        if (prev.includes(code)) {
            onChange(prev.filter((item) => item !== code))
        } else {
            if (prev.length >= 3) {
                alert('최대 3개까지만 선택할 수 있습니다.')
                return
            }
            onChange([...prev, code])
        }
    }
    return (
        <div className="flex flex-col gap-6 items-center w-246">
            <ProgressBar_Second className="mb-10" />
            <div className="flex flex-col w-full h-95.75 pl-24 items-start gap-4">
                <div className="flex w-full items-start gap-2">
                    <div className="text-black-textSmallTitle font-semibold20">관심분야</div>
                    <div className="text-main-default font-semibold16 self-end">최대 3개를 선택해주세요.</div>
                </div>
                <div className="flex w-178.25 h-full pl-5 flex-col items-start gap-4 select-none">
                    <div className="flex flex-wrap gap-2">
                        {interests?.map((item) => (
                            <Chip
                                key={item.id}
                                title={item.name}
                                isActive={formData.interests.includes(item.code)}
                                onClick={() => handleChipClick(item.code)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-col mt-12.25 items-end gap-4 ">
                    <ButtonwithText title="이전으로" variant="white" onclick={onPrev} />
                    <ButtonwithText title="MINE 시작하기" onclick={onClick} />
                </div>
            </div>
        </div>
    )
}

import ProgressBar_Second from '../../../icon/progressbar_second.svg?react'
import type { NextbuttonProps } from '../../../types/signinTypes'
import Chip from './Chips'

export default function SigninChecks({ onPrev, onNext }: NextbuttonProps) {
    return (
        <div className="flex flex-col gap-6 items-center w-246">
            <ProgressBar_Second className="mb-12" />
            <div className="flex flex-col h-95.75 pl-24 items-start gap-4 ">
                <div className="flex w-full items-start gap-2">
                    <div className=" text-black-textSmallTitle font-semibold20">관심분야</div>
                    <div className="text-main-default font-semibold16 self-end">최대 3개를 선택해주세요.</div>
                </div>
                <div className="flex w-178.25 h-full pl-5 flex-col items-start gap-4 select-none">
                    <div className="flex gap-2">
                        <Chip title="패션" />
                        <Chip title="뷰티" />
                        <Chip title="악세사리" />
                        <Chip title="디자인" />
                        <Chip title="인테리어" />
                        <Chip title="인형" />
                    </div>
                    <div className="flex gap-2">
                        <Chip title="음악" />
                        <Chip title="미술" />
                        <Chip title="뮤지컬" />
                        <Chip title="연극" />
                        <Chip title="독서" />
                        <Chip title="OTT" />
                        <Chip title="드라마" />
                        <Chip title="영화" />
                    </div>
                    <div className="flex gap-2">
                        <Chip title="미니멀리즘" />
                        <Chip title="레트로" />
                        <Chip title="빈티지" />
                        <Chip title="사이버펑크" />
                        <Chip title="트렌드" />
                        <Chip title="날씨" />
                    </div>
                    <div className="flex gap-2">
                        <Chip title="스포츠" />
                        <Chip title="헬스" />
                        <Chip title="여행" />
                        <Chip title="캠핑" />
                        <Chip title="등산" />
                        <Chip title="환경" />
                        <Chip title="건축" />
                        <Chip title="사진" />
                    </div>
                    <div className="flex gap-2">
                        <Chip title="IT" />
                        <Chip title="전자기기" />
                        <Chip title="게임" />
                        <Chip title="동물" />
                        <Chip title="식물" />
                        <Chip title="심리" />
                        <Chip title="금융" />
                        <Chip title="재테크" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-end gap-4 ">
                <button
                    className="w-80 h-12.5 rounded-2xl border border-[#6998BB] bg-white shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-[#6998BB]"
                    onClick={onPrev}
                >
                    이전으로
                </button>
                <button
                    className="w-80 h-12.5 rounded-2xl bg-[#6998BB] shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-white"
                    onClick={onNext}
                >
                    MINE 시작하기
                </button>
            </div>
        </div>
    )
}

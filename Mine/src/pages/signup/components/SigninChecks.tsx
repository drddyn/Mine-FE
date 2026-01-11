import ProgressBar_Second from '../../../icon/progressbar_second.svg?react'
import type { NextbuttonProps } from '../../../types/signinTypes'

export default function SigninChecks({ onPrev, onNext }: NextbuttonProps) {
    return (
        <div className="flex flex-col gap-10 items-center w-246">
            <ProgressBar_Second />
            <div className="">
                <div className="flex items-start gap-2">
                    <div className=" text-black-textSmallTitle font-semibold20">관심분야</div>
                    <div className="text-main-default font-semibold16 self-end">최대 3개를 선택해주세요.</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-3.5 mr-16">
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        패션
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        스포츠
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        음악
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        인테리어
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        예술
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        자연
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        여행
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        독서
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        뷰티
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        푸드
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        감정
                    </div>
                    <div className="w-50 h-27.5 rounded-2xl border border-black-whiteBoxOutline shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-black-textInTheBox">
                        모바일
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

import InputBox from '../../../components/InputBox'
import InputBoxWithPassword from '../../../components/InputBoxWithPassword'
import ProgressBar_first from '../../../icon/progressbar_first.svg?react'
import type { NextbuttonProps } from '../../../types/signinTypes'

export default function SigninForms({ onNext }: NextbuttonProps) {
    return (
        <div className="flex flex-col items-center gap-10 w-246">
            <ProgressBar_first />
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-x-9.25 gap-y-12">
                    <InputBox
                        title="닉네임"
                        id="nickname"
                        placeholder="사용할 닉네임을 입력해 주세요.(2~6자)"
                        description="사용 가능한 닉네임입니다."
                    />
                    <InputBox
                        title="아이디"
                        id="id"
                        placeholder="사용할 아이디를 입력해주세요.(6~20자)"
                        description="사용 가능한 아이디입니다."
                    />
                    <InputBoxWithPassword
                        title="비밀번호"
                        id="password"
                        placeholder="사용할 비밀번호를 입력해주세요.(8~16자)"
                        description="사용 가능한 아이디입니다."
                    />
                    <InputBoxWithPassword
                        title="비밀번호 확인"
                        id="password check"
                        placeholder="비밀번호를 한 번 더 입력해주세요."
                        description="사용 가능한 아이디입니다."
                    />
                    <InputBox
                        title="이메일"
                        id="email"
                        placeholder="abc@gmail.com"
                        description="사용 가능한 이메일입니다."
                    />
                </div>
                <div className="w-full flex flex-col items-end gap-4 ">
                    <button className="w-80 h-12.5 rounded-2xl border border-[#6998BB] bg-white shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-[#6998BB]">
                        이전으로
                    </button>
                    <button
                        className="w-80 h-12.5 rounded-2xl bg-[#6998BB] shadow-[0_1px_4px_0_rgba(0, 0, 0, 0.25)] text-white"
                        onClick={onNext}
                    >
                        다음으로
                    </button>
                </div>
            </div>
        </div>
    )
}

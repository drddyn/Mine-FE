import InputBox from '../../../components/InputBox'
import EmailInputBox from '../../../components/EmailInputBox'

export default function FindPasswordForm() {
    return (
        <div className="flex justify-center">
            <div className="w-105 flex flex-col">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6 ">
                        <InputBox id="userId" title="아이디" placeholder="아이디를 입력해 주세요." />

                        <EmailInputBox
                            id="email"
                            title="이메일"
                            placeholder="ex) abc123"
                            description="회원가입 시 등록한 이메일을 입력해 주세요."
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <button className="w-full h-12 rounded-2xl bg-main-default hover:bg-main-emphasis text-white font-regular16">
                        비밀번호 찾기
                    </button>

                    <button className="w-full h-12 rounded-2xl border border-main-default text-main-default hover:bg-main-opacity50 font-regular16">
                        이전으로
                    </button>
                </div>
            </div>
        </div>
    )
}

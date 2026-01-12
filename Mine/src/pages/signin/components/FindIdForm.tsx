import InputBox from '../../../components/InputBox'
import EmailInputBox from '../../../components/EmailInputBox'

export default function FindIdForm() {
  return (
    <div className="flex justify-center">
      <div className="w-105 flex flex-col">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 ">
            <InputBox
              id="name"
              title="닉네임"
              placeholder="홍길동"
            />

            <EmailInputBox
              id="email"
              title="이메일"
              placeholder="ex) abc123"
              description="회원가입 시 등록한 이메일을 입력해주세요."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <button
            className="w-full h-12 rounded-2xl bg-[#6898BB] text-white font-regular16"
          >
            아이디 찾기
          </button>

          <button
            className="w-full h-12 rounded-2xl border border-[#6898BB] text-[#6898BB] font-regular16"
          >
            이전으로
          </button>
        </div>
      </div>
    </div>
  )
}

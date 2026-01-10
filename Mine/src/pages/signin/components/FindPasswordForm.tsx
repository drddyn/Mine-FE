import InputBox from '../../../components/InputBox'
import EmailInputBox from '../../../components/EmailInputBox'

export default function FindPasswordForm() {
  return (
    <div className="flex justify-center">
      {/* 🔹 기준 박스 (아이디 찾기와 동일) */}
      <div className="w-[420px] flex flex-col gap-6">
        {/* 아이디 입력 */}
        <InputBox
          id="userId"
          title="아이디"
          placeholder="아이디를 입력해주세요."
        />

        {/* 이메일 입력 */}
        <EmailInputBox
          id="email"
          title="이메일"
          description="회원가입 시 등록한 이메일을 입력해주세요."
        />

        {/* 버튼 영역 */}
        <div className="flex flex-col gap-4">
          <button
            className="
              w-full h-12
              rounded-2xl
              bg-[#6898BB]
              text-white
              font-medium16
              shadow-sm
            "
          >
            비밀번호 찾기
          </button>

          <button
            className="
              w-full h-12
              rounded-2xl
              border border-[#6898BB]
              text-[#6898BB]
              font-medium16
              shadow-sm
            "
          >
            이전으로
          </button>
        </div>
      </div>
    </div>
  )
}


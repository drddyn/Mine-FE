import InputBox from '../../../components/InputBox'
import EmailInputBox from '../../../components/EmailInputBox'

export default function FindIdForm() {
  return (
    <div className="flex justify-center">
      {/* 🔹 입력/버튼 기준 박스 */}
      <div className="w-[420px] flex flex-col gap-6">
        <InputBox
          id="name"
          title="이름"
          placeholder="이름을 입력해주세요."
        />

        <EmailInputBox
          id="email"
          title="이메일"
          placeholder="ex) abc123"
          description="회원가입 시 등록한 이메일을 입력해주세요."
/>

        {/* 🔹 버튼만 따로 감싸서 간격 조절 */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full h-12 rounded-2xl bg-[#6898BB] text-white font-medium16 shadow-sm"
          >
            아이디 찾기
          </button>

          <button
            className="w-full h-12 rounded-2xl border border-[#6898BB] text-[#6898BB] font-medium16 shadow-sm"
          >
            이전으로
          </button>
        </div>
      </div>
    </div>
  )
}

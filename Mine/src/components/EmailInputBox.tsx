import Vector from '../icon/Vector.svg?react'

interface EmailInputBoxProps {
  id: string
  title?: string
  placeholder?: string
  description?: string
  domains?: string[]
}

export default function EmailInputBox({
  id,
  title,
  placeholder = 'ex) abc123',
  description,
  domains = ['gmail.com', 'naver.com', 'daum.net'],
}: EmailInputBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* 제목 */}
      {title && (
        <div className="text-black-textSmallTitle font-semibold20">
          {title}
        </div>
      )}

      {/* 이메일 입력 영역 */}
      <div
        className="
          relative
          w-full h-12
          rounded-2xl
          border-2 border-black-whiteBoxOutline
          shadow-sm
          bg-white
          flex items-center
          px-4
        "
      >
        {/* 아이디 입력 */}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="
            flex-1
            pr-12
            outline-none
            font-medium16
            placeholder-black-textInTheBox
          "
        />

        {/* @ 중앙 고정 */}
        <span
          className="
            absolute
            left-1/2
            -translate-x-1/2
            font-medium16
            text-gray-500
            select-none
          "
        >
          @
        </span>

        {/* 도메인 선택 버튼 */}
        <div className="flex items-center gap-10">
          <select
            className="
              appearance-none
              bg-transparent
              outline-none
              font-medium16
              text-gray-500
              cursor-pointer
              pr-5
            "
          >
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          {/* SVG 화살표 */}
          <Vector className="w-3 h-3 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* 설명 */}
      {description && (
        <div className="text-black-textSmallTitle font-light14 pl-2.5">
          {description}
        </div>
      )}
    </div>
  )
}

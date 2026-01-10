import { useState } from 'react'
import FindIdForm from '../signin/components/FindIdForm'
import FindPasswordForm from '../signin/components/FindPasswordForm'

export default function FindingPage() {
  const [tab, setTab] = useState<'id' | 'password'>('id')

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[460px] flex flex-col gap-12">
        
        {/* ===== 탭 영역 ===== */}
        <div className="flex flex-col items-center gap-2">
          
          {/* 탭 버튼 */}
          <div className="flex w-[460px] px-6">
            <button
              onClick={() => setTab('id')}
              className={`
                w-[230px]
                text-center
                text-[16px]
                font-semibold
                uppercase
                transition-colors
                ${tab === 'id' ? 'text-[#6898BB]' : 'text-gray-400'
              }`}
            >
              아이디 찾기
            </button>

            <button
              onClick={() => setTab('password')}
              className={`
                w-[230px]
                text-center
                text-[16px]
                font-semibold
                uppercase
                transition-colors
                ${tab === 'password' ? 'text-[#6898BB]' : 'text-gray-400'
              }`}
            >
              비밀번호 찾기
            </button>
          </div>

          {/* 전체 바 + 선택 바 */}
          <div className="relative w-[460px] h-[4px] bg-[#A9A9A9] rounded-[15px]">
            <div
              className={`
                absolute top-0 left-0
                h-[4px] w-[230px]
                bg-[#6898BB]
                rounded-[15px]
                transition-transform duration-300
                ${tab === 'id' ? 'translate-x-0' : 'translate-x-[230px]'}
              `}
            />
          </div>
        </div>

        {/* ===== 폼 영역 ===== */}
        {tab === 'id' && <FindIdForm />}
        {tab === 'password' && <FindPasswordForm />}
      </div>
    </div>
  )
}

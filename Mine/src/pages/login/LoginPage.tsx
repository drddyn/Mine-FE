export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center font-sans">
      
      {/* 1. 뒤로가기 버튼 */}
      <div className="absolute top-5 left-5">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 group-hover:text-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      {/* 2. 중앙 컨텐츠 영역 (420px 고정) */}
      <div className="flex flex-col items-center w-[420px]">
        
        {/* 로고 */}
        <div className="mb-10">
          <svg width="50" height="50" viewBox="0 0 120 120" fill="none">
            
          </svg>
        </div>

        {/* 3. 입력창 그룹 - 입력창 안에 아이콘이 포함된 구조 */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* 아이디 입력창 */}
          <div className="w-full h-[50px] flex items-center px-4 bg-white border border-[#D9D9D9] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] focus-within:ring-1 focus-within:ring-[#6898BB]">
            {/* 사용자 아이콘 SVG */}
            <div className="mr-3 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6654 17.5V15.8333C16.6654 14.9493 16.3142 14.1014 15.6891 13.4763C15.0639 12.8512 14.2161 12.5 13.332 12.5H6.66536C5.78131 12.5 4.93346 12.8512 4.30834 13.4763C3.68322 14.1014 3.33203 14.9493 3.33203 15.8333V17.5" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0013 9.16667C11.8423 9.16667 13.3346 7.67428 13.3346 5.83333C13.3346 3.99238 11.8423 2.5 10.0013 2.5C8.16035 2.5 6.66797 3.99238 6.66797 5.83333C6.66797 7.67428 8.16035 9.16667 10.0013 9.16667Z" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input type="text" placeholder="아이디" className="w-full text-[15px] outline-none border-none focus:ring-0 placeholder-gray-400 bg-transparent"/>
          </div>

          {/* 비밀번호 입력창 */}
          <div className="w-full h-[50px] flex items-center px-4 bg-white border border-[#D9D9D9] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] focus-within:ring-1 focus-within:ring-[#6898BB]">
            {/* 자물쇠 모양 SVG */}
            <div className="mr-3 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="#A9A9A9" strokeWidth="1.5" />
                <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <input type="password" placeholder="비밀번호" className="w-full text-[15px] outline-none border-none focus:ring-0 placeholder-gray-400 bg-transparent"/>
          </div>
        </div>

        {/* 4. 아이디/비밀번호 찾기 */}
        <div className="w-full flex justify-end mt-2 mb-8">
          <button className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
            아이디/비밀번호 찾기
          </button>
        </div>

        {/* 5. 버튼 그룹 */}
        <div className="flex flex-col gap-4 w-full">
          <button type="button" className="w-full h-[50px] bg-[#6898BB] text-white text-[16px] font-medium rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:brightness-105 active:scale-[0.99] transition-all">
            로그인
          </button>
          <button type="button" className="w-full h-[50px] bg-white text-[#6898BB] text-[16px] font-medium border border-[#6898BB] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:bg-gray-50 active:scale-[0.99] transition-all">
            회원가입
          </button>
        </div>

      </div>
    </div>
  );
}
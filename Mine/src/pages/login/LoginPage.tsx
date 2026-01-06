import Minelogo from "../../icon/minelogo.svg?react";
import Frame from "../../icon/Frame.svg?react";
import User from "../../icon/user.svg?react";
import Lock from "../../icon/lock.svg?react";


export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center font-sans">
      
      <div className="absolute top-5 left-5">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
          <Frame className="w-[28px] h-[28px] text-gray-400 group-hover:text-black" />
        </button>
      </div>

      <div className="flex flex-col items-center w-[420px]">
        
        <div className="mb-10 flex justify-center">
          <Minelogo className="w-[100px] h-[100px] aspect-square" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          
          <div className="w-full h-[50px] flex items-center px-4 bg-white border border-[#D9D9D9] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] focus-within:ring-1 focus-within:ring-[#6898BB]">
            <div className="mr-3 flex-shrink-0">
                <User className="w-[20px] h-[20px]" />
            </div>

            <input
              type="text"
              placeholder="아이디"
              className="w-full text-[15px] outline-none border-none focus:ring-0 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="w-full h-[50px] flex items-center px-4 bg-white border border-[#D9D9D9] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] focus-within:ring-1 focus-within:ring-[#6898BB]">
            <div className="mr-3 flex-shrink-0">
                <Lock className="w-[20px] h-[20px]" />
            </div>

            <input
              type="password"
              placeholder="비밀번호"
              className="w-full text-[15px] outline-none border-none focus:ring-0 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className="w-full flex justify-end mt-2 mb-8">
          <button className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
            아이디/비밀번호 찾기
          </button>
        </div>


        <div className="flex flex-col gap-4 w-full">
          <button
            type="button"
            className="w-full h-[50px] bg-[#6898BB] text-white text-[16px] font-medium rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:brightness-105 active:scale-[0.99] transition-all"
          >
            로그인
          </button>
          <button
            type="button"
            className="w-full h-[50px] bg-white text-[#6898BB] text-[16px] font-medium border border-[#6898BB] rounded-[15px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:bg-gray-50 active:scale-[0.99] transition-all"
          >
            회원가입
          </button>
        </div>

      </div>
    </div>
  );
}

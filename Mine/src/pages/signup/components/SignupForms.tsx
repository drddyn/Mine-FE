import type { ChangeEvent } from "react";

interface SignupFormsProps {
  formData: {
    nickname: string;
    id: string;
    password: string;
    passwordCheck: string;
    email: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupForms({ formData, onChange }: SignupFormsProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-105 flex flex-col gap-10">
        <div>
          <div className="text-white/80 font-semibold20 mb-2">아이디</div>
          <input
            id="id"
            value={formData.id}
            onChange={onChange}
            placeholder="abcdef1234"
            className="w-full h-12 px-4.5 rounded-[15px]
                       bg-white/30 border border-black-textMain text-white
                       placeholder:text-white/60 outline-none focus:border-white"
          />
          <div className="pl-2 mt-2 text-white/45 font-light14">영어, 숫자 포함 6~20자</div>
        </div>

        <div>
          <div className="text-white/80 font-semibold20 mb-2">닉네임</div>
          <input
            id="nickname"
            value={formData.nickname}
            onChange={onChange}
            placeholder="홍길동"
            className="w-full h-12 px-4.5 rounded-[15px]
                       bg-white/30 border border-black-textMain text-white
                       placeholder:text-white/60 outline-none focus:border-white"
          />
          <div className="pl-2 mt-2 text-white/45 font-light14">한글 2~6자</div>
        </div>

        <div>
          <div className="text-white/80 font-semibold20 mb-2">이메일</div>
          <input
            id="email"
            value={formData.email}
            onChange={onChange}
            placeholder="abc123@gmail.com"
            className="w-full h-12 px-4.5 rounded-[15px]
                       bg-white/30 border border-black-textMain text-white
                       placeholder:text-white/60 outline-none focus:border-white"
          />
        </div>
      </div>
    </div>
  );
}
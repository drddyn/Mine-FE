import { useState } from "react";

export default function ProfileSettings() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center ml-10">
        <div className="shrink-0 -translate-y-4">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-25 h-25 rounded-full object-cover"
          />
        </div>

        <div className="absolute top-12 bottom-12 left-94 w-69 flex flex-col gap-4 justify-center">

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">닉네임</span>
            <span className="text-black-textMain font-medium16">홍길동</span>
          </div>

          <div className="flex items-center">
            <span className="w-20  text-black-textSmallTitle font-light14 shrink-0">아이디</span>
            <span className="text-black-textMain font-medium16">thisisID</span>
          </div>

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">비밀번호</span>
            <span className="text-black-textMain font-medium16">word******</span>
          </div>

          <div className="flex items-center">
            <span className="w-20  text-black-textSmallTitle font-light14 shrink-0">이메일</span>
            <span className="text-black-textMain font-medium16">
              ahdfahe@gmail.com
            </span>
          </div>

          <div className="flex items-center">
            <span className="w-20 text-black-textSmallTitle font-light14 shrink-0">프로필 공개</span>
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                isPublic ? "bg-boldborder" : "bg-black-whiteBoxOutline"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                  isPublic ? "left-5.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

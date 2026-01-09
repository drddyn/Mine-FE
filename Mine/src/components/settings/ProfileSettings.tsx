import { useState } from "react";

export default function ProfileSettings() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="flex flex-col h-full w-full">
      {/* ===== 중앙 영역 ===== */}
      <div className="flex flex-col justify-center flex-1">
        {/* profile-image-wrapper */}
        <div className="relative flex justify-center mb-[32px]">
          <img
            src="https://i.pravatar.cc/120"
            alt="profile"
            className="w-[120px] h-[120px] rounded-full object-cover"
          />

          {/* camera-icon */}
          <div
            className="
              absolute
              bottom-[4px]
              right-[calc(50%-60px)]
              bg-white
              rounded-full
              p-[6px]
              shadow-[0_2px_6px_rgba(0,0,0,0.15)]
              flex
              items-center
              justify-center
              cursor-pointer
              transition
              active:scale-95
              active:shadow-[0_1px_3px_rgba(0,0,0,0.25)]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
            >
              <path
                d="M8.33333 12.0833C9.375 12.0833 10.2604 11.7188 10.9896 10.9896C11.7187 10.2604 12.0833 9.375 12.0833 8.33333C12.0833 7.29167 11.7187 6.40625 10.9896 5.67708C10.2604 4.94792 9.375 4.58333 8.33333 4.58333C7.29167 4.58333 6.40625 4.94792 5.67708 5.67708C4.94792 6.40625 4.58333 7.29167 4.58333 8.33333C4.58333 9.375 4.94792 10.2604 5.67708 10.9896C6.40625 11.7188 7.29167 12.0833 8.33333 12.0833ZM8.33333 10.4167C7.75 10.4167 7.25694 10.2153 6.85417 9.8125C6.45139 9.40972 6.25 8.91667 6.25 8.33333C6.25 7.75 6.45139 7.25694 6.85417 6.85417C7.25694 6.45139 7.75 6.25 8.33333 6.25C8.91667 6.25 9.40972 6.45139 9.8125 6.85417C10.2153 7.25694 10.4167 7.75 10.4167 8.33333C10.4167 8.91667 10.2153 9.40972 9.8125 9.8125C9.40972 10.2153 8.91667 10.4167 8.33333 10.4167ZM1.66667 15C1.20833 15 0.815972 14.8368 0.489583 14.5104C0.163194 14.184 0 13.7917 0 13.3333V3.33333C0 2.875 0.163194 2.48264 0.489583 2.15625C0.815972 1.82986 1.20833 1.66667 1.66667 1.66667H4.29167L5.83333 0H10.8333L12.375 1.66667H15C15.4583 1.66667 15.8507 1.82986 16.1771 2.15625C16.5035 2.48264 16.6667 2.875 16.6667 3.33333V13.3333C16.6667 13.7917 16.5035 14.184 16.1771 14.5104C15.8507 14.8368 15.4583 15 15 15H1.66667ZM1.66667 13.3333H15V3.33333H11.625L10.1042 1.66667H6.5625L5.04167 3.33333H1.66667V13.3333Z"
                fill="#6898BB"
              />
            </svg>
          </div>
        </div>

        {/* profile-info-grid */}
        <div
          className="
            grid
            grid-cols-[150px_1fr]
            gap-y-[20px]
            gap-x-[40px]
            px-[40px]
          "
        >
          <span className="text-[#545156] text-[14px]">이름</span>
          <span className="text-[#111827] text-[17px] font-semibold">홍길동</span>

          <span className="text-[#545156] text-[14px]">아이디</span>
          <span className="text-[#111827] text-[17px] font-semibold">honggildong</span>

          <span className="text-[#545156] text-[14px]">비밀번호</span>
          <span className="text-[#111827] text-[17px] font-semibold">mary*******</span>

          <span className="text-[#545156] text-[14px]">이메일</span>
          <span className="text-[#111827] text-[17px] font-semibold">test@gmail.com</span>

          <span className="text-[#545156] text-[14px]">프로필 공개</span>
          <div
            onClick={() => setIsPublic(!isPublic)}
            className={`w-[48px] h-[24px] rounded-[12px] relative cursor-pointer transition ${
              isPublic ? "bg-[#6b8fb3]" : "bg-[#ccc]"
            }`}
          >
            <div
              className={`w-[20px] h-[20px] bg-white rounded-full absolute top-[2px] left-[2px] transition ${
                isPublic ? "translate-x-[24px]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* ===== 하단 버튼 ===== */}
      <div className="mt-auto flex justify-end gap-[12px] px-[40px] py-[32px]">
        <button className="w-[160px] h-[50px] 
        rounded-[15px] border 
        border-[#6898BB] bg-white text-[#6898BB] 
        text-[15px] shadow
        transition
        transform
        hover:-translate-y-[1px]">
          수정
        </button>
        <button className="w-[160px] h-[50px] rounded-[15px] bg-[#6898BB] text-white text-[15px] shadow">
          저장
        </button>
      </div>
    </div>
  );
}

export default function ScreenSettings() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[760px]">

        <div className="grid grid-cols-[1fr_1px_1fr] gap-x-12">

          {/* ===== Row 1 ===== */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[22px] font-semibold mb-2">
              새로운 무드보드 생성
            </h3>
            <p className="text-[15px] text-gray-600 whitespace-nowrap">
              현재와 다른 무드보드를 생성하여 테마를 변경합니다.
            </p>
          </div>

          {/* 중앙선 */}
          <div className="bg-gray-200" />

          {/* 버튼 */}
          <div className="flex items-center justify-start">
            <button
              className="
                w-[220px] h-[50px]
                flex items-center justify-center gap-[6px]
                bg-[#6B8FB3] text-white
                rounded-[12px]
                text-[14px]
                shadow
                hover:bg-[#5A7FA0]
                transition
              "
            >
              {/* 🔁 무드보드 재생성 아이콘 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
              >
                <path
                  d="M7.5 17.5C6.45833 17.5 5.48264 17.3021 4.57292 16.9062C3.66319 16.5104 2.87153 15.9757 2.19792 15.3021C1.52431 14.6285 0.989583 13.8368 0.59375 12.9271C0.197917 12.0174 0 11.0417 0 10H1.66667C1.66667 11.625 2.23264 13.0035 3.36458 14.1354C4.49653 15.2674 5.875 15.8333 7.5 15.8333C9.125 15.8333 10.5035 15.2674 11.6354 14.1354C12.7674 13.0035 13.3333 11.625 13.3333 10C13.3333 8.375 12.7674 6.99653 11.6354 5.86458C10.5035 4.73264 9.125 4.16667 7.5 4.16667H7.375L8.66667 5.45833L7.5 6.66667L4.16667 3.33333L7.5 0L8.66667 1.20833L7.375 2.5H7.5C8.54167 2.5 9.51736 2.69792 10.4271 3.09375C11.3368 3.48958 12.1285 4.02431 12.8021 4.69792C13.4757 5.37153 14.0104 6.16319 14.4062 7.07292C14.8021 7.98264 15 8.95833 15 10C15 11.0417 14.8021 12.0174 14.4062 12.9271C14.0104 13.8368 13.4757 14.6285 12.8021 15.3021C12.1285 15.9757 11.3368 16.5104 10.4271 16.9062C9.51736 17.3021 8.54167 17.5 7.5 17.5Z"
                  fill="white"
                />
              </svg>

              무드보드 재생성하기
            </button>
          </div>

          {/* 간격 */}
          <div className="col-span-3 h-[72px]" />

          {/* ===== Row 2 ===== */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[22px] font-semibold mb-2">
              내 이미지로 설정
            </h3>
            <p className="text-[15px] text-gray-600 whitespace-nowrap">
              내 컴퓨터에서 이미지를 가져와 테마를 변경합니다.
            </p>
          </div>

          {/* 중앙선 */}
          <div className="bg-gray-200" />

          {/* 버튼 */}
          <div className="flex items-center justify-start">
            <button
              className="
                w-[220px] h-[50px]
                flex items-center justify-center gap-[6px]
                bg-[#6B8FB3] text-white
                rounded-[12px]
                text-[14px]
                shadow
                hover:bg-[#5A7FA0]
                transition
              "
            >
              {/* 🖼 사진 가져오기 아이콘 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM4.16667 15.8333H15.8333V4.16667H4.16667V15.8333ZM5 14.1667H15L11.875 10L9.375 13.3333L7.5 10.8333L5 14.1667Z"
                  fill="white"
                />
              </svg>

              사진 가져오기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

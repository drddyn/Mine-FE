interface Props {
  activeTab: "profile" | "screen";
  setActiveTab: (tab: "profile" | "screen") => void;
}

export default function SettingsSidebar({ activeTab, setActiveTab }: Props) {
  return (
    <div
      /* settings-sidebar */
      className="
        w-[200px]
        min-w-[200px]
        max-w-[200px]
        shrink-0
        bg-[#F5F4ED]
        px-[20px]
        py-[32px]
        flex
        flex-col
        justify-between
        h-full
      "
    >
      {/* sidebar-section */}
      <div className="flex flex-col gap-[20px]">
        {/* sidebar-title */}
        <h2 className="text-[28px] font-semibold text-left px-[12px]">
          설정
        </h2>

        {/* menu - profile */}
        <button
          onClick={() => setActiveTab("profile")}
          className={`
            w-full
            text-left
            p-[12px]
            rounded-[8px]
            bg-transparent
            cursor-pointer
            mb-[-20px]
            transition
            ${
              activeTab === "profile"
                ? "bg-[#e6eef6] text-[#4f7ca5]"
                : "hover:bg-black/5"
            }
          `}
        >
          프로필 설정
        </button>

        {/* menu - screen */}
        <button
          onClick={() => setActiveTab("screen")}
          className={`
            w-full
            text-left
            p-[12px]
            rounded-[8px]
            bg-transparent
            cursor-pointer
            mb-[8px]
            transition
            ${
              activeTab === "screen"
                ? "bg-[#e6eef6] text-[#4f7ca5]"
                : "hover:bg-black/5"
            }
          `}
        >
          화면 설정
        </button>
      </div>

      {/* logout */}
       <div
       className="logout group mt-6 flex items-center gap-2 cursor-pointer
                  text-[#555]
                  transition-colors duration-200
                   hover:text-[#6898BB]"
      >
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-colors duration-200"
          >
            <path
             d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z"
             className="fill-[#555] group-hover:fill-[#6898BB] transition-colors duration-200"
           />
         </svg>
        </span>

        <span className="text-sm">로그아웃</span>
      </div>

    </div>
  );
}

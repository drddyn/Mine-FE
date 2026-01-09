import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import ProfileSettings from "./ProfileSettings";
import ScreenSettings from "./ScreenSettings";

interface Props {
  onClose: () => void;
}

export default function SettingsModal({ onClose }: Props) {
  const [activeTab, setActiveTab] = useState<"profile" | "screen">("profile");

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-[999]">
      <div className="w-[900px] h-[600px] bg-white rounded-[20px] overflow-hidden flex relative">
        
        {/* Sidebar */}
        <SettingsSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Content */}
        <div className="flex-1 p-[32px] relative flex flex-col justify-center">
          
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="
              absolute top-[16px] right-[16px]
              w-[36px] h-[36px] rounded-full
              flex items-center justify-center
              text-[20px]
              transition
              hover:bg-[rgba(0,0,0,0.06)]
              hover:shadow-[0_2px_6px_rgba(0,0,0,0.25)]
            "
          >
            ✕
          </button>

          {/* Tab content (중복 렌더링 ❌, 여기 한 번만) */}
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "screen" && <ScreenSettings />}

        </div>
      </div>
    </div>
  );
}

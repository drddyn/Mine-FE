import { useState } from "react";
import SettingsModal from "../../components/settings/SettingsModal";

export default function MainPage() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="text-black">
      MainPage

      {/* 임시 톱니바퀴 버튼 */}
      <button
        style={{ marginLeft: "12px" }}
        onClick={() => setOpenSettings(true)}
      >
        ⚙️
      </button>

      {openSettings && (
        <SettingsModal onClose={() => setOpenSettings(false)} />
      )}
    </div>
  );
}

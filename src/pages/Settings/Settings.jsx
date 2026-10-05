import { useState } from "react";
import EditProfile from "../../components/Settings/EditProfile";
import Preferences from "../../components/Settings/Preferences";
import Security from "../../components/Settings/Security";



const tabs = [
  "Edit Profile",
  "Preferences",
  "Security",
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Edit Profile":
        return <EditProfile />;

      case "Preferences":
        return <Preferences />;

      case "Security":
        return <Security />;

      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="w-full">
      {/* Settings Main Card */}
      <div className="w-full bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">

        {/* =========================
            SETTINGS TABS
        ========================== */}
        <div className="px-5 sm:px-8 pt-5">
          <div className="flex items-center gap-8 sm:gap-12 ">

            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative
                    shrink-0
                    px-2
                    pb-3
                    text-[12px]
                    sm:text-[14px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "text-emerald-600"
                        : "text-[#718EBF] hover:text-emerald-600"
                    }
                  `}
                >
                  {tab}

                  {/* Active Tab Indicator */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        right-0
                        bottom-[-1px]
                        h-[3px]
                        rounded-t-full
                        bg-emerald-500
                      "
                    />
                  )}
                </button>
              );
            })}

          </div>
        </div>

        {/* =========================
            TAB CONTENT
        ========================== */}
        <div className="w-full">
          {renderTabContent()}
        </div>

      </div>
    </div>
  );
}
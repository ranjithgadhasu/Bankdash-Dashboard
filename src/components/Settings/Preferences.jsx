import { useState } from "react";
import "./preferences.css";

export default function Preferences() {
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendation: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="preferences-page w-full px-5 sm:px-8 py-7 sm:py-8">

      {/* =================================
          CURRENCY & TIME ZONE
      ================================= */}
      <div className="preferences-fields grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

        {/* Currency */}
        <div className="preferences-field w-full">

          <label
            className="
              preferences-label
              block
              text-[13px]
              font-normal
              text-slate-700
              mb-1.5
            "
          >
            Currency
          </label>

          <select
            defaultValue="USD"
            className="
              preferences-select
              appearance-none
              w-full
              h-[46px]
              px-4
              rounded-[14px]
              border
              border-[#D9E4F0]
              bg-white
              text-[12px]
              font-normal
              text-[#718EBF]
              outline-none
              cursor-pointer
              transition-all
              duration-200
              focus:border-emerald-400
              focus:ring-2
              focus:ring-emerald-100
            "
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        {/* Time Zone */}
        <div className="preferences-field w-full">

          <label
            className="
              preferences-label
              block
              text-[13px]
              font-normal
              text-slate-700
              mb-1.5
            "
          >
            Time Zone
          </label>

          <select
            defaultValue="GMT-12"
            className="
              preferences-select
              appearance-none
              w-full
              h-[46px]
              px-4
              rounded-[14px]
              border
              border-[#D9E4F0]
              bg-white
              text-[12px]
              font-normal
              text-[#718EBF]
              outline-none
              cursor-pointer
              transition-all
              duration-200
              focus:border-emerald-400
              focus:ring-2
              focus:ring-emerald-100
            "
          >
            <option value="GMT-12">
              (GMT-12:00) International Date Line West
            </option>

            <option value="GMT-5">
              (GMT-05:00) Eastern Time
            </option>

            <option value="GMT">
              (GMT+00:00) Greenwich Mean Time
            </option>

            <option value="GMT+5:30">
              (GMT+05:30) India Standard Time
            </option>

            <option value="GMT+8">
              (GMT+08:00) China Standard Time
            </option>
          </select>
        </div>
      </div>

      {/* =================================
          NOTIFICATION
      ================================= */}
      <div className="preferences-notification mt-6 sm:mt-7">

        <h3
          className="
            preferences-notification-title
            text-[14px]
            sm:text-[17px]
            font-medium
            text-[#354269]
            mb-4
          "
        >
          Notification
        </h3>

        <div className="preferences-notification-list space-y-4">

          {/* Digital Currency */}
          <ToggleRow
            checked={notifications.digitalCurrency}
            onChange={() => toggleNotification("digitalCurrency")}
            label="I send or receive digital currency"
          />

          {/* Merchant Order */}
          <ToggleRow
            checked={notifications.merchantOrder}
            onChange={() => toggleNotification("merchantOrder")}
            label="I receive merchant order"
          />

          {/* Recommendation */}
          <ToggleRow
            checked={notifications.recommendation}
            onChange={() => toggleNotification("recommendation")}
            label="There are recommendation for my account"
          />

        </div>
      </div>

      {/* =================================
          SAVE BUTTON
      ================================= */}
      <div className="preferences-save-wrapper flex justify-end mt-10 sm:mt-12">

        <button
          type="button"
          className="
            preferences-save
            w-[130px]
            sm:w-[135px]
            h-[40px]
            rounded-[12px]
            bg-emerald-600
            hover:bg-emerald-700
            active:bg-emerald-800
            text-white
            text-[15px]
            font-medium
            transition-all
            duration-200
            shadow-sm
            hover:shadow-md
          "
        >
          Save
        </button>

      </div>
    </div>
  );
}

/* =========================================
   REUSABLE TOGGLE
========================================= */

function ToggleRow({ checked, onChange, label }) {
  return (
    <div className="preferences-toggle-row flex items-center gap-4">

      {/* Toggle */}
      <button
        type="button"
        onClick={onChange}
        aria-pressed={checked}
        className={`
          preferences-toggle
          relative
          shrink-0
          w-[52px]
          h-[26px]
          rounded-full
          transition-all
          duration-300
          ease-in-out
          ${checked ? "bg-emerald-500" : "bg-[#DCE8F1]"}
        `}
      >
        <span
          className={`
            preferences-toggle-circle
            absolute
            top-[3px]
            w-[20px]
            h-[20px]
            rounded-full
            bg-white
            shadow-sm
            transition-all
            duration-300
            ease-in-out
            ${checked ? "left-[29px]" : "left-[3px]"}
          `}
        />
      </button>

      {/* Label */}
      <span
        className="
          preferences-toggle-label
          text-[13px]
          sm:text-[14px]
          text-slate-700
          leading-5
        "
      >
        {label}
      </span>

    </div>
  );
}
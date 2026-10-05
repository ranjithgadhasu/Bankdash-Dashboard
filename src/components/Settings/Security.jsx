import { useState } from "react";
import "./security.css";

export default function Security() {
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="security-page w-full px-5 sm:px-8 py-7 sm:py-8">

      {/* =================================
          TWO-FACTOR AUTHENTICATION
      ================================= */}
      <div className="security-two-factor">

        <h3
          className="
            security-section-title
            text-[14px]
            sm:text-[17px]
            font-semibold
            text-[#354269]
            mb-4
          "
        >
          Two-factor Authentication
        </h3>

        <ToggleRow
          checked={twoFactor}
          onChange={() => setTwoFactor((prev) => !prev)}
          label="Enable or disable two factor authentication"
        />

      </div>

      {/* =================================
          CHANGE PASSWORD
      ================================= */}
      <div className="security-password-section mt-8 sm:mt-9">

        <h3
          className="
            security-section-title
            text-[14px]
            sm:text-[17px]
            font-medium
            text-[#354269]
            mb-4
          "
        >
          Change Password
        </h3>

        <div className="security-password-fields w-full max-w-[500px] space-y-4">

          {/* Current Password */}
          <PasswordField label="Current Password" />

          {/* New Password */}
          <PasswordField label="New Password" />

          {/* Confirm Password */}
          <PasswordField label="Confirm New Password" />

        </div>
      </div>

      {/* =================================
          SAVE BUTTON
      ================================= */}
      <div className="security-save-wrapper flex justify-end mt-8">

        <button
          type="button"
          className="
            security-save-button
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
   PASSWORD FIELD
========================================= */

function PasswordField({ label }) {
  return (
    <div className="security-password-field w-full">

      <label
        className="
          security-password-label
          block
          text-[13px]
          font-normal
          text-slate-700
          mb-1.5
        "
      >
        {label}
      </label>

      <div className="security-password-input-wrapper relative">

        <input
          type="password"
          defaultValue="password123"
          className="
            security-password-input
            w-full
            h-[46px]
            px-4
            pr-16
            rounded-[14px]
            border
            border-[#D9E4F0]
            bg-white
            text-[12px]
            text-[#718EBF]
            outline-none
            transition-all
            duration-200
            focus:border-emerald-400
            focus:ring-2
            focus:ring-emerald-100
          "
        />

      </div>
    </div>
  );
}


/* =========================================
   TOGGLE
========================================= */

function ToggleRow({ checked, onChange, label }) {
  return (
    <div className="security-toggle-row flex items-center gap-4">

      <button
        type="button"
        onClick={onChange}
        aria-pressed={checked}
        className={`
          security-toggle
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
            security-toggle-circle
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

      <span
        className="
          security-toggle-label
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
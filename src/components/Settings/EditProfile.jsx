import { Pencil, ChevronDown } from "lucide-react";
import femalemain from "../../assets/images/femalemain.png";
import "./edit.css";

export default function EditProfile() {
  return (
    <div className="edit-profile w-full px-5 sm:px-8 py-7 sm:py-8">

      <div className="edit-profile-layout grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ==============
            PROFILE IMAGE
        =============== */}
        <div className="edit-profile-image-section lg:col-span-2 flex justify-center lg:justify-start">

          <div className="edit-profile-image-wrapper relative mt-1">

            {/* Profile Image */}
            <div
              className="
                edit-profile-image
                w-[100px]
                h-[100px]
                sm:w-[110px]
                sm:h-[110px]
                rounded-full
                overflow-hidden
                bg-emerald-50
                border-4
                border-white
                shadow-sm
              "
            >
              <img
                src={femalemain}
                alt="Profile"
                className="edit-profile-image-img w-full h-full object-cover"
              />
            </div>

            {/* Edit Button */}
            <button
              type="button"
              aria-label="Edit profile picture"
              className="
                edit-profile-pencil
                absolute
                right-0
                bottom-100
                left-23
                top-15
                w-7
                h-7
                rounded-full
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                flex
                items-center
                justify-center
                border-2
                border-white
                shadow-sm
                transition-all
                duration-200
              "
            >
              <Pencil size={12} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* =================================
            PROFILE FORM
        ================================= */}
        <div className="edit-profile-form-section lg:col-span-10">

          <div className="edit-profile-form-grid grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

            {/* Your Name */}
            <FormField label="Your Name" value="Charlene Reed" />

            {/* User Name */}
            <FormField label="User Name" value="Charlene Reed" />

            {/* Email */}
            <FormField label="Email" value="charlenereed@gmail.com" />

            {/* Password */}
            <FormField label="Password" value="***********" type="password" />

            {/* Date Of Birth */}
            <SelectField label="Date of Birth" value="25 January 1990" />

            {/* Present Address */}
            <FormField
              label="Present Address"
              value="San Jose, California, USA"
            />

            {/* Permanent Address */}
            <FormField
              label="Permanent Address"
              value="San Jose, California, USA"
            />

            {/* City */}
            <FormField label="City" value="San Jose" />

            {/* Postal Code */}
            <FormField label="Postal Code" value="45962" />

            {/* Country */}
            <FormField label="Country" value="USA" />

          </div>

          {/* =================================
              SAVE BUTTON
          ================================= */}
          <div className="edit-profile-save-wrapper flex justify-end mt-6">

            <button
              type="button"
              className="
                edit-profile-save
                w-full
                sm:w-[135px]
                h-[44px]
                rounded-[12px]
                bg-emerald-600
                hover:bg-emerald-700
                active:bg-emerald-800
                text-white
                text-[13px]
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
      </div>
    </div>
  );
}

/* =========================================
   REUSABLE FORM FIELD
========================================= */

function FormField({ label, value, type = "text" }) {
  return (
    <div className="edit-profile-field w-full">

      <label
        className="
          edit-profile-label
          block
          text-[13px]
          font-normal
          text-slate-700
          mb-1.5
        "
      >
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="
          edit-profile-input
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
          placeholder:text-[#718EBF]
          outline-none
          transition-all
          duration-200
          focus:border-emerald-400
          focus:ring-2
          focus:ring-emerald-100
        "
      />
    </div>
  );
}

/* =========================================
   DATE OF BIRTH SELECT
========================================= */

function SelectField({ label, value }) {
  return (
    <div className="edit-profile-field w-full">

      <label
        className="
          edit-profile-label
          block
          text-[13px]
          font-medium
          text-slate-700
          mb-1.5
        "
      >
        {label}
      </label>

      <div className="edit-profile-select-wrapper relative">

        <select
          defaultValue={value}
          className="
            edit-profile-select
            appearance-none
            w-full
            h-[46px]
            px-4
            pr-10
            rounded-[14px]
            border
            border-[#D9E4F0]
            bg-white
            text-[12px]
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
          <option value="25 January 1990">25 January 1990</option>

          <option value="01 January 1990">01 January 1990</option>

          <option value="15 January 1990">15 January 1990</option>

          <option value="30 January 1990">30 January 1990</option>
        </select>

        <ChevronDown
          size={16}
          className="
            edit-profile-select-icon
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-[#718EBF]
            pointer-events-none
          "
        />

      </div>
    </div>
  );
}
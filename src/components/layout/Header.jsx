import { Search, Settings, Menu } from "lucide-react";
import { LuBellDot } from "react-icons/lu";
import { useLocation } from "react-router-dom";

import femalemain from "../../assets/images/femalemain.png";
import "./layout.css";

const pageTitles = {
  "/dashboard": "Overview",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/privileges": "Privileges",
  "/settings": "Settings",
};

export default function Header({ onMenuClick }) {
  const location = useLocation();

  const pageTitle = pageTitles[location.pathname] || "Overview";

  return (
    <header
      className="
        layout-top-header
        mobile-header
        h-20
        shrink-0
        bg-white
        border-b
        border-slate-200
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        lg:px-4
        xl:px-6
      "
    >
      {/* Left */}
      <div className="header-left flex min-w-0 items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="
            mobile-menu
            md:hidden
            w-10
            h-10
            shrink-0
            rounded-full
            bg-slate-100
            flex
            items-center
            justify-center
            text-slate-600
            hover:bg-emerald-50
            hover:text-emerald-600
            transition-colors
          "
        >
          <Menu size={20} />
        </button>

        {/* Page Title */}
        <h2
          className="
            mobile-page-title
            truncate
            text-[20px]
            sm:text-[22px]
            lg:text-[22px]
            xl:text-[25px]
            font-semibold
            text-slate-800
          "
        >
          {pageTitle}
        </h2>
      </div>

      {/* Right */}
      <div
        className="
          header-right
          flex
          shrink-0
          items-center
          gap-2
          sm:gap-3
          lg:gap-3
          xl:gap-4
        "
      >
        {/* Desktop Search */}
        <div
          className="
            desktop-header-search
            layout-top
            md:flex
            items-center
            bg-slate-100
            rounded-full
            px-3
            lg:px-3
            xl:px-4
            py-2
          "
        >
          <Search size={16} className="shrink-0 text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              input-width-level
              ml-2
              w-32
              lg:w-32
              xl:w-48
              bg-transparent
              outline-none
              text-xs
              xl:text-sm
              text-slate-700
              placeholder:text-slate-400
            "
          />
        </div>

        {/* Settings */}
        <button
          type="button"
          aria-label="Settings"
          className="
            header-settings
            w-9
            h-9
            lg:w-9
            lg:h-9
            xl:w-10
            xl:h-10
            rounded-full
            bg-slate-100
            flex
            items-center
            justify-center
            text-slate-600
            hover:bg-emerald-50
            hover:text-emerald-600
            transition-colors
          "
        >
          <Settings size={17} />
        </button>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="
            header-notification
            w-9
            h-9
            lg:w-9
            lg:h-9
            xl:w-10
            xl:h-10
            rounded-full
            bg-slate-100
            flex
            items-center
            justify-center
            hover:bg-emerald-50
            transition-colors
          "
        >
          <LuBellDot className="text-red-600" size={18} />
        </button>

        {/* Profile */}
        <img
          src={femalemain}
          alt="Profile"
          className="
            header-profile
            w-9
            h-9
            sm:w-10
            sm:h-10
            xl:w-11
            xl:h-11
            rounded-full
            object-cover
            shrink-0
          "
        />
      </div>

      {/* Mobile Search */}
      <div className="mobile-header-search">
        <Search
          size={16}
          className="mobile-search-icon shrink-0 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search for something"
          className="mobile-search-input"
        />
      </div>
    </header>
  );
}

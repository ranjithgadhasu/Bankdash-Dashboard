import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import creditcard from "../../assets/images/creditcard.png";
import home from "../../assets/images/Home.png";
import transfer from "../../assets/images/transfer.png";
import user from "../../assets/images/user.png";
import investment from "../../assets/images/investment.png";
import creditimg from "../../assets/images/creditimg.png";
import loan from "../../assets/images/loan.png";
import service from "../../assets/images/service.png";
import econometrics from "../../assets/images/econometrics.png";
import settingssolid from "../../assets/images/settingssolid.png";

import "./sidebar.css";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: home,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: transfer,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: user,
  },
  {
    name: "Investments",
    path: "/investments",
    icon: investment,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    icon: creditimg,
  },
  {
    name: "Loans",
    path: "/loans",
    icon: loan,
  },
  {
    name: "Services",
    path: "/services",
    icon: service,
  },
  {
    name: "My Privileges",
    path: "/privileges",
    icon: econometrics,
  },
  {
    name: "Setting",
    path: "/settings",
    icon: settingssolid,
  },
];

export default function Sidebar({ isOpen = false, onClose = () => {} }) {
  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      <div
        onClick={onClose}
        className={`
          sidebar-overlay

          fixed
          inset-0
          z-40
          bg-black/40

          md:hidden

          transition-all
          duration-300

          ${
            isOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={`
          sidebar

          fixed
          left-0
          top-0
          z-50

          w-64
          min-w-64

          md:w-[250px]
          md:min-w-[250px]

          h-screen

          bg-white
          border-r
          border-slate-200

          flex
          flex-col

          transition-transform
          duration-300
          ease-in-out

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:static
          md:z-auto
          md:min-h-screen
          md:translate-x-0
        `}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <div
          className="
            sidebar-logo

            h-20
            shrink-0

            flex
            items-center
            justify-between

            px-6

            border-b
            border-slate-100
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={creditcard}
              alt="BankDash Logo"
              className="
                sidebar-logo-icon

                w-8
                h-8
                object-contain
              "
            />

            <h1
              className="
                sidebar-logo-text

                text-2xl
                font-bold
                text-emerald-600
              "
            >
              BankDash
            </h1>
          </div>

          {/* =================================================
              MOBILE CLOSE BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="
              md:hidden

              w-9
              h-9

              rounded-full

              flex
              items-center
              justify-center

              text-slate-500

              hover:bg-emerald-50
              hover:text-emerald-600

              transition-colors
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* =====================================================
            MENU
        ====================================================== */}
        <nav
          className="
            sidebar-nav

            flex-1
            overflow-y-auto

            px-3
            py-4

            space-y-1
          "
        >
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `
                sidebar-link

                relative
                group

                flex
                items-center
                gap-3

                w-full

                px-4
                py-3

                rounded-xl

                transition-all
                duration-200

                ${isActive ? "bg-emerald-50" : "hover:bg-slate-50"}
              `}
            >
              {({ isActive }) => (
                <>
                  {/* =================================================
                      ACTIVE INDICATOR
                  ================================================== */}
                  <span
                    className={`
                      sidebar-active-indicator

                      absolute

                      left-0
                      top-1/2

                      -translate-y-1/2

                      w-[5px]
                      h-[50px]

                      rounded-r-full

                      bg-emerald-500

                      transition-opacity
                      duration-200

                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      sidebar-menu-icon

                      w-5
                      h-5

                      shrink-0

                      object-contain

                      transition-all
                      duration-200
                    "
                    style={{
                      opacity: isActive ? 1 : 0.6,

                      filter: isActive
                        ? "brightness(0) saturate(100%) invert(48%) sepia(42%) saturate(1000%) hue-rotate(110deg) brightness(92%) contrast(90%)"
                        : "none",
                    }}
                  />

                  {/* =================================================
                      TEXT
                  ================================================== */}
                  <span
                    className={`
                      sidebar-menu-text

                      text-sm

                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "font-semibold text-emerald-600"
                          : "text-slate-500 group-hover:text-emerald-600"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

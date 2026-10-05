import { Send, ChevronRight } from "lucide-react";

import user1 from "../../assets/images/userone.png";
import user2 from "../../assets/images/usertwo.png";
import user3 from "../../assets/images/userthree.png";
import "./trans.css"

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: user1,
    active: true,
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: user2,
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: user3,
  },
];

export default function TransferUser() {
  return (
    <div className="transfer-user bg-white rounded-[24px] p-8 shadow-sm border border-slate-100 pb-9">

      {/* Users */}
      <div className="transfer-users flex items-start justify-between mb-8">
        <div className="transfer-user-list flex gap-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="transfer-user-item text-center mt-3"
            >
              <img
                src={user.image}
                alt={user.name}
                className="transfer-user-image w-[72px] h-[72px] rounded-full object-cover mx-auto"
              />

              <h4
                className={`
                  transfer-user-name
                  mt-3
                  text-[16px]

                  ${
                    user.active
                      ? "font-semibold text-slate-700"
                      : "font-medium text-slate-700"
                  }
                `}
              >
                {user.name}
              </h4>

              <p
                className={`
                  transfer-user-role
                  text-[15px]
                  mt-1

                  ${
                    user.active
                      ? "text-emerald-600 font-semibold"
                      : "text-slate-400"
                  }
                `}
              >
                {user.role}
              </p>
            </div>
          ))}
        </div>

        <button className="transfer-next w-11 h-11 mt-7 rounded-full bg-emerald-50 flex items-center justify-center hover:bg-emerald-100 transition">
          <ChevronRight
            size={22}
            className="text-emerald-600"
          />
        </button>
      </div>

      {/* Amount */}
      <div className="transfer-amount flex items-center justify-between mt-4">
        <label className="transfer-label flex-1 text-[16px] text-slate-500">
          Write Amount
        </label>

        <div className="transfer-input-wrapper relative mt-6 w-[250px] h-[48px]">
          <input
            type="text"
            defaultValue="525.50"
            className="
              transfer-input
              w-full
              h-full
              rounded-full
              bg-[#EDF3F9]
              pl-6
              pr-[130px]
              text-[16px]
              font-semibold
              text-[#6B8BC7]
              outline-none
            "
          />

          <button
            className="
              transfer-send
              absolute
              right-0
              top-0
              h-[48px]
              w-[130px]
              rounded-full
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              font-semibold
              text-[16px]
              flex
              items-center
              justify-center
              gap-2
              transition
            "
          >
            Send
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
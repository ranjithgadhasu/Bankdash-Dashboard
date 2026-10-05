import depositIcon from "../../assets/images/tranlogoone.png";
import paypalIcon from "../../assets/images/tranlogtwo.png";
import dollarIcon from "../../assets/images/tranlogthree.png";

import "./bank.css"

const transactions = [
  {
    id: 1,
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    type: "debit",
    icon: depositIcon,
    bg: "bg-[#FFF3D6]",
  },
  {
    id: 2,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    type: "credit",
    icon: paypalIcon,
    bg: "bg-[#E8EEFF]",
  },
  {
    id: 3,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    type: "credit",
    icon: dollarIcon,
    bg: "bg-[#DDF7F4]",
  },
];

export default function TransactionCard() {
  return (
    <div className="transaction-card-container bg-white rounded-[24px] p-3 shadow-sm border border-slate-100">
      <div className="transaction-card-list space-y-5 ml-5">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="transaction-item flex items-center justify-between"
          >
            <div className="transaction-left flex items-center gap-4">
              <div
                className={`
                  transaction-icon
                  w-14
                  h-14
                  rounded-full
                  ${item.bg}
                  flex
                  items-center
                  justify-center
                `}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <div className="transaction-info min-w-0">
                <h4 className="transaction-title text-[16px] font-medium text-[#1F2937] leading-6">
                  {item.title}
                </h4>

                <p className="transaction-date text-[15px] font-normal text-[#7C97C8] mt-1">
                  {item.date}
                </p>
              </div>
            </div>

            <p
              className={`
                transaction-amount
                text-[16px]
                mr-20
                font-medium
                shrink-0

                ${
                  item.type === "debit"
                    ? "text-[#FF4D4F]"
                    : "text-[#14B87A]"
                }
              `}
            >
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
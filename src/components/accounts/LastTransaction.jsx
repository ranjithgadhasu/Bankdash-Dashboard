import transone from "../../assets/images/transone.png";
import transtwo from "../../assets/images/transtwo.png";
import transthree from "../../assets/images/transthree.png";
import "./lasttrans.css"

const data = [
  {
    title: "Spotify Subscription",
    type: "Shopping",
    card: "1234 ****",
    status: "Pending",
    amount: "-$150",
    date: "25 Jan 2021",
    image: transone,
    bg: "bg-emerald-100",
  },
  {
    title: "Mobile Service",
    type: "Service",
    card: "1234 ****",
    status: "Completed",
    amount: "-$340",
    date: "25 Jan 2021",
    image: transtwo,
    bg: "bg-green-100",
  },
  {
    title: "Emily Wilson",
    type: "Transfer",
    card: "1234 ****",
    status: "Completed",
    amount: "+$780",
    date: "25 Jan 2021",
    image: transthree,
    bg: "bg-teal-100",
  },
];

export default function LastTransaction() {
  return (
    <div className="last-transaction w-full">
      <h2 className="last-transaction-title text-[22px] font-semibold text-slate-800 mb-5">
        Last Transaction
      </h2>

      {/* Main Card */}
      <div className="last-transaction-card w-[850px] bg-white rounded-3xl border border-slate-100 p-4 sm:p-5 lg:p-6">
        <div className="last-transaction-list space-y-4">
          {data.map((item) => (
            <div
              key={item.title}
              className="last-transaction-item flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
            >
              {/* Left */}
              <div className="last-transaction-left flex items-center gap-3 flex-1 min-w-0">
                <div
                  className={`last-transaction-icon w-12 h-12 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="last-transaction-icon-image w-6 h-6 object-contain"
                  />
                </div>

                <div className="last-transaction-info min-w-0">
                  <h4 className="last-transaction-name text-[16px] font-medium text-slate-800 truncate">
                    {item.title}
                  </h4>

                  <p className="last-transaction-date text-[15px] font-normal text-slate-400">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="last-transaction-details grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-[16px] font-normal text-[#718EBF] md:flex-1">
                <span className="last-transaction-type">{item.type}</span>

                <span className="last-transaction-card-number">
                  {item.card}
                </span>

                <span className="last-transaction-status">{item.status}</span>

                <span
                  className={`last-transaction-amount font-semibold text-right ${
                    item.amount.startsWith("+")
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

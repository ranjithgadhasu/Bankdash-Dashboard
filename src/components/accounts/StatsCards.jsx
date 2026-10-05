import moneytag from "../../assets/images/moneytag.png";
import moneone from "../../assets/images/moneone.png";
import moneytwo from "../../assets/images/moneytwo.png";
import moneythree from "../../assets/images/moneythree.png";
import "./accounts.css"

const stats = [
  {
    title: "My Balance",
    amount: "$12,750",
    image: moneytag,
    bg: "bg-emerald-100",
  },
  {
    title: "Income",
    amount: "$5,600",
    image: moneone,
    bg: "bg-green-100",
  },
  {
    title: "Expense",
    amount: "$3,460",
    image: moneytwo,
    bg: "bg-lime-100",
  },
  {
    title: "Total Saving",
    amount: "$7,920",
    image: moneythree,
    bg: "bg-teal-100",
  },
];

export default function StatsCards() {
  return (
    <div className="stats-cards grid grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="stats-card bg-white rounded-3xl p-4 flex items-center gap-4 border border-slate-100"
        >
          {/* Image */}
          <div
            className={`stats-card-icon w-14 h-14 rounded-full ${item.bg} flex items-center justify-center`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="stats-card-image w-7 h-7 object-contain"
            />
          </div>

          {/* Text */}
          <div className="stats-card-content">
            <p className="stats-card-title text-[16px] font-normal text-slate-500">
              {item.title}
            </p>

            <h3 className="stats-card-amount text-[25px] font-semibold text-slate-800">
              {item.amount}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
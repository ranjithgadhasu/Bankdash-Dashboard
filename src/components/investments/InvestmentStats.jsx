import bagdollars from "../../assets/images/bagdollars.png";
import bagchart from "../../assets/images/bagchart.png";
import bagrepeat from "../../assets/images/bagrepeat.png";
import "./investment.css";

const stats = [
  {
    title: "Total Invested Amount",
    value: "$150,000",
    image: bagdollars,
    bg: "bg-emerald-100",
  },
  {
    title: "Number of Investments",
    value: "1,250",
    image: bagchart,
    bg: "bg-green-100",
  },
  {
    title: "Rate of Return",
    value: "+5.80%",
    image: bagrepeat,
    bg: "bg-teal-100",
  },
];

export default function InvestmentStats() {
  return (
    <div className="investment-stats grid grid-cols-1 md:grid-cols-3 gap-12">
      {stats.map((item) => (
        <div
          key={item.title}
          className="investment-stat-card bg-white rounded-3xl p-5 flex items-center gap-4 border border-slate-100 shadow-sm"
        >
          {/* Image */}
          <div
            className={`investment-stat-icon w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="investment-stat-image w-7 h-7 object-contain"
            />
          </div>

          {/* Content */}
          <div className="investment-stat-content">
            <p className="investment-stat-title text-sm text-slate-500">
              {item.title}
            </p>

            <h3 className="investment-stat-value text-2xl font-bold text-slate-800">
              {item.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
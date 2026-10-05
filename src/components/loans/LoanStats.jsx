import userloanone from "../../assets/images/userloanone.png";
import userloantwo from "../../assets/images/userloantwo.png";
import userloanthree from "../../assets/images/userloanthree.png";
import userloanfour from "../../assets/images/userloanfour.png";
import "./loans.css"

const stats = [
  {
    title: "Personal Loans",
    amount: "$50,000",
    image: userloanone,
    bg: "bg-blue-100",
  },
  {
    title: "Corporate Loans",
    amount: "$100,000",
    image: userloantwo,
    bg: "bg-orange-100",
  },
  {
    title: "Business Loans",
    amount: "$500,000",
    image: userloanthree,
    bg: "bg-pink-100",
  },
  {
    title: "Custom Loans",
    amount: "Choose Money",
    image: userloanfour,
    bg: "bg-cyan-100",
  },
];

export default function LoanStats() {
  return (
    <div className="loan-stats-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="w-full min-w-0 bg-white rounded-[22px] p-5 flex items-center gap-4 border border-slate-100 shadow-sm"
        >
          {/* Image */}
          <div
            className={`image-width-icon w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-7 h-7 object-contain"
            />
          </div>

          {/* Content */}
          <div className="min-w-0">
            <p className="loans-title text-[16px] font-normal text-[#718EBF] truncate">
              {item.title}
            </p>

            <h3 className="loans-amount text-[20px] font-semibold text-slate-800 mt-1 whitespace-nowrap">
              {item.amount}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
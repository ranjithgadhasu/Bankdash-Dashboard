import "./expensevesummary.css"
const expenseData = [
  { month: "Aug", value: 80 },
  { month: "Sep", value: 235 },
  { month: "Oct", value: 100 },
  { month: "Nov", value: 50 },
  { month: "Dec", value: 120, active: true, amount: "$12,500" },
  { month: "Jan", value: 92 },
];

export default function ExpenseSummary() {
  return (
    <div className="expense-summary bg-white rounded-[30px] p-8 w-full h-[235px] border border-slate-100 shadow-sm">
      <div className="flex items-end justify-between h-[160px]">
        {expenseData.map((item) => (
          <div
            key={item.month}
            className="flex flex-col items-center justify-end h-full relative"
          >
            {item.active && (
              <span className="absolute -top-5 text-[13px] font-bold text-[#047857]">
                {item.amount}
              </span>
            )}
            <div
              className={`expense-bar w-[42px] rounded-[10px] transition-all duration-300 ${
                item.active ? "bg-[#10B981]" : "bg-[#E8EEF4]"
              }`}
              style={{ height: `${item.value}px` }}
            />

            <span
              className={`expense-summar-card mt-3 text-[14px] ${
                item.active
                  ? "text-[#047857] font-semibold"
                  : "text-[#718EBF]"
              }`}
            >
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
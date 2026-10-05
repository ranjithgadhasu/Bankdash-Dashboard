import { 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
  import { useEffect, useState } from "react";
import "./debit.css"

const data = [
  { day: "Sat", debit: 250, credit: 420 },
  { day: "Sun", debit: 190, credit: 330 },
  { day: "Mon", debit: 180, credit: 260 },
  { day: "Tue", debit: 380, credit: 230 },
  { day: "Wed", debit: 280, credit: 390 },
  { day: "Thu", debit: 300, credit: 190 },
  { day: "Fri", debit: 320, credit: 400 },
];

export default function DebitCreditChart() {
  

const [barSize, setBarSize] = useState(20);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 375 && window.innerWidth <= 667) {
      // Mobile
      setBarSize(10);
    } else if (window.innerWidth >= 668 && window.innerWidth <= 1024) {
      // Tablet
      setBarSize(15);
    } else {
      // Desktop
      setBarSize(20);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <div className="debit-credit-chart w-[850px]">

      {/* Heading */}
      <h2 className="debit-credit-chart-title text-[22px] font-semibold text-slate-800 mb-5">
        Debit & Credit Overview
      </h2>

      {/* Card */}
      <div className="debit-credit-chart-card bg-white rounded-[28px] p-5 sm:p-6 border border-slate-100 shadow-sm">

        {/* Top Info */}
        <div className="debit-credit-chart-info flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

          <p className="debit-credit-chart-description text-[16px] font-normal text-slate-500">
            <span className="font-semibold text-slate-700">$7,560</span> Debited
            &{" "}
            <span className="font-semibold text-slate-700">$5,420</span> Credited
            in this Week
          </p>

          <div className="debit-credit-chart-legend flex items-center gap-5 text-sm">

            <div className="debit-credit-chart-legend-item flex items-center gap-2">
              <span className="debit-credit-chart-legend-dot debit-dot w-3 h-3 rounded-full bg-[#047857]" />
              <span className="debit-credit-chart-legend-text text-[16px] text-slate-500">
                Debit
              </span>
            </div>

            <div className="debit-credit-chart-legend-item flex items-center gap-2">
              <span className="debit-credit-chart-legend-dot credit-dot w-3 h-3 rounded-full bg-[#34D399]" />
              <span className="debit-credit-chart-legend-text text-[16px] text-slate-500">
                Credit
              </span>
            </div>

          </div>
        </div>

        {/* Chart */}
        <div className="debit-credit-chart-container h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barGap={10}
              barCategoryGap="28%"
              margin={{ top: 10, right: 5, left: 5, bottom: 0 }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#718EBF",
                  fontSize: 14,
                }}
              />

              <Tooltip
                cursor={false}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,.08)",
                }}
              />

              <Bar
                dataKey="debit"
                fill="#047857"
                radius={[8, 8, 8, 8]}
                barSize={barSize}
              />

              <Bar
                dataKey="credit"
                fill="#34D399"
                radius={[8, 8, 8, 8]}
                barSize={barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
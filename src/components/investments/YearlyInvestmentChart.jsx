import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./yearlyinvestment.css";

const data = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 23000 },
  { year: "2018", value: 16000 },
  { year: "2019", value: 37000 },
  { year: "2020", value: 21000 },
  { year: "2021", value: 29000 },
];

export default function YearlyInvestmentChart() {
  return (
    <div className="yearly-investment-chart w-full">
      <h2 className="yearly-investment-title text-[22px] font-semibold text-slate-800 mb-4">
        Yearly Total Investment
      </h2>

      <div className="yearly-investment-card bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm">
        <div className="yearly-investment-container h-[250px]">
          <ResponsiveContainer
            className="yearly-investment-responsive"
            width="100%"
            height="100%"
          >
            <LineChart
              className="yearly-investment-line-chart"
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                className="yearly-investment-grid"
                vertical={false}
                stroke="#DCE7F4"
                strokeDasharray="4 6"
              />

              <XAxis
                className="yearly-investment-x-axis"
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 13 }}
              />

              <YAxis
                className="yearly-investment-y-axis"
                domain={[0, 40000]}
                ticks={[0, 10000, 20000, 30000, 40000]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 13 }}
                tickFormatter={(value) =>
                  `$${value.toLocaleString()}`
                }
              />

              <Tooltip
                className="yearly-investment-tooltip"
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Investment",
                ]}
                labelStyle={{ color: "#334155" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              />

              <Line
                className="yearly-investment-line"
                type="linear"
                dataKey="value"
                stroke="#16A34A"
                strokeWidth={3}
                dot={{
                  r: 5,
                  fill: "#FFFFFF",
                  stroke: "#16A34A",
                  strokeWidth: 3,
                }}
                activeDot={{
                  r: 6,
                  fill: "#FFFFFF",
                  stroke: "#047857",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
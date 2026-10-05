import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./monthlyrevenue.css";

const data = [
  { year: "2016", value: 10000 },
  { year: "", value: 13000 },
  { year: "2017", value: 19000 },
  { year: "", value: 11000 },
  { year: "2018", value: 25000 },
  { year: "", value: 32000 },
  { year: "2019", value: 20000 },
  { year: "", value: 28000 },
  { year: "2020", value: 23000 },
  { year: "", value: 14000 },
  { year: "2021", value: 34000 },
];

export default function MonthlyRevenueChart() {
  return (
    <div className="monthly-revenue-chart w-full">
      {/* Title */}
      <h2 className="monthly-revenue-title text-[22px] font-semibold text-slate-800 mb-4">
        Monthly Revenue
      </h2>

      {/* Card */}
      <div className="monthly-revenue-card bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm">
        <div className="monthly-revenue-container h-[250px]">
          <ResponsiveContainer
            className="monthly-revenue-responsive"
            width="100%"
            height="100%"
          >
            <AreaChart
              className="monthly-revenue-area-chart"
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                className="monthly-revenue-grid"
                vertical={false}
                stroke="#DCE7F4"
                strokeDasharray="4 6"
              />

              <XAxis
                className="monthly-revenue-x-axis"
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 13 }}
              />

              <YAxis
                className="monthly-revenue-y-axis"
                domain={[0, 40000]}
                ticks={[0, 10000, 20000, 30000, 40000]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 13 }}
                tickFormatter={(v) => `$${v.toLocaleString()}`}
              />

              <Tooltip
                className="monthly-revenue-tooltip"
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue",
                ]}
                contentStyle={{
                  borderRadius: 12,
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              />

              <Area
                className="monthly-revenue-area"
                type="monotone"
                dataKey="value"
                stroke="#16A34A"
                strokeWidth={3}
                fill="transparent"
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "#FFFFFF",
                  stroke: "#14B8A6",
                  strokeWidth: 3,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

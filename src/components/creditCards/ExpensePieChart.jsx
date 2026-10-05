import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./creditCards.css";

const data = [
  {
    name: "DBL Bank",
    value: 25,
    color: "#8B5CF6",
    inner: "#7C3AED",
  },
  {
    name: "ABM Bank",
    value: 25,
    color: "#22C55E",
    inner: "#16A34A",
  },
  {
    name: "BRC Bank",
    value: 25,
    color: "#F97316",
    inner: "#EA580C",
  },
  {
    name: "MCP Bank",
    value: 25,
    color: "#06B6D4",
    inner: "#0891B2",
  },
];

export default function ExpensePieChart() {
  return (
    <div className="expense-pie-chart w-full bg-white rounded-[30px] p-4 border border-slate-100 shadow-sm">
      <div className="expense-pie-chart-container h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={58}
              outerRadius={100}
              stroke="none"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                  className="expense-pie-chart-cell"
                />
              ))}
            </Pie>

            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={30}
              outerRadius={58}
              stroke="none"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.inner}
                  className="expense-pie-chart-inner-cell"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="expense-pie-chart-legend grid grid-cols-2 gap-y-4 mt-2 px-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="expense-pie-chart-legend-item flex items-center gap-3"
          >
            <span
              className="expense-pie-chart-legend-dot w-5 h-5 rounded-full"
              style={{ backgroundColor: item.color }}
            />

            <span className="expense-pie-chart-legend-text text-[16px] font-medium text-[#718EBF]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

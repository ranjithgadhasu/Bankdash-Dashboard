import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./chart.css";

const data = [
  { day: "Sat", deposit: 240, withdraw: 480 },
  { day: "Sun", deposit: 140, withdraw: 350 },
  { day: "Mon", deposit: 270, withdraw: 330 },
  { day: "Tue", deposit: 370, withdraw: 480 },
  { day: "Wed", deposit: 250, withdraw: 160 },
  { day: "Thu", deposit: 250, withdraw: 390 },
  { day: "Fri", deposit: 340, withdraw: 390 },
];

export default function WeeklyActivityChart() {
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1023;

const barSize = isTablet ? 10 : 15;
  return (
    <div className="weekly-chart weekly-chart-responsive bg-white p-6 h-[322px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="weekly-chart-container"
      >
        <BarChart
          data={data}
          barGap={8}
          className="weekly-bar-chart"
          margin={{
            top: 20,
            right: 10,
            left: -20,
            bottom: 10,
          }}
        >
          <CartesianGrid
            className="weekly-chart-grid"
            stroke="#E8EEF5"
            vertical={false}
          />

          <XAxis
            className="weekly-chart-x-axis"
            dataKey="day"
            tick={{
              fill: "#718EBF",
              fontSize: 13,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            className="weekly-chart-y-axis"
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
            tick={{
              fill: "#718EBF",
              fontSize: 13,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            className="weekly-chart-tooltip"
            cursor={{
              fill: "rgba(16,185,129,0.06)",
            }}
            contentStyle={{
              borderRadius: 12,
              border: "none",
              boxShadow: "0 8px 30px rgba(0,0,0,.08)",
            }}
          />

          <Legend
            className="weekly-chart-legend"
            align="right"
            verticalAlign="top"
            iconType="circle"
            payload={[
              {
                value: "Deposit",
                type: "circle",
                color: "#22C55E",
              },
              {
                value: "Withdraw",
                type: "circle",
                color: "#047857",
              },
            ]}
          />

          <Bar
            className="weekly-withdraw-bar"
            dataKey="withdraw"
            name="Withdraw"
            fill="#047857"
            radius={[10, 10, 10, 10]}
            barSize={barSize}
          />

          <Bar
            className="weekly-deposit-bar"
            dataKey="deposit"
            name="Deposit"
            fill="#22C55E"
            radius={[10, 10, 10, 10]}
            barSize={barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./chart.css"

const data = [
  { month: "Jul", balance: 120 },
  { month: "Aug", balance: 280 },
  { month: "Sep", balance: 430 },
  { month: "Oct", balance: 780 },
  { month: "Nov", balance: 220 },
  { month: "Dec", balance: 560 },
  { month: "Jan", balance: 250 },
  { month: "", balance: 600 },
];

export default function BalanceHistoryChart() {
  return (
    <div className="balance-history-chart bg-white rounded-[24px] p-6 h-[280px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="balanceFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#10B981"
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor="#10B981"
                stopOpacity={0.03}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#DDE7F3"
            strokeDasharray="5 5"
            vertical
            horizontal
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#718096",
              fontSize: 13,
            }}
          />

          <YAxis
            domain={[0, 800]}
            ticks={[0, 200, 400, 600, 800]}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#718096",
              fontSize: 13,
            }}
          />

          <Tooltip
            formatter={(value) => [
              `$${value}`,
              "Balance",
            ]}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#059669"
            strokeWidth={4}
            fill="url(#balanceFill)"
            dot={false}
            activeDot={{
              r: 6,
              fill: "#059669",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"; 
import "./chart.css"

const data = [
  {
    name: "Entertainment",
    value: 30,
    color: "#065F46",
  },
  {
    name: "Bill Expense",
    value: 15,
    color: "#34D399",
  },
  {
    name: "Others",
    value: 35,
    color: "#047857",
  },
  {
    name: "Investment",
    value: 20,
    color: "#10B981",
  },
];

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  name,
}) => {
  const RADIAN = Math.PI / 180;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.58;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);

  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="expense-chart-label"
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        className="expense-chart-label-value"
        x={x}
        dy="-8"
        fontSize="18"
        fontWeight="700"
      >
        {value}%
      </tspan>

      <tspan
        className="expense-chart-label-name"
        x={x}
        dy="20"
        fontSize="12"
        fontWeight="600"
      >
        {name}
      </tspan>
    </text>
  );
};

export default function ExpenseChart() {
  return (
    <div className="expense-chart expense-chart-responsive bg-white rounded-[24px] p-4 h-[322px]">
      <ResponsiveContainer
        className="expense-chart-container"
        width="100%"
        height="100%"
      >
        <PieChart className="expense-pie-chart">
          <Pie
            className="expense-pie"
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={108}
            innerRadius={0}
            startAngle={144}
            endAngle={-216}
            paddingAngle={3}
            cornerRadius={2}
            label={renderLabel}
            labelLine={false}
          >
            {data.map((item) => (
              <Cell
                className="expense-pie-cell"
                key={item.name}
                fill={item.color}
                stroke="#FFFFFF"
                strokeWidth={4}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

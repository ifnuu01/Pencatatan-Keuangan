import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function ChartCard({ title, data, colorTitle, total }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-pointer">
      <h2 className={`text-md font-semibold mb-4 ${colorTitle}`}>{title}</h2>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.color ||
                  `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 text-xs text-gray-500">
        Total: Rp {total.toLocaleString()}
      </div>
    </div>
  );
}

export default ChartCard;

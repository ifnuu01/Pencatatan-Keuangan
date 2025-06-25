import Dashboard from "../layouts/Dashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { useChart } from "../hooks/useChart";

function Charts() {
  const { getAll } = useChart();

  //   console.log(getAll.data);

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Statistik & Grafik Keuangan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 max-w-7xl mx-auto">
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col">
            <h2 className="text-lg font-bold mb-2 text-black text-center">
              Grafik Pemasukan & Pengeluaran Bulanan
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={getAll.data?.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
                <Legend />
                <Bar
                  dataKey="pemasukan"
                  fill="#22c55e"
                  name="Pemasukan"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="pengeluaran"
                  fill="#ef4444"
                  name="Pengeluaran"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 text-red-700">
              Pengeluaran Bulan Ini (Kategori)
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={getAll.data?.pengeluaranKategori}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {getAll.data?.pengeluaranKategori.map((entry, index) => (
                    <Cell
                      key={`cell-pengeluaran-${index}`}
                      fill={
                        entry.color ||
                        Math.floor(Math.random() * 16777215).toString(16)
                      }
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 text-green-700">
              Pemasukan Bulan Ini (Kategori)
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={getAll.data?.pemasukanKategori}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {getAll.data?.pemasukanKategori.map((entry, index) => (
                    <Cell
                      key={`cell-pemasukan-${index}`}
                      fill={
                        entry.color ||
                        Math.floor(Math.random() * 16777215).toString(16)
                      }
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 text-red-700">
              Pengeluaran per Bulan
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={getAll.data?.data.map((d) => ({
                    name: d.month,
                    value: d.pengeluaran,
                  }))}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {getAll.data?.data.map((entry, index) => (
                    <Cell
                      key={`cell-pengeluaran-bulan-${index}`}
                      fill={`#${((Math.random() * 0xffffff) << 0)
                        .toString(16)
                        .padStart(6, "0")}`}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 text-green-700">
              Pemasukan per Bulan
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={getAll.data?.data.map((d) => ({
                    name: d.month,
                    value: d.pemasukan,
                  }))}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {getAll.data?.data.map((entry, index) => (
                    <Cell
                      key={`cell-pemasukan-bulan-${index}`}
                      fill={`#${((Math.random() * 0xffffff) << 0)
                        .toString(16)
                        .padStart(6, "0")}`}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col">
            <h2 className="text-lg font-bold mb-2 text-black text-center">
              Perkembangan Saldo Tiap Bulan
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart
                data={getAll.data?.data.map((d, i) => ({
                  ...d,
                  saldo: getAll.data?.data
                    .slice(0, i + 1)
                    .reduce(
                      (acc, cur) => acc + cur.pemasukan - cur.pengeluaran,
                      0
                    ),
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => `Rp ${value.toLocaleString()}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="saldo"
                  stroke="#3b82f6"
                  name="Saldo"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default Charts;

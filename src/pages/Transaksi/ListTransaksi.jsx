import Dashboard from "../../layouts/Dashboard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useTransaction } from "../../hooks/useTransaction";
import namaHari from "../../constant/namaHari";
import TransaksiCard from "../../components/TransaksiCard";

function ListTransaksi() {
  const { getAll } = useTransaction();

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const transaksiArray = getAll.data?.data || [];
  console.log(transaksiArray);

  const filteredData = transaksiArray.filter((transaksi) => {
    const transactionDate = new Date(transaksi.transaction_date);
    return (
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear
    );
  });

  const dailyMap = {};
  filteredData.forEach((item) => {
    const day = item.transaction_date.substring(0, 10);
    if (!dailyMap[day]) {
      dailyMap[day] = { day, income: 0, expense: 0 };
    }
    if (item.type === "income") {
      dailyMap[day].income += Number(item.amount);
    } else if (item.type === "expense") {
      dailyMap[day].expense += Number(item.amount);
    }
  });
  const chartData = Object.values(dailyMap).sort((a, b) =>
    a.day.localeCompare(b.day)
  );

  const width = window.innerWidth < 765 ? 300 : 650;
  const height = window.innerHeight < 300 ? 400 : 400;

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Transaksi</h1>
        <div className="bg-white shadow-lg rounded-lg h-full p-4">
          <p>Halaman pengelolaan transaksi anda</p>
          <div className="mt-4">
            <Link
              to="/transaksi/create"
              className="bg-black text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
            >
              <Icon icon="mdi:plus" className="mr-2 text-xl" />
              <span>Tambah Transaksi</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:flex gap-4 mt-4">
            <div className="order-2 lg:order-1 w-full lg:w-1/2 max-h-[550px] overflow-y-scroll overflow-hidden">
              {getAll.isPending ? (
                <div className="text-white bg-black p-4 w-full text-center rounded-lg">
                  Loading...
                </div>
              ) : getAll.isError ? (
                <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
                  <span>{getAll.error.message}</span>
                </div>
              ) : getAll.data.length === 0 ? (
                <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
                  <span>Kategori belum ada... Silahkan tambah kategori</span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <h1 className="text-gray-800">Riwayat Transaksi</h1>
                  {getAll.data.data.map((transaksi) => (
                    <TransaksiCard key={transaksi.id} transaksi={transaksi} />
                  ))}
                </div>
              )}
            </div>
            <div className="order-1 lg:order-2 shadow-md p-2 rounded-lg h-fit">
              {getAll.isPending ? (
                <div className="text-center p-4">Loading grafik...</div>
              ) : (
                <LineChart width={width} height={height} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="day"
                    label={{
                      value: "Tanggal",
                      position: "insideBottomRight",
                      offset: -5,
                    }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#ff4d4f"
                    name="Pengeluaran"
                  />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#52c41a"
                    name="Pendapatan"
                  />
                </LineChart>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default ListTransaksi;

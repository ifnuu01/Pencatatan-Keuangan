import Dashboard from "../layouts/Dashboard";
import { useDashboard } from "../hooks/useDashboard";
import TransaksiCard from "../components/TransaksiCard";
import CardSummary from "../components/CardSummary";
import ChartCard from "../components/ChartCard";

export default function Home() {
  const { getAll } = useDashboard();

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <CardSummary
            icon="mdi:cash-plus"
            label="Total Pemasukan"
            value={getAll.data?.totalPemasukan || "loading..."}
            color="text-green-600"
          />
          <CardSummary
            icon="mdi:cash-minus"
            label="Total Pengeluaran"
            value={getAll.data?.totalPengeluaran || "loading..."}
            color="text-red-600"
          />
          <CardSummary
            icon="mdi:wallet"
            label="Saldo Akhir"
            value={getAll.data?.saldo || "loading..."}
            color="text-blue-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ChartCard
            title="Pengeluaran Bulan Ini (Kategori)"
            data={getAll.data?.pengeluaranKategori || []}
            colorTitle="text-red-600"
            total={getAll.data?.totalPengeluaran || 0}
          />
          <ChartCard
            title="Pemasukan Bulan Ini (Kategori)"
            data={getAll.data?.pemasukanKategori || []}
            colorTitle="text-green-600"
            total={getAll.data?.totalPemasukan || 0}
          />
        </div>
        <div>
          <h2 className="text-md font-semibold text-gray-800 mb-4">
            Transaksi Terbaru
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          {getAll.isPending ? (
            <div className="text-white bg-black p-4 w-full text-center rounded-lg">
              Loading...
            </div>
          ) : getAll.isError ? (
            <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
              <span>{getAll.error.message}</span>
            </div>
          ) : getAll.data?.transaksiTerbaru.length === 0 ? (
            <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
              <span>Transaksi belum ada...</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {getAll.data.transaksiTerbaru.map((transaksi) => (
                <TransaksiCard key={transaksi.id} transaksi={transaksi} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Dashboard>
  );
}

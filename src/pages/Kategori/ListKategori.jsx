import { useState } from "react";
import Dashboard from "../../layouts/Dashboard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCategory } from "../../hooks/useCategory";

function ListKategori() {
  const { getAll } = useCategory();

  const [filterType, setFilterType] = useState("expense");

  const filterData = getAll.data?.data.filter(
    (item) => item.type === filterType
  );

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Kategori</h1>
        <div className="bg-white shadow-lg rounded-lg h-full p-4">
          <p>Halaman pengelolaan kategori anda</p>
          <div className="mt-4">
            <Link
              to="/kategori/create"
              className="bg-black text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
            >
              <Icon icon="mdi:plus" className="mr-2 text-xl" />
              <span>Tambah Kategori</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:flex items-center gap-4 mt-4">
            <button
              className={`px-4 py-2 rounded-lg font-semibold cursor-pointer border border-black hover:rounded-none transition-all duration-300 ${
                filterType === "expense"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilterType("expense")}
            >
              Pengeluaran
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-semibold cursor-pointer border border-black hover:rounded-none transition-all duration-300 ${
                filterType === "income"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilterType("income")}
            >
              Pendapatan
            </button>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 mt-4 flex-wrap">
            {getAll.isPending ? (
              <div className="text-white bg-black p-4 w-full text-center rounded-lg">
                Loading...
              </div>
            ) : filterData.length === 0 ? (
              <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
                <span>Kategori belum ada... Silahkan tambah kategori</span>
              </div>
            ) : (
              filterData.map((kategori) => (
                <Link
                  className={`${kategori.color} px-4 py-2 rounded-lg flex items-center justify-between gap-8 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer lg:w-62 w-full`}
                  to={`/kategori/edit/${kategori.id}`}
                  key={kategori.id}
                >
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      {kategori.name}
                    </span>
                    <span className="text-white text-lg font-bold">
                      {kategori.description}
                    </span>
                  </div>
                  <Icon icon={kategori.icon} className="text-white text-4xl" />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default ListKategori;

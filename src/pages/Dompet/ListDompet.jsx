import Dashboard from "../../layouts/Dashboard";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";
import Button from "../../components/Button";
import { useBudget } from "../../hooks/useBudget";
import ProgressBar from "../../components/ProgressBar";

function ListDompet() {
  const { getAll } = useWallet();

  const { getAll: getAllBudget } = useBudget();

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Dompet</h1>
        <div className="bg-white shadow-lg rounded-lg h-full p-4">
          <p>Halaman pengelolaan dompet anda</p>
          <div className="mt-4">
            <Link to={"/dompet/create"}>
              <Button>
                <Icon icon="mdi:plus" className="mr-2 text-xl" />
                <span>Tambah Dompet</span>
              </Button>
            </Link>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 mt-4 flex-wrap">
            {getAll.isPending ? (
              <div className="text-white bg-black p-4 w-full text-center rounded-lg">
                Loading...
              </div>
            ) : getAll.data.data.length === 0 ? (
              <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
                <span>Dompet belum ada... Silahkan tambah dompet</span>
              </div>
            ) : (
              getAll.data.data.map((wallet) => (
                <Link
                  key={wallet.id}
                  className="shadow-lg bg-gradient-to-br from-gray-400 via-white to-gray-700 px-4 py-2 rounded-lg flex items-center justify-between gap-8 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer lg:w-62 w-full"
                  to={`/dompet/edit/${wallet.id}`}
                >
                  <div className="flex flex-col">
                    <span className=" text-xs">{wallet.name}</span>
                    <span className=" text-lg font-bold">
                      Rp {wallet.balance.toLocaleString()}
                    </span>
                  </div>
                  <Icon icon="mdi:wallet" className=" text-4xl" />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="lg:px-4 py-2 ">
        <h1 className="text-2xl font-bold mb-4">Anggaran</h1>
        <div className="bg-white shadow-lg rounded-lg h-full p-4">
          <p>Halaman pengelolaan anggaran anda per kategori</p>
          <div className="mt-4">
            <Link
              to="/dompet/anggaran/create"
              className="bg-black text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
            >
              <Icon icon="mdi:plus" className="mr-2 text-xl" />
              <span>Tambah Anggaran</span>
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 mt-4 flex-wrap">
            {getAllBudget.isPending ? (
              <div className="text-white bg-black p-4 w-full text-center rounded-lg">
                Loading...
              </div>
            ) : getAllBudget.data?.data.length === 0 ? (
              <div className="bg-red-600 p-4 text-white w-full rounded-lg text-center">
                <span>Anggaran belum ada... Silahkan tambah anggaran</span>
              </div>
            ) : (
              getAllBudget.data?.data.map((item) => (
                <Link
                  key={item.id}
                  to={`/dompet/anggaran/edit/${item.id}`}
                  className="w-full"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4 hover:scale-99 border-t-2">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-bold">{item.name}</h2>
                      <div className="flex items-center gap-2">
                        <span>Tersisa : </span>
                        <span>Rp {item.remaining.toLocaleString()}</span>
                      </div>
                    </div>
                    <ProgressBar
                      total_expense={item.total_expense}
                      amount={item.amount}
                    />
                    {item.total_expense / item.amount > 1 ? (
                      <div className="text-red-600 mt-2">
                        Anggaran telah melebihi batas!
                      </div>
                    ) : item.total_expense / item.amount > 0.8 ? (
                      <div className="text-red-600 mt-2">
                        Anggaran hampir habis
                      </div>
                    ) : (
                      <div className="text-black mt-2">Anggaran masih aman</div>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default ListDompet;

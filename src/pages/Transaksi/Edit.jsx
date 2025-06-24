import { useState, useEffect } from "react";
import Dashboard from "../../layouts/Dashboard";
import InputField from "../../components/InputField";
import { Link, useParams } from "react-router-dom";
import DropdownField from "../../components/DropdownField";
import { useTransaction } from "../../hooks/useTransaction";
import { useCategory } from "../../hooks/useCategory";
import { useWallet } from "../../hooks/useWallet";
import { Icon } from "@iconify/react";

function Edit() {
  const { id } = useParams();
  const { getById, update, remove } = useTransaction();
  const getTransaction = getById(id);

  const { getAll: getAllCategories } = useCategory();
  const { getAll: getAllWallets } = useWallet();

  const [inputs, setInputs] = useState({
    wallet_id: "",
    category_id: "",
    type: "",
    amount: "",
    description: "",
  });
  console.log(inputs);

  useEffect(() => {
    getTransaction.isSuccess &&
      setInputs({
        wallet_id: getTransaction.data.data.wallet.id,
        category_id: getTransaction.data.data.category.id,
        type: getTransaction.data.data.type,
        amount: getTransaction.data.data.amount,
        description: getTransaction.data.data.description,
      });
  }, [id, getTransaction.isSuccess, getTransaction.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    update.mutate({ id, ...inputs });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    remove.mutate(id);
  };

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Edit Transaksi</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Edit Transaksi</p>
          {getTransaction.isLoading ? (
            <div className="text-white bg-black p-4 w-full text-center rounded-lg mt-4">
              Loading...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-center lg:gap-4 lg:flex-row flex-col">
                <DropdownField
                  label="Jenis Transaksi"
                  icon="mdi:cash-multiple"
                  name="type"
                  value={inputs.type}
                  onChange={(e) => {
                    setInputs({ ...inputs, type: e.target.value });
                  }}
                  options={[
                    { label: "Pengeluaran", value: "expense" },
                    { label: "Pemasukan", value: "income" },
                  ]}
                  placeholder="Pilih jenis transaksi"
                  error={update.isError && update.errors?.type}
                />
                <DropdownField
                  label="Pilih Kategori"
                  icon="mdi:folder"
                  name="category_id"
                  value={inputs.category_id}
                  onChange={(e) =>
                    setInputs({ ...inputs, category_id: e.target.value })
                  }
                  options={getAllCategories.data?.data
                    .filter((category) => category.type === inputs.type)
                    .map((category) => ({
                      label: category.name,
                      value: category.id,
                    }))}
                  placeholder="Pilih kategori"
                  error={update.isError && update.errors?.category_id}
                />
              </div>
              <div className="flex items-center lg:gap-4 lg:flex-row flex-col">
                <DropdownField
                  label="Pilih Dompet"
                  icon="mdi:wallet"
                  name="wallet_id"
                  value={inputs.wallet_id}
                  onChange={(e) =>
                    setInputs({ ...inputs, wallet_id: e.target.value })
                  }
                  options={getAllWallets.data?.data.map((wallet) => ({
                    label: wallet.name,
                    value: wallet.id,
                  }))}
                  placeholder="Pilih dompet"
                  error={update.isError && update.errors?.wallet_id}
                />
                <InputField
                  label="Jumlah Uang"
                  type="number"
                  icon="mdi:currency-usd"
                  name="amount"
                  value={inputs.amount}
                  onChange={(e) =>
                    setInputs({ ...inputs, amount: e.target.value })
                  }
                  placeholder="Masukan jumlah uang"
                  error={update.isError && update.errors?.amount}
                />
              </div>

              <InputField
                label="Deskripsi"
                icon="mdi:note-text"
                name="description"
                value={inputs.description}
                onChange={(e) =>
                  setInputs({ ...inputs, description: e.target.value })
                }
                placeholder="Masukan deskripsi"
                error={update.isError && update.errors?.description}
              />

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300"
                >
                  Hapus
                </button>
                <Link
                  to="/transaksi"
                  className="border border-black text-black px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300"
                >
                  Batal
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Dashboard>
  );
}

export default Edit;

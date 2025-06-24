import Dashboard from "../../layouts/Dashboard";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTransaction } from "../../hooks/useTransaction";
import { useCategory } from "../../hooks/useCategory";
import { useWallet } from "../../hooks/useWallet";
import DropdownField from "../../components/DropdownField";

function Create() {
  const { create } = useTransaction();
  const { getAll: getAllCategories } = useCategory();
  const { getAll: getAllWallets } = useWallet();
  const [inputs, setInputs] = useState({
    wallet_id: "",
    category_id: "",
    type: "",
    amount: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    create.mutate(inputs);
  };

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Tambah Transaksi</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Tambah Transaksi</p>
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
                error={create.isError && create.errors?.type}
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
                error={create.isError && create.errors?.category_id}
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
                error={create.isError && create.errors?.wallet_id}
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
                error={create.isError && create.errors?.amount}
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
              error={create.isError && create.errors?.description}
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-black mt-4 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
              >
                Simpan
              </button>
              <Link to="/transaksi">
                <button className="border border-black mt-4 text-black px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit">
                  Kembali
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
}

export default Create;

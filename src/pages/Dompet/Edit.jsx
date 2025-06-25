import { useState, useEffect } from "react";
import Dashboard from "../../layouts/Dashboard";
import { useParams, Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { useWallet } from "../../hooks/useWallet";

function Edit() {
  const { id } = useParams();
  const { getById, update, remove } = useWallet();
  const getWallet = getById(id);
  const [inputs, setInputs] = useState({
    name: "",
    balance: "",
  });

  useEffect(() => {
    getWallet.isSuccess &&
      setInputs({
        name: getWallet.data.data.name,
        balance: getWallet.data.data.balance,
        currency: getWallet.data.data.currency,
      });
  }, [id, getWallet.isSuccess, getWallet.data]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

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
        <h1 className="text-2xl font-bold mb-4">Edit Dompet</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Edit Dompet</p>
          {getWallet.isPending ? (
            <div className="text-white bg-black p-4 w-full text-center rounded-lg mt-4">
              Loading...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <InputField
                label="Nama Dompet"
                icon={"mdi:wallet"}
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Masukan nama dompet"
              />
              <InputField
                label="Jumlah Uang"
                icon={"mdi:money"}
                type="number"
                name="balance"
                value={inputs.balance}
                onChange={handleChange}
                placeholder="Masukan jumlah uang"
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-black mt-4 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-600 mt-4 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
                >
                  Hapus
                </button>
                <Link
                  to="/dompet"
                  className="border border-black mt-4 text-black px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
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

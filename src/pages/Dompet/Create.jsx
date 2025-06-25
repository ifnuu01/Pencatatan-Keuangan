import Dashboard from "../../layouts/Dashboard";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWallet } from "../../hooks/useWallet";

function Create() {
  const { create } = useWallet();
  //   console.log(createWallet);

  const [inputs, setInputs] = useState({
    name: "",
    balance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create.mutate(inputs);
  };

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Tambah Dompet</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Tambah Dompet</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <InputField
              label="Nama Dompet"
              icon={"mdi:wallet"}
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              error={create.isError && create.errors?.name}
              placeholder="Masukan nama dompet"
            />
            <InputField
              label="Jumlah Uang"
              icon={"mdi:money"}
              type="number"
              name="balance"
              value={inputs.balance}
              onChange={handleChange}
              error={create.isError && create.errors?.balance}
              placeholder="Masukan jumlah uang"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-black mt-4 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
              >
                Simpan
              </button>
              <Link to="/dompet">
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

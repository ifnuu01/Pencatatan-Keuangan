import Dashboard from "../../layouts/Dashboard";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownField from "../../components/DropdownField";
import IconPicker from "../../components/IconPicker";
import { useCategory } from "../../hooks/useCategory";
import { Icon } from "@iconify/react";
import ColorPicker from "../../components/ColorPicker";

function Create() {
  const { create } = useCategory();
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    icon: "",
    color: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create.mutate(inputs);
    setInputs({
      name: "",
      type: "",
      icon: "",
      color: "",
    });
  };

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Tambah Kategori</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Tambah Kategori</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <InputField
              label="Nama Kategori"
              icon={<Icon icon="mdi:folder" className="text-xl" />}
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Masukan nama kategori"
              error={create.isError && create.errors?.name}
            />
            <DropdownField
              label="Kategori"
              name="type"
              value={inputs.type}
              onChange={handleChange}
              options={[
                { label: "Pemasukan", value: "income" },
                { label: "Pengeluaran", value: "expense" },
              ]}
              placeholder="Pilih tipe kategori"
              error={create.isError && create.errors?.type}
            />
            <IconPicker
              value={inputs.icon}
              onChange={(icon) => setInputs({ ...inputs, icon })}
              error={create.isError && create.errors?.icon}
            />
            <ColorPicker
              value={inputs.color}
              onChange={(color) => setInputs({ ...inputs, color })}
              error={create.isError && create.errors?.color}
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-black mt-4 text-white px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300 flex gap-1 items-center w-fit"
              >
                Simpan
              </button>
              <Link to="/kategori">
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

import Dashboard from "../../layouts/Dashboard";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { useCategory } from "../../hooks/useCategory";
import DropdownField from "../../components/DropdownField";
import IconPicker from "../../components/IconPicker";
import ColorPicker from "../../components/ColorPicker";
import { Icon } from "@iconify/react";

function Edit() {
  const { id } = useParams();
  const { getById, update, remove } = useCategory();
  const getCategory = getById(id);

  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    icon: "",
    color: "",
  });

  useEffect(() => {
    getCategory.isSuccess &&
      setInputs({
        name: getCategory.data.data.name,
        type: getCategory.data.data.type,
        icon: getCategory.data.data.icon,
        color: getCategory.data.data.color,
      });
  }, [id, getCategory.isSuccess, getCategory.data]);

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
        <h1 className="text-2xl font-bold mb-4">Edit Kategori</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          {getCategory.isLoading ? (
            <div className="text-white bg-black p-4 w-full text-center rounded-lg mt-4">
              Loading...
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mt-4">
                <InputField
                  label="Nama Kategori"
                  icon={<Icon icon="mdi:folder" className="text-xl" />}
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                  placeholder="Masukan nama kategori"
                  error={getCategory.isError && getCategory.errors?.name}
                />
                <DropdownField
                  label="Tipe Kategori"
                  name="type"
                  value={inputs.type}
                  onChange={(type) => setInputs({ ...inputs, type })}
                  options={[
                    { value: "income", label: "Pemasukan" },
                    { value: "expense", label: "Pengeluaran" },
                  ]}
                  placeholder="Pilih tipe kategori"
                  error={getCategory.isError && getCategory.errors?.type}
                />
                <IconPicker
                  value={inputs.icon}
                  onChange={(icon) => setInputs({ ...inputs, icon })}
                  error={getCategory.isError && getCategory.errors?.icon}
                />
                <ColorPicker
                  value={inputs.color}
                  onChange={(color) => setInputs({ ...inputs, color })}
                  error={getCategory.isError && getCategory.errors?.color}
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
                    to="/kategori"
                    className="border border-black text-black px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300"
                  >
                    Batal
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Dashboard>
  );
}

export default Edit;

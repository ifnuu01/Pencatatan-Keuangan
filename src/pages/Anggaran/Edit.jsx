import { useState, useEffect } from "react";
import Dashboard from "../../layouts/Dashboard";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import InputField from "../../components/InputField";
import DropdownField from "../../components/DropdownField";
import { useBudget } from "../../hooks/useBudget";
import { useCategory } from "../../hooks/useCategory";

function Edit() {
  const { id } = useParams();
  const { getById, update, remove } = useBudget();
  const getBudget = getById(id);

  const { getAll: getAllCategories } = useCategory();

  const [inputs, setInputs] = useState({
    name: "",
    category_id: "",
    amount: 0,
    period: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    getBudget.isSuccess &&
      setInputs({
        name: getBudget.data.data.name,
        category_id: getBudget.data.data.category.id,
        amount: getBudget.data.data.amount,
        period: getBudget.data.data.period,
        start_date: getBudget.data.data.start_date,
        end_date: getBudget.data.data.end_date,
      });
  }, [id, getBudget.isSuccess, getBudget.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    update.mutate({ id, ...inputs });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    remove.mutate(id);
  };

  return (
    <Dashboard>
      <div className="lg:p-4 py-2">
        <h1 className="text-2xl font-bold mb-4">Tambah Kategori</h1>
        <div className="bg-white mt-4 shadow-lg rounded-lg p-4">
          <p>Form Tambah Kategori</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <InputField
              label="Nama Anggaran"
              icon={<Icon icon="mdi:folder" className="text-xl" />}
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Masukan nama anggaran"
              error={update.isError && update.errors?.name}
            />
            <DropdownField
              label="Pilih Kategori"
              icon="mdi:folder"
              name="category_id"
              value={inputs.category_id}
              onChange={handleChange}
              options={
                getAllCategories.data?.data
                  .filter((category) => category.type === "expense")
                  .map((category) => ({
                    label: category.name,
                    value: category.id,
                  })) || []
              }
              placeholder="Pilih kategori"
              error={update.isError && update.errors?.category_id}
            />
            <InputField
              label="Jumlah Anggaran"
              icon={<Icon icon="mdi:currency-usd" className="text-xl" />}
              type="number"
              name="amount"
              value={inputs.amount}
              onChange={handleChange}
              placeholder="Masukan jumlah anggaran"
              error={update.isError && update.errors?.amount}
            />
            <DropdownField
              label="Periode Anggaran"
              icon="mdi:calendar"
              name="period"
              value={inputs.period}
              onChange={handleChange}
              options={[
                { label: "Harian", value: "daily" },
                { label: "Mingguan", value: "weekly" },
                { label: "Bulanan", value: "monthly" },
                { label: "Tahunan", value: "yearly" },
              ]}
              placeholder="Pilih periode anggaran"
              error={update.isError && update.errors?.period}
            />
            <div className="flex items-center gap-4 lg:flex-row flex-col">
              <InputField
                label="Tanggal Mulai"
                icon={<Icon icon="mdi:calendar" className="text-xl" />}
                type="date"
                name="start_date"
                value={inputs.start_date}
                onChange={handleChange}
                placeholder="Pilih tanggal mulai"
                error={update.isError && update.errors?.start_date}
              />
              <InputField
                label="Tanggal Selesai"
                icon={<Icon icon="mdi:calendar" className="text-xl" />}
                type="date"
                name="end_date"
                value={inputs.end_date}
                onChange={handleChange}
                placeholder="Pilih tanggal selesai"
                error={update.isError && update.errors?.end_date}
              />
            </div>
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
                to="/anggaran"
                className="border border-black text-black px-4 py-2 rounded-lg hover:rounded-none cursor-pointer transition-all duration-300"
              >
                Batal
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
}

export default Edit;

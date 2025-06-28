import Auth from "../layouts/Auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useAuth } from "../hooks/useAuth";

function Registrasi() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register.mutate(inputs);
  };

  return (
    <Auth>
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 w-80 flex flex-col items-center"
      >
        <h1 className="text-7xl font-bold">REGIS</h1>
        <div className="w-full">
          <InputField
            label="Nama"
            icon="mdi:account"
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Masukkan nama"
            error={register.isError && register.errors?.name}
          />
        </div>
        <div className="w-full">
          <InputField
            label="Email"
            icon="mdi:email"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            error={register.isError && register.errors?.email}
          />
        </div>
        <div className="w-full">
          <InputField
            label="Password"
            icon="mdi:lock"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            error={register.isError && register.errors?.password}
          />
        </div>
        <div className="w-full">
          <InputField
            label="Konfirmasi Password"
            icon="mdi:lock"
            name="password_confirmation"
            type="password"
            value={inputs.password_confirmation}
            onChange={handleChange}
            placeholder="Masukkan konfirmasi password"
            error={register.isError && register.errors?.password_confirmation}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-lg py-2 px-4 mt-4 hover:rounded-none transition-all duration-300 cursor-pointer w-full"
        >
          {register.isPending ? "Registering..." : "Register"}
        </button>
        <div className="mt-4">
          <span className="text-gray-600">Suda punya akun? </span>
          <Link to="/login" className="text-black hover:underline">
            Login disini
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default Registrasi;

import { useState } from "react";
import InputField from "../components/InputField";
import { useAuth } from "../hooks/useAuth";
import Auth from "../layouts/Auth";
import { Link } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login.mutate(inputs);
  };

  return (
    <Auth>
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 w-80 flex flex-col items-center"
      >
        <h1 className="text-7xl font-bold">LOGIN</h1>
        <div className="w-full">
          <InputField
            label="Email"
            icon="mdi:email"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            error={login.isError && login.errors?.email}
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
            error={login.isError && login.errors?.password}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-lg py-2 px-4 mt-4 hover:rounded-none transition-all duration-300 cursor-pointer w-full"
        >
          {login.isPending ? "Logging in..." : "Login"}
        </button>
        <div className="mt-4">
          <span className="text-gray-600">Belum punya akun? </span>
          <Link to="/register" className="text-black hover:underline">
            Daftar disini
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Welcome() {
  return (
    <div className="flex py-20 lg:py-40 items-center min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-800 flex-col">
      <div className="text-white flex items-center px-8 py-2 border rounded-lg font-bold cursor-pointer border-gray-200 hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
        <Icon
          icon="mingcute:pig-money-fill"
          className="inline-block mr-2 text-2xl"
        />
        <span>I CATAT</span>
      </div>
      <h1 className="text-4xl lg:text-6xl p-4 mt-4 font-bold text-center bg-gradient-to-t from-white via-gray-200 text-transparent bg-clip-text">
        Sistem Pencatatan <br /> Keuangan
      </h1>
      <p className="text-white mt-4 w-96 text-center text-sm">
        Catat keuangan lebih mudah, cepat, dan aman. Kelola finansial tanpa
        ribet!
      </p>
      <div className="flex gap-4 mt-4">
        <Link
          to="/login"
          className="text-black bg-white flex items-center px-8 py-2 border rounded-lg font-bold cursor-pointer border-gray-200 hover:text-white hover:bg-black transition-all duration-300 ease-in-out"
        >
          <Icon icon="mdi:login" className="inline-block mr-2 text-2xl" />
          <span>Login</span>
        </Link>
        <Link
          to="/register"
          className="text-white flex items-center px-8 py-2 border rounded-lg font-bold cursor-pointer border-gray-200 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
        >
          <Icon icon="mdi:register" className="inline-block mr-2 text-2xl" />
          <span>Register</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <Link
          to="https://github.com/ifnuu01"
          className="text-white flex items-center px-8 py-2 border rounded-lg font-bold cursor-pointer border-gray-200 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
        >
          <Icon icon="mdi:github" className="inline-block mr-2 text-2xl" />
          <span>Github</span>
        </Link>
      </div>
      <Icon
        icon="mingcute:pig-money-fill"
        className="inline-block text-9xl text-white mt-10"
      />
    </div>
  );
}

export default Welcome;

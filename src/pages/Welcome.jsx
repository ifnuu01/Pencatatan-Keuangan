import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <header className="w-full flex justify-between items-center px-6 py-6 z-10 relative">
        <div className="flex items-center gap-3">
          <Icon
            icon="mingcute:pig-money-fill"
            className="text-4xl text-white drop-shadow-lg animate-bounce"
          />
          <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
            I CATAT
          </span>
        </div>
        <Link
          to="/login"
          className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-lg font-bold bg-white text-black border-2 border-white shadow-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          <Icon icon="mdi:login" className="text-2xl" />
          Login
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <Icon
            icon="mingcute:pig-money-fill"
            className="text-[5rem] lg:text-[8rem] text-white drop-shadow-2xl animate-float mb-4"
          />
          <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-pink-200 text-transparent bg-clip-text drop-shadow-lg mb-4">
            Catat Keuanganmu <br className="hidden lg:block" /> Lebih Mudah &
            Aman
          </h1>
          <p className="text-gray-200 text-center max-w mb-8 text-lg font-medium">
            Kelola keuangan harian, bulanan, hingga tahunan dengan visualisasi
            grafik yang menarik dan fitur lengkap. Mulai perjalanan finansialmu
            sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              to="/register"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-2 border-white shadow-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <Icon icon="mdi:register" className="text-2xl" />
              Daftar Gratis
            </Link>
            <Link
              to="/login"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold bg-white text-black border-2 border-white shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <Icon icon="mdi:login" className="text-2xl" />
              Login
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col items-center gap-2 pb-8 z-10 relative mt-4">
        <Link
          to="https://github.com/ifnuu01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-lg font-bold bg-black/60 text-white border-2 border-gray-300 shadow hover:bg-white hover:text-black transition-all duration-300"
        >
          <Icon icon="mdi:github" className="text-2xl" />
          Github
        </Link>
        <span className="text-gray-400 text-xs mt-2">
          © {new Date().getFullYear()} I CATAT. All rights reserved.
        </span>
      </footer>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Welcome;

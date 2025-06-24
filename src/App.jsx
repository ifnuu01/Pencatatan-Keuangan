import { Routes, Route } from "react-router-dom";
import ProtectedAuth from "./routes/ProtectedAuth.jsx";
import ProtectedLayout from "./routes/ProtectedLayout.jsx";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registrasi from "./pages/Registrasi.jsx";
import Dompet from "./pages/Dompet/ListDompet.jsx";
import DompetCreate from "./pages/Dompet/Create.jsx";
import DompetEdit from "./pages/Dompet/Edit.jsx";
import Kategori from "./pages/Kategori/ListKategori.jsx";
import KategoriCreate from "./pages/Kategori/Create.jsx";
import KategoriEdit from "./pages/Kategori/Edit.jsx";
import Transaksi from "./pages/Transaksi/ListTransaksi.jsx";
import TransaksiCreate from "./pages/Transaksi/Create.jsx";
import TransaksiEdit from "./pages/Transaksi/Edit.jsx";
import Anggaran from "./pages/Anggaran/ListAnggaran.jsx";
import AnggaranCreate from "./pages/Anggaran/Create.jsx";
import AnggaranEdit from "./pages/Anggaran/Edit.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/login"
        element={
          <ProtectedAuth>
            <Login />
          </ProtectedAuth>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedAuth>
            <Registrasi />
          </ProtectedAuth>
        }
      />
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dompet" element={<Dompet />} />
        <Route path="/dompet/create" element={<DompetCreate />} />
        <Route path="/dompet/edit/:id" element={<DompetEdit />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/kategori/create" element={<KategoriCreate />} />
        <Route path="/kategori/edit/:id" element={<KategoriEdit />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/transaksi/create" element={<TransaksiCreate />} />
        <Route path="/transaksi/edit/:id" element={<TransaksiEdit />} />
        <Route path="/anggaran" element={<Anggaran />} />
        <Route path="/anggaran/create" element={<AnggaranCreate />} />
        <Route path="/anggaran/edit/:id" element={<AnggaranEdit />} />
      </Route>
    </Routes>
  );
}

export default App;

import { NavbarProvider } from "../contexts/NavbarProvider";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard({ children }) {
  return (
    <NavbarProvider>
      <ToastContainer />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 p-4 mt-12 lg:ml-64 ml-0">{children}</main>
        </div>
      </div>
    </NavbarProvider>
  );
}

export default Dashboard;

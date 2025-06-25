import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Icon } from "@iconify/react";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";
import { useSidebar } from "../contexts/NavbarProvider";
import getUser from "../utils/getUser";

function Header() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const { logout } = useAuth();

  async function handleLogout() {
    confirmAlert({
      title: <b className="text-black">Konfirmasi Logout</b>,
      message: "Apakah Anda yakin ingin logout?",
      buttons: [
        {
          label: "Ya",
          onClick: logout.mutate,
        },
        {
          label: "Tidak",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <>
      <header className="h-16 shadow fixed right-0 lg:left-64 bg-white left-0 z-20">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon icon="mdi:menu" className="text-2xl" />
            </button>
            <div className="flex items-center">
              <div className="bg-black rounded-full h-10 w-10 flex items-center justify-center animate-bounce">
                <Icon
                  icon="mingcute:pig-money-fill"
                  className="text-white text-2xl"
                />
              </div>
              <div>
                <span className="ml-2 text-md font-semibold">
                  {getUser()?.name}
                </span>

                <div className="ml-2 text-xs text-black">
                  {new Date().toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>

          <Button
            icon="mdi:logout"
            onClick={handleLogout}
            isLoading={logout.isPending}
          >
            Logout
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;

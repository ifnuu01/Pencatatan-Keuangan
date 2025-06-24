import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Icon } from "@iconify/react";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";
import { useSidebar } from "../contexts/NavbarProvider";
import user from "../utils/getUser";

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
              <div className="bg-black rounded-full h-10 w-10">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="User Avatar"
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="ml-2 text-md font-semibold">{user?.name}</span>

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

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import menuItems from "../constant/menuItems";
import { useSidebar } from "../contexts/NavbarProvider";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 z-30 md:hidden backdrop-blur-lg"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed z-40 top-0 left-0 w-64 h-screen shadow text-black p-4 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-6">I-Catat</h1>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md hover:bg-black hover:text-white ${
                  location.pathname.startsWith(item.path)
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                <Icon icon={item.icon} className="text-xl" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

import { Outlet } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";

export default function ProtectedLayout() {
  return (
    <ProtectedRoutes>
      <Outlet />
    </ProtectedRoutes>
  );
}

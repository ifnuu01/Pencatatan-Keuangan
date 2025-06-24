import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import assignErrors from "../utils/assignErrors";

export function useAuth() {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success(res.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Login failed: " + error.response.data.message);
    },
  });

  const register = useMutation({
    mutationFn: authService.register,
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    },
  });

  const logout = useMutation({
    mutationFn: authService.logout,
    onSuccess: (res) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success(res.message);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    },
    onError: (error) => {
      toast.error("Logout failed: " + error.response.data.message);
    },
  });

  assignErrors(login);
  assignErrors(register);
  assignErrors(logout);

  return { login, register, logout };
}

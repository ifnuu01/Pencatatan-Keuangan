import axios from "axios";
import getToken from "../utils/getToken";

const API_BASE_URL = import.meta.env.VITE_API_KEY;

export const authService = {
  login: async (credentials) => {
    const res = await axios.post(`${API_BASE_URL}/login`, credentials);
    return res.data;
  },

  register: async (userData) => {
    const res = await axios.post(`${API_BASE_URL}/register`, userData);
    return res.data;
  },

  logout: async () => {
    const res = await axios.post(
      `${API_BASE_URL}/logout?_method=DELETE`,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return res.data;
  },
};

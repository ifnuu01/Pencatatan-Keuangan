import axios from "axios";
import getToken from "../utils/getToken";

const API_BASE_URL = import.meta.env.VITE_API_KEY;

export function crudService(resourcePath) {
  const instance = axios.create({
    baseURL: `${API_BASE_URL}/${resourcePath}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return {
    getAll: () => {
      return instance.get("/").then((response) => response.data);
    },
    getById: (id) => {
      return instance.get(`/${id}`).then((response) => response.data);
    },
    create: (data) => {
      return instance.post("/", data).then((response) => response.data);
    },
    update: (id, data) => {
      return instance
        .post(`/${id}?_method=PUT`, data)
        .then((response) => response.data);
    },
    remove: (id) => {
      return instance
        .post(`/${id}?_method=DELETE`)
        .then((response) => response.data);
    },
  };
}

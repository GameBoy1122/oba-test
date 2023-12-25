import axios from "axios";
// import { loadLocalStorage } from "./localStorage";

const axiosInstance = axios.create({
  baseURL: ``,
  headers: { Accept: "application/json" },
});

axiosInstance.interceptors.request.use(async (config) => {
  //   const token = loadLocalStorage('token')
  //   if (token != null) {
  //     config.headers = { ...config.headers, Authorization: `Bearer ${token}` }
  //   }

  return config;
});

export default axiosInstance;

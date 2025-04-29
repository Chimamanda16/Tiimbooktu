import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://tiimbooktu-qmkn.onrender.com/api",
  baseURL: "https://tiimbooktu.art/backend-public/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("Unauthorized request");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

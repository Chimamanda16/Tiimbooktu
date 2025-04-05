import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://tiimbooktu-qmkn.onrender.com/api",
    withCredentials: true
})
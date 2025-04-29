import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  loading: false,
  register: async (data) => {
    set({ loading: true });
    try {
      await axiosInstance.get(
        "https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie"
      );
      const res = await axiosInstance.post("/register", data);
      window.location.href = "login";
      toast.success("Sign up successful, continue to log in");
      toast.success("Sign up successfull, continue to log in");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return res.data;
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.errors?.email[0]);
      throw new Error("Registration failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  login: async (data) => {
    set({ loading: true });
    try {
      await axiosInstance.get(
        "https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie"
      );
      if (data.email === "kijagoban@tiimbooktu.art") {
        data.type = "admin";
        const res = await axiosInstance.post("/login", data);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/dashboard";
        toast.success(res?.data?.message);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
        return res.data;
      } else {
        const res = await axiosInstance.post("/login", data);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("isLoggedIn", true);
        toast.success(res?.data?.message);
        setTimeout(() => {
          window.location.href = "/shop";
        }, 1000);
        return res.data;
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error);
      throw new Error("Login failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    set({ loading: true });
    try {
      await axiosInstance.get(
        "https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie"
      );
      const res = await axiosInstance.post("/log-out");
      toast.success("Logged out successfully");
      window.location.href = "/login";
      localStorage.clear();
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Logout failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  forgotPassword: async (data) => {
    set({ loading: true });
    try {
      await axiosInstance.get(
        "https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie"
      );
      const res = await axiosInstance.post("/forgot-password", data);
      console.log("Forgot password response", res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Email submission failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  resetPassword: async (data) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/reset-password", data);
      window.location.href = "/login";
      return res;
    } catch (error) {
      console.error(error);
      throw new Error("Reset password Failed. Please try again");
    } finally {
      set({ loading: false });
    }
  },
}));

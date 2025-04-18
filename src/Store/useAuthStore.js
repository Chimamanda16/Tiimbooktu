import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-toastify";

export const useAuthStore = create((set) =>({
    isRegistering: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isResettingPassword: false,
    register: async(data) =>{
        set({ isRegistering: true });
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            console.log("CSRF cookie set successfully!");
            const res = await axiosInstance.post("/register", data);
            window.location.href = 'login';
            toast.success('Sign up successfull, continue to log in')
            return res.data;
        }
        catch(error){
            console.error(error);
            toast.error(error?.response?.data?.errors?.email[0])
            throw new Error("Registration failed. Please try again.");
        }
        finally{
            set({isRegistering: false});
        }
    },
    login: async(data) =>{
        set({isLoggingIn: true});
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            console.log("CSRF cookie set successfully!");
            const res = await axiosInstance.post("/login", data);
            toast.success(res?.data?.message);
            localStorage.setItem('access_token', res.data.access_token);
            window.location.href = '/';
            return res.data;
        }
        catch(error){
            console.error(error);
            toast.error(error?.response?.data?.error)
            throw new Error("Login failed. Please try again.");
        }
        finally{
            set({isLoggingIn: false});
        }
    },
    logout: async() =>{
        set({IsLoggingOut: true});
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            const res = await axiosInstance.post("/logout");
            return res.data;
        }
        catch(error){
            console.error(error);
            throw new Error("Logout failed. Please try again.");
        }
        finally{
            set({isLoggingOut: false});
        }
    },
    forgotPassword: async(data) =>{
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            const res = await axiosInstance.post("/forgot-password", data);
            console.log("Forgot password response", res.data);
            return res.data;
        }
        catch(error){
            console.error(error);
            throw new Error("Email submission failed. Please try again.");
        }
    },

}))
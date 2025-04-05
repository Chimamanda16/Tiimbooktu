import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) =>({
    isRegistering: false,
    isLoggingIn: false,
    isLoggingOut: false,
    register: async(data) =>{
        set({ isRegistering: true });
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            console.log("CSRF cookie set successfully!");
            const res = await axiosInstance.post("/register", data);
            console.log("Registration response", res.data);
            return res.data;
        }
        catch(error){
            console.error(error);
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
            console.log("Login response", res.data);
            return res.data;
        }
        catch(error){
            console.error(error);
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
    }
}))
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
            if(data.email ==='test@example2.com') {
                data.type = 'admin'
                const res = await axiosInstance.post("/login", data);
                window.location.href = '/dashboard';
                localStorage.setItem('access_token', res.data.access_token);
                toast.success(res?.data?.message);
                return res.data;
            } else {
                const res = await axiosInstance.post("/login", data);
                window.location.href = '/shop'
                localStorage.setItem('access_token', res.data.access_token);
                toast.success(res?.data?.message);
                return res.data;
            }
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
            const res = await axiosInstance.post("/log-out");
            window.location.href = '/login'
            localStorage.clear();
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
    resetPassword: async(data) =>{
        try{
            const res = await axiosInstance.post("/reset-password", data);
            return res;
        }catch(error){
            console.error(error);
            throw new Error("Reset password Failed. Please try again");
            
        }
    }

}))
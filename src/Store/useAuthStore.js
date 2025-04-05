import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) =>({
    isRegistering: false,
    register: async(data) =>{
        set({ isRegistering: true });
        try{
            await axiosInstance.get("https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie");
            // console.log("CSRF cookie set successfully!");
            const res = await axiosInstance.post("/register", data);
            // console.log("Registration response", res.data);
            return res.data;
        }
        catch(error){
            console.error(error);
            console.log(error.response?.data); // 👈 This right here
            throw new Error("Registration failed. Please try again.");
        }
        finally{
            set({isRegistering: false});
        }
    }
}))
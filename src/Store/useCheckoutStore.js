import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-toastify";
import { useCartStore } from "./useCartStore";

export const useCheckoutStore = create(() =>({
    createOrder: async(payload) =>{
        try{
            const res = await axiosInstance.post("/orders", payload);
            await useCartStore.getState().fetchCart();
            return res.data;
        }
        catch(error){
            console.error(error);
             toast.error(error?.response?.data?.message)
            throw new Error("Failed");
        }
    },
}))
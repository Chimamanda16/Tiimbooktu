import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-toastify";

export const useOrderStore = create((set, get) => ({
    fetchingOrders: false,
    orders: {
        data: []
    },
    error: null,
    fetchOrders: async() => {
        set({fetchingOrders: true})
        try {
            const res = await axiosInstance.get('/orders');
            set({ orders: res?.data })
            return res.data
        } 
        catch (err) {
            console.error('Error fetching artworks:', err);
            set({error: err.message})
        } 
        finally {
            set({fetchingOrders: false})
        }
    },
}))
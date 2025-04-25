import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useOrderStore = create((set) => ({
    fetchingOrders: false,
    orders: {
        data: []
    },
    orderDetail: null,
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
    fetchOrder: async(id) => {
        try {
            const res = await axiosInstance.get(`/orders/${id}`);
            set({ orderDetail: res?.data.data })
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
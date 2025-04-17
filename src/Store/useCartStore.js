import axiosInstance from "../lib/axios";
import { create } from "zustand";
import { toast } from "react-toastify";

export const useCartStore = create((set, get) => ({
    fetchingCartItem: false,
    cartItems: [],
    error: null,
    addToCart: async(data) => {
        set({fetchingCartItem: true, error: null});
        try {
            const res = await axiosInstance.post('/cart', data);
            if(res.data) {
                set((state) => ({ cartItems: [...state.cartItems, res.data.item] }))
                toast.success(res?.data?.message)
            }
            return res.data;
        }
        catch(err) {
            console.error('Error fetching artworks:', err);
            toast.error(err?.response?.data?.message)
            set({error: err.message})
        }
        finally {
            set({fetchingCartItem: false})
        }  
    },
    fetchCart: async() => {
        set({fetchingCartItem: true})
        try {
            const res = await axiosInstance.get('/cart');
            set({ cartItems: res?.data })
            return res.data
        } 
        catch (err) {
            console.error('Error fetching artworks:', err);
            toast.error(err?.response?.data?.message)
            set({error: err.message})
        } 
        finally {
            set({fetchingCartItem: false})
        }
    },
    updateCart: async(payload) => {
        try {
            const res = await axiosInstance.put('/cart', payload);
            const { fetchCart } = get();
            await fetchCart();
            return res.data
        } 
        catch (err) {
            console.error('Error fetching artworks:', err);
            toast.error(err?.response?.data?.message)
            set({error: err.message})
        } 
    },
    removeCartItem: async(id) => {
        try {
            const res = await axiosInstance.delete(`/cart/${id}`);
            toast.success(res.data.message)
            const { fetchCart } = get();
            await fetchCart();
            return res.data
        } 
        catch (err) {
            console.error('Error fetching artworks:', err);
            toast.error(err?.response?.data?.message)
            set({error: err.message})
        } 
    },
}))
import { toast } from "react-toastify";
import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useWishlistStore = create((set) => ({ 
    fetchingWishlist: false,
    error: null,
    wishlistItems: [],
    fetchWishlist: async() => {
        set({fetchingWishlist: true, error: null});
        try {
            const res = await axiosInstance.get('/wishlist');
            if(res.data) {
                set({wishlistItems: res.data.artworks});
            }
            return res.data;
        }
        catch(err) {
            console.error('Error fetching wishlist:', err);
            set({error: err.message})
        }
        finally {
            set({fetchingWishlist: false})
        }
        
    },
    addToWishlist: async(id) => {
        set({fetchingWishlist: true, error: null});
        try {
            const res = await axiosInstance.post(`/wishlist/${id}`);
            if(res.data) {
                toast.success(res.data.message);
                set((state) => ({
                    wishlistItems: [...state.wishlistItems, res.data.artworks]
                }));
            }
            return res.data;
        }
        catch(err) {
            console.error('Error adding to wishlist:', err);
            set({error: err.message});
        }
        finally {
            set({fetchingWishlist: false});
        }
    },
    
    removeFromWishlist: async(id) => {
        set({fetchingWishlist: true, error: null});
        try {
            const res = await axiosInstance.delete(`/wishlist/${id}`);
            if(res.data) {
                toast.success(res.data.message);
                set((state) => ({
                    wishlistItems: state.wishlistItems.filter(item => item.id !== id)
                }));
            }
            return res.data;
        }
        catch(err) {
            console.error('Error removing from wishlist:', err);
            set({error: err.message});
        }
        finally {
            set({fetchingWishlist: false});
        }
    }
    
}))
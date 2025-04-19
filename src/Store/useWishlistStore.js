import { toast } from "react-toastify";
import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useWishlistStore = create((set, get) => ({ 
    fetchingWishlist: false,
    deletingWishlist: false,
    error: null,
    wishlistItems: [],
    fetchWishlist: async () => {
        set({ fetchingWishlist: true, error: null });
        try {
            const res = await axiosInstance.get('/wishlist');
            console.log("backend artworks:", res);
            set({ wishlistItems: res.data.artworks})
            return res.data;
        } catch (err) {
          console.error("Error fetching wishlist:", err);
          set({ error: err.message });
        } finally {
          set({ fetchingWishlist: false });
        }
      },
    addToWishlist: async (id) => {
        set({ fetchingWishlist: true, error: null });
        try {
          const res = await axiosInstance.post(`/wishlist/${id}`);
          if(res.data) {
            toast.success(res?.data?.message)
            const { fetchWishlist } = get();
            await fetchWishlist();
            }
            return res.data;
        } catch (err) {
          console.error("Error adding to wishlist:", err);
          toast.error(err?.response?.data?.message || err.message);
          set({ error: err.message });
        } finally {
          set({ fetchingWishlist: false });
        }
      },
      
    removeFromWishlist: async(id) => {
        set({deletingWishlist: true, error: null});
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
            set({deletingWishlist   : false});
        }
    }
    
}))
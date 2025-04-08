import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useStore = create((set) => ({
    loading: false,
    error: null,
    artworks: null,
    // Other app-wide state management functions...
    fetchArtWork: async() => {
        set({loading: true, error: null});
        try {
            await axiosInstance.get('https://tiimbooktu-qmkn.onrender.com/sanctum/csrf-cookie');
            const res = await axiosInstance.get('/artworks');
            if(res.data) {
                set({artworks: res.data})
            }
            return res.data;
        }
        catch(err) {
            console.error('Error fetching artworks:', err);
            set({error: err.message})
        }
        finally {
            set({loading: false})
        }
        
}
}))

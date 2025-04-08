import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useArtworkStore = create((set) => ({
    fetchingArtwork: false,
    error: null,
    artworks: null,
    // Other app-wide state management functions...
    fetchArtwork: async() => {
        set({fetchingArtwork: true, error: null});
        try {
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
            set({fetchingArtwork: false})
        }
        
}
}))

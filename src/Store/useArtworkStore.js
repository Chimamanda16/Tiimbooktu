import { toast } from "react-toastify";
import axiosInstance from "../lib/axios";
import { create } from "zustand";

export const useArtworkStore = create((set) => ({
    fetchingArtwork: false,
    isSearching: false,
    error: null,
    artworks: [],
    artworkItem: null,
    
    // Other app-wide state management functions...
    fetchArtworks: async() => {
        set({fetchingArtwork: true, error: null});
        try {
            const res = await axiosInstance.get('/artworks');
            if(res.data) {
                set({artworks: res.data.artworks})
            }
            return res.data;
        }
        catch(err) {
            console.error('Error fetching artworks:', err);
            set({error: err.message})
        }
        finally {
            set({fetchingArtwork: false, isSearching: false})
        }
        
    },
    fetchArtwork: async(id) =>{
        set({fetchingArtwork: true, error: null});
        try {
            const res = await axiosInstance.get(`/artworks/${id}`);
            if(res.data) {
                set({artworkItem: res.data.artwork})
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
    },
    searchArtworks: async(query) => {
        set({fetchingArtwork: true, isSearching: true})
        try {
            const res = await axiosInstance.get(`/artworks/search?query=${query}`);
            set({artworks: res.data.artwork})
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message)
            set({error: error.message})
        }
        finally {
            set({fetchingArtwork: false})
        }
    }
}))

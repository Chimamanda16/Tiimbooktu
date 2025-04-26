import { create } from 'zustand';
import axiosInstance from '../lib/axios';
import { toast } from 'react-toastify';

const useAdminStore = create((set, get) => ({
    loading: false,
    success: null,
    orders: [],
    artworks: [],
    error: null,
    fetchAllOrders: async() => {
        set({loading: true})
        try {
            const res = await axiosInstance.get('/orders');
            set({ orders: res?.data.data })
            return res.data
        } 
        catch (err) {
            console.error('Error fetching artworks:', err);
            set({error: err.message})
        } 
        finally {
            set({loading: false})
        }
    },
    updateOrder: async(data, id) => {
        set({loading: true})
        try {
            const res = await axiosInstance.post(`/orders/${id}/update`, data)
            toast.success(res.data.message);
            const {fetchAllOrders} = get();
            await fetchAllOrders();
            return res.data;
        } catch (error) {
            console.error(error);
            set({error: error.message});
            toast.error(error.response.data.error || 'Cannot Update Artwork')
        } finally {
            set({loading: false})
        }
    },
    fetchAllArtworks: async() => {
        set({loading: true, error: null});
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
            set({loading: false, isSearching: false})
        }     
    },
    createArtwork: async(data) => {
        set({loading: true})
        try {
            const res = await axiosInstance.post('/artwork', data)
            if(res.data) {
                const {fetchAllArtworks} = get();
                await fetchAllArtworks();
            }
            return res.data;
        } catch (error) {
            console.error(error);
            set({error: error.message});
            toast.error(error.response.data.message || 'Cannot Create Artwork')
        } finally {
            set({loading: false})
        }
    },
    updateArtwork: async(data, id) => {
        set({loading: true})
        try {
            const res = await axiosInstance.put(`/artworks/${id}`, data)
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            console.error(error);
            set({error: error.message});
            toast.error(error.response.data.message || 'Cannot Update Artwork')
        } finally {
            set({loading: false})
        }
    },
    deleteArtwork: async(id) => {
        try {
            const res = await axiosInstance.delete(`/artworks/${id}`)
            toast.success(res.data.message);
            const {fetchAllArtworks} = get();
            await fetchAllArtworks();
            return res.data;
        } catch (error) {
            console.error(error);
            set({error: error.message});
            toast.error(error.response.data.message || 'Cannot Update Artwork')
        }
    },

}))

export default useAdminStore;
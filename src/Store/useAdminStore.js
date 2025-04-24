import create from 'zustand';

const useAdminStore = create((set) => ({
    success: null,
    orders: []
}))


export default useAdminStore;
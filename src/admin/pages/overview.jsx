import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationTable from "../components/paginationTable";
import { Modal } from "../components/modal";
import useAdminStore from "../../Store/useAdminStore";

const filterBtn = ['All', 'Pending Order', 'Delivered Orders']

export const OverViewPage = () => {
    const { fetchAllOrders, fetchAllArtworks, orders, artworks, updateOrder } = useAdminStore();

    const successfulOrders = orders.filter((order) => (order.status.toLowerCase() === 'delivered'));
    const pendingOrders = orders.filter((order) => (order.status.toLowerCase() !== 'delivered'));

    const [isOpen, setIsOpen] = useState(null);
    const [data, setData] = useState(orders);
    const [activeOption, setActiveOption] = useState('All')
    const [detail, setDetail] = useState(null)
    const [initialDetail, setInitialDetail] = useState(null);

    const [updateBtn, setUpdateBtn] = useState(true);


    useEffect(() => {
        setData(orders);
    }, [orders])

    useEffect(() => {
        fetchAllOrders();
        fetchAllArtworks()
    }, [fetchAllOrders, fetchAllArtworks])

    const setActive = (option) => {
        setActiveOption(option);
        if (option.toLowerCase() == 'all') {
            setData(orders);
        }
        else if (option.toLowerCase() == 'pending order') {
            setData(pendingOrders)
        }
        if (option.toLowerCase() == 'delivered orders') {
            setData(successfulOrders);
        }
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const toggleStatus = (status) => {
        const updatedData = {...detail, status: status};
        if(updatedData.status !== initialDetail.status) {
            setUpdateBtn(false);
        } else {
            setUpdateBtn(true);
        }
        setDetail(updatedData);
    }

    const showDetail = (item) => {
        setUpdateBtn(true);
        setInitialDetail(item)
        setDetail(item);
        toggleModal();
    }

    const updateOrderItem = async(data) => {
       const res = await updateOrder({status: data.status}, data.id)
        if(res) {
            toggleModal();
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-[24px]">Dashboard</h3>
                <span className="text-[#A9A9A9]">Dashboard {'>'} <Link to='/dashboard'>Overview</Link></span>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#0A0A0A] border border-[#353535] rounded-xl p-6 flex gap-4">
                    <div className="bg-[#242424] h-[65px] w-[65px] rounded-2xl flex items-center justify-center">
                        <img src="/assets/icons/total-order.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#A9A9A9] capitalize">Total orders</h6>
                        <span className="font-bold text-[24px] text-white">{orders.length}</span>
                    </div>
                </div>
                <div className="bg-[#0A0A0A] border border-[#353535] rounded-xl p-6 flex gap-4">
                    <div className="bg-[#242424] h-[65px] w-[65px] rounded-2xl flex items-center justify-center">
                        <img src="/assets/icons/artwork-green.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#A9A9A9] capitalize">Artwork</h6>
                        <span className="font-bold text-[24px] text-white">{artworks.length}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className="text-xl text-white">Recent Orders</span>
                <div className="grid grid-cols-3 gap-[13px] text-[#D9D9D9] bg-[#242424]">
                    {filterBtn.map((option, index) => (
                        <button
                            onClick={() => setActive(option)}
                            key={index}
                            className={`text-center p-4 ${activeOption === option ? 'rounded-lg bg-[#CDFFAD] font-bold text-[#0A0A0A]' : ''}`}>
                            {option}
                        </button>
                    ))}
                </div>
                <PaginationTable itemsPerPage={5} data={data} onUpdateClick={showDetail} type="order" />
            </div>
            {detail &&
                <Modal isOpen={isOpen} onClose={toggleModal} title={detail.id}>
                    <div className="flex flex-col gap-[110px] h-[86vh] justify-between px-6 py-8">
                        <div className="flex flex-col gap-1">
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Order ID</span>
                                <span className="text-white capitalize">{detail.id}</span>
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Price</span>
                                <span className="text-white capitalize">${detail.total_amount}</span>
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Contact</span>
                                <span className="text-white">{detail.contact}</span>
                            </div>
                            {/* <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Items</span>
                                <span className="text-white capitalize">2</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Quantity</span>
                                <span className="text-white capitalize">X3</span>                            
                            </div> */}
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Date Placed</span>
                                <span className="text-white capitalize">2 June 2023 2:40 PM </span>
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Status</span>
                                <div className='flex rounded-lg bg-[#2B2B2B]'>
                                    <button onClick={() => toggleStatus('pending')} className={`py-2 px-2 rounded-lg ${detail.status.toLowerCase() !== 'delivered' && detail.status.toLowerCase() !== 'shipped' ? 'bg-[#322A21] text-[#F57C00]' : 'text-[#595959]'}`}>In Progress</button>
                                    <button onClick={() => toggleStatus('shipped')} className={`py-2 px-2 rounded-lg ${detail.status.toLowerCase() == 'delivered' || detail.status.toLowerCase() == 'shipped' ? 'bg-[#61C45312] text-[#61C453]' : 'text-[#595959]'}`}>Delivered</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => updateOrderItem(detail)} disabled={updateBtn} className="w-full disabled:bg-[#f5f5f5] disabled:cursor-not-allowed py-3 bg-[#CDFFAD] rounded-xl text-[#0A0A0A]">Update</button>
                    </div>
                </Modal>
            }

        </div>
    )
}
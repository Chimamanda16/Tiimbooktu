import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaginationTable from "../components/paginationTable";
import { Modal } from "../components/modal";

const filterBtn = ['All', 'Pending Order', 'Delivered Orders']

const data = [
    {
        id: 1,
        name: 'Croqskin Purse',
        price: 29.99,
        order_id: 3354654654526,
        description: 'Yes, It Is Real; The Crocodile Head Right Through To The Croc Skin. All Real. No Cap.',
        image: 'https://via.placeholder.com/40', // Replace with actual image URL
        status: 'delivered'
    },
    {
        id: 2,
        name: 'Croqskin Purse',
        price: 29.99,
        order_id: 3354654654526,
        description: 'Yes, It Is Real; The Crocodile Head Right Through To The Croc Skin. All Real. No Cap.',
        image: 'https://via.placeholder.com/40', // Replace with actual image URL
        status: 'delivered'
    },
    // ... add more
];

export const OrderDashboard = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [activeOption, setActiveOption] = useState('All')
    const [detail, setDetail] = useState(null)
    const setActive = (option) => {
        setActiveOption(option);
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const showDetail = (item) => {
        setDetail(item);
        toggleModal();
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-[24px]">Order</h3>
                <span className="text-[#A9A9A9]">Order {'>'} <Link to='/dashboard'>Artwork</Link></span>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <div className="bg-[#0A0A0A] border border-[#353535] rounded-xl p-6 flex gap-4">
                    <div className="bg-[#242424] h-[65px] w-[65px] rounded-2xl flex items-center justify-center">
                        <img src="/assets/icons/total-order.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#A9A9A9] capitalize">Total orders</h6>
                        <span className="font-bold text-[24px] text-white">62</span>
                    </div>
                </div>
                <div className="bg-[#0A0A0A] border border-[#353535] rounded-xl p-6 flex gap-4">
                    <div className="bg-[#242424] h-[65px] w-[65px] rounded-2xl flex items-center justify-center">
                        <img src="/assets/icons/successful-order.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#A9A9A9] capitalize">successful order</h6>
                        <span className="font-bold text-[24px] text-white">60</span>
                    </div>
                </div>
                <div className="bg-[#0A0A0A] border border-[#353535] rounded-xl p-6 flex gap-4">
                    <div className="bg-[#242424] h-[65px] w-[65px] rounded-2xl flex items-center justify-center">
                        <img src="/assets/icons/pending-order.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#A9A9A9] capitalize">Pending order</h6>
                        <span className="font-bold text-[24px] text-white">02</span>
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
                <PaginationTable data={data} onUpdateClick={showDetail} type="order" />
            </div>
            {detail &&
                <Modal isOpen={isOpen} onClose={toggleModal} title={detail.name}>
                    <div className="flex flex-col gap-[110px] h-[86vh] justify-between px-6 py-8">
                        <div className="flex flex-col gap-1">
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">ArtWork</span>
                                <span className="text-white capitalize">{detail.name}</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Price</span>
                                <span className="text-white capitalize">{detail.price}</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Items</span>
                                <span className="text-white capitalize">2</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Quantity</span>
                                <span className="text-white capitalize">X3</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Order ID</span>
                                <span className="text-white capitalize">{detail.order_id}</span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Date Placed</span>
                                <span className="text-white capitalize">2 June 2023 2:40 PM </span>                            
                            </div>
                            <div className="border-b border-[#595959] py-[10px] w-full flex justify-between">
                                <span className="text-[#D9D9D9]">Status</span>
                                <div className='flex rounded-lg bg-[#2B2B2B]'>
                                    <button className={`py-2 px-2 rounded-lg ${detail.status == 'in progress' ? 'bg-[#322A21] text-[#F57C00]' : 'text-[#595959]'}`}>In Progress</button>
                                    <button className={`py-2 px-2 rounded-lg ${detail.status == 'delivered' ? 'bg-[#61C45312] text-[#61C453]' : 'text-[#595959]'}`}>Delivered</button>
                                </div>                    
                            </div>
                        </div>
                        <button className="w-full py-3 bg-[#CDFFAD] rounded-xl text-[#0A0A0A]">Update</button>
                    </div>
                </Modal>
            }

        </div>
    )
}
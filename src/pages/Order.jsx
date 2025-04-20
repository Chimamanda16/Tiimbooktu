import React, { useEffect, useState } from "react";
import FooterComp from "../components/Footer";
import NavBarComp from "../components/Navbar";
import { useOrderStore } from "../Store/useOrderStore";
import { format } from "date-fns";
import { useAuthStore } from "../Store/useAuthStore";

export const OrderPage = () => {
    const { fetchOrders, orders, fetchingOrders } = useOrderStore();
    const [isOpen, setIsOpen] = useState(false);
    const [myOrders, setMyOrder] = useState(orders.data);
    const [showDetail, setShowDetail] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});
    const { logout } = useAuthStore();
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    useEffect(() => {
        setMyOrder(orders?.data)
    }, [orders])

    const goToDetail = (order) => {
        setOrderDetail(order);
        setShowDetail(true)
    }


    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="my_hair"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">My Order</h1>
                    {fetchingOrders && <h1>Loading ...</h1>}
                    {myOrders?.length > 0 && (
                        <div className="grid lg:grid-cols-3 gap-10 w-full">
                            <div className="lg:col-span-1 flex lg:hidden flex-col bg-[#2B2B2B] border border-[#595959] rounded-[20px]">
                                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'border-b border-b-[#595959]' : ''} cursor-pointer px-4 py-[18px] text-xl flex justify-between`}>
                                    My Orders
                                    <img src="/assets/icons/dropdown-icon-white.svg" alt="" />
                                </button>
                                {isOpen && <>
                                    <div className={`border-b cursor-pointer border-b-[#595959] px-4 py-[18px] text-xl`}>
                                        My Account
                                    </div>
                                    <button onClick={logout} className={`px-4 text-start py-[18px] text-xl`}>
                                        Log Out
                                    </button>
                                </>}
                            </div>
                            <div className="lg:col-span-1 hidden lg:flex flex-col bg-[#2B2B2B] border border-[#595959] rounded-[20px]">
                                <div className={`border-b cursor-pointer border-b-[#595959] px-4 py-[18px] text-xl`}>
                                    My Account
                                </div>
                                <div className={`border-b cursor-pointer active border-b-[#595959] px-4 py-[18px] text-xl`}>
                                    My Orders
                                </div>
                                <button onClick={logout} className={`px-4 text-start py-[18px] text-xl`}>
                                    Log Out
                                </button>
                            </div>
                            <div className="lg:col-span-2 flex flex-col bg-[#2B2B2B] border border-[#595959] rounded-[20px]">
                                <div className={`border-b border-b-[#595959] px-4 py-[18px] text-xl flex gap-3`}>
                                    {showDetail ? <>
                                    <img className="cursor-pointer" onClick={() => setShowDetail(false)} src="/assets/icons/back.svg" alt="back" />
                                        Order Details
                                    </> : 'My Orders'}
                                    
                                </div>
                                {showDetail ? <>
                                    <div className={`border-b border-b-[#595959] flex flex-col lg:flex-row gap-4 items-start justify-between lg:items-center px-4 py-[18px] text-xl`}>
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold">Order ID: 3354654654526</span>
                                                <span className="text-sm">Placed On  {format(new Date(orderDetail?.placed_on), 'd MMMM yyyy h:mm a')} </span>
                                            </div>
                                        </div>
                                </> : 
                                    myOrders?.map((order, index) => {
                                    return (
                                        <div key={index} className={`${orders.length - 1 === index ? 'border-b border-b-[#595959]' : ''} flex flex-col lg:flex-row gap-4 items-start justify-between lg:items-center px-4 py-[18px] text-xl`}>
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold">Order ID: 3354654654526</span>
                                                <span className="text-sm">Placed On  {format(new Date(order?.placed_on), 'd MMMM yyyy h:mm a')} </span>
                                                {!order.showDetail && <span className="mt-1">Status: <span className={`${order.status} capitalize`}>{order.status}</span></span>}
                                            </div>
                                            <button onClick={() => goToDetail(order)} className="border border-[#CDFFAD] px-[33px] py-2 lg:py-4 rounded-[35px] text-[#CDFFAD]">
                                                See details
                                            </button>
                                        </div>
                                    )
                                })
                                }

                            </div>
                        </div>
                    )}
                </div>
            </section>
            <FooterComp />
        </div>
    )
}
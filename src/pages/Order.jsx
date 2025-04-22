import React, { useEffect, useState } from "react";
import FooterComp from "../components/Footer";
import NavBarComp from "../components/Navbar";
import { useOrderStore } from "../Store/useOrderStore";
import { format } from "date-fns";
import { useAuthStore } from "../Store/useAuthStore";

const steps = ['Order Placed', 'Inprogress', 'Shipped', 'Delivered'];

const statusToStepIndex = {
    placed: 0,
    pending: 1,
    shipped: 2,
    delivered: 3
};

export const OrderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { fetchOrders, orders, fetchingOrders, fetchOrder, orderDetail } = useOrderStore();
    const [isOpen, setIsOpen] = useState(false);
    const [myOrders, setMyOrder] = useState(orders.data);
    const [showDetail, setShowDetail] = useState(false);
    const currentStep = statusToStepIndex[orderDetail?.status?.toLowerCase()] || 0;
    const { logout } = useAuthStore();
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    useEffect(() => {
        setMyOrder(orders?.data)
    }, [orders])

    const goToDetail = (order) => {
        fetchOrder(order.id)
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
                        <div className="grid lg:grid-cols-3 gap-10 items-start w-full">
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
                            <div className="lg:col-span-2  flex flex-col bg-[#2B2B2B] border border-[#595959] rounded-[20px]">
                                <div className={`border-b border-b-[#595959] px-4 py-[18px] text-xl flex gap-3`}>
                                    {showDetail && orderDetail ? <>
                                        <img className="cursor-pointer" onClick={() => setShowDetail(false)} src="/assets/icons/back.svg" alt="back" />
                                        Order Details
                                    </> : 'My Orders'}

                                </div>
                                {showDetail && orderDetail ? <>
                                    <div className={`border-b border-b-[#595959]  flex flex-col lg:flex-row gap-4 items-start justify-between lg:items-center px-4 py-[18px] text-xl`}>
                                        <div className="flex flex-col gap-2 lg:px-4 w-full">
                                            <span className="font-bold">Order ID: {orderDetail.id}</span>
                                            <span className="text-sm">Placed On  {format(new Date(orderDetail?.placed_on), 'd MMMM yyyy h:mm a')} </span>
                                            <div className="flex justify-between w-full text-xl mt-1">
                                                <div className="text-smm">Item: {orderDetail?.items?.length ? orderDetail?.items?.length : '0'}</div>
                                                <div className="text-xl">Status: <span className={`${orderDetail.status} capitalize`}>{orderDetail.status}</span></div>
                                            </div>
                                            <div className="py-8 flex flex-col items-center">
                                                <div className="flex items-center w-full justify-between relative">
                                                    <div className="absolute top-[10px] left-0 right-0 z-0 h-1 bg-[#A9A9A9] mx-2"></div>

                                                    {steps.map((step, index) => (
                                                        <div className="flex flex-col items-center z-10" key={step}>
                                                            <div className={`w-full flex  ${index === 0 ? 'justify-start' : index === steps.length - 1 ? 'justify-end' : 'justify-center'}`}>
                                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${index < currentStep
                                                                    ? 'bg-[#CDFFAD]'
                                                                    : index === currentStep
                                                                        ? 'bg-[#CDFFAD] border-2 border-[#CDFFAD]'
                                                                        : 'bg-gray-500'
                                                                    }`}
                                                                >
                                                                    {index === currentStep && (
                                                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <span
                                                                className={`lg:text-sm text-[10px] mt-2 ${index === currentStep ? 'text-[#CDFFAD]' : 'text-gray-400'
                                                                    }`}
                                                            >
                                                                {step}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col lg:flex-row gap-4 items-start justify-between lg:items-center px-4 py-[18px] text-xl`}>
                                        {orderDetail?.order_items &&
                                            <div className="capitalize px-4 flex flex-col gap-4 w-full">
                                                Items in your order

                                                {orderDetail?.order_items.map((item, index) => {
                                                    return <>
                                                        <div key={index} className="border border-[#595959] rounded-[20px] flex w-full gap-2 lg:gap-4 p-[10px]">
                                                            <div className="h-[94px] w-[108px] rounded-[10px]">
                                                                <img className="w-full h-full" src="" alt="" />
                                                            </div>
                                                            <div className="flex flex-col gap-1 justify-between">
                                                                <div className="text-xl capitalize">{item.artwork.name}</div>
                                                                <div className="text-sm text-[#A9A9A9] capitalize"> {item.artwork.description}</div>
                                                                <div className="capitalize"> {item.artwork.base_price} </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                })}
                                                <div className="flex gap-2">
                                                    <img src="/assets/icons/bus.svg" alt="" />
                                                    --------------------------------------
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </> :
                                    myOrders?.map((order, index) => {
                                        return (
                                            <div key={index} className={`${orders.length - 1 === index ? 'border-b border-b-[#595959]' : ''} flex flex-col lg:flex-row gap-4 items-start justify-between lg:items-center px-4 py-[18px] text-xl`}>
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-bold">Order ID: {order.id}</span>
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
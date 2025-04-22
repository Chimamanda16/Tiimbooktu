import React, { useEffect, useState } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import ShopComp from "../components/Shop";
import { Link } from "react-router-dom";
import { RelatedProduct } from "../components/RelatedProduct";
import { EmptyDataState } from "../components/Empty-Data-State";
import { useCartStore } from "../Store/useCartStore";

export const Cart = () => {
    const {cartItems,  removeCartItem, updateCart, fetchingCartItem} = useCartStore();
    const [cartData, setCartData] = useState(cartItems);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {
        setCartData(cartItems);
    }, [cartItems])
    
    const increaseQuantity = (index, data) => {
        updateCartItem(data, 'increment')
      };

    const decreaseQuantity = (index, data) => {
        if(data.quantity > 1) {
            updateCartItem(data, 'decrease')
        }
    };

    const updateCartItem = (data, type) => {
        let payload = {
            cart_item_id: data.id,
            quantity: type === 'decrease' ? data.quantity - 1 : data.quantity + 1,
          };
        updateCart(payload)
    }
    
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="cart"
                className="text-white flex flex-col justify-center items-center gap-6 w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <div className="flex flex-col gap-6 w-full">
                        <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">My Cart</h1>
                        {cartData?.cart?.length <= 0 && <EmptyDataState img="empty-cart" title="Your Cart is empty" description="your cart is empty at the moment, Explore our shop below" />}
                        {cartData?.cart?.length > 0 && <div className="grid lg:grid-cols-3 gap-6 items-start w-full">
                            <div className="lg:col-span-2 flex flex-col gap-10 w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="bg-[#2B2B2B] text-white flex flex-col lg:hidden items-start justify-between py-5 p-3 pr-5 border border-[#595959] rounded-[20px] w-full">
                                        <div className="flex w-full items-center justify-between text-xl">
                                            <span>Subtotal</span>
                                            <span className="font-bold">${cartData['total_cart_price']?.toFixed(2)}</span>
                                        </div>
                                        <span className="text-[#A9A9A9] text-sm capitalize">Delivery fee not included yet</span>
                                    </div>
                                    <div className="flex flex-col gap-4 lg:gap-[30px]">
                                    {cartData?.cart?.map((data, index) => {
                                        return (  <div key={index} className="bg-[#2B2B2B] flex items-start justify-between p-3 pr-5 border border-[#595959] rounded-[20px] w-full">
                                            <div className="flex gap-10 lg:gap-3">
                                                <div className="flex flex-col gap-4">
                                                <div className="w-[130px] h-[117px] md:w-[213px] md:h-[189px] rounded-[14px] overflow-hidden">
                                                    <img className="w-fit" src={data?.artwork.images[0].url} alt="cart" />
                                                </div>
                                                <img onClick={() => removeCartItem(data?.id)} className="cursor-pointer w-6 h-6 block md:hidden" src="/assets/icons/delete-icon-white.svg" alt="delete" />
                                                </div>
                                                <div className="flex flex-col justify-between">
                                                    <div className="flex flex-col gap-3 lg:gap-2">
                                                        <h6 className="text-white text-xl capitalize">{data?.artwork?.name} </h6>
                                                        <span className="text-xl font-bold text-white">${data?.item_price} x {data?.quantity}</span>
                                                    </div>
                                                    <div className="text-white flex items-center">
                                                        <button onClick={() => decreaseQuantity(index, data)} className="border-r border-[#595959] py-4 px-5 bg-[#0A0A0A] rounded-l-[12px]"> - </button>
                                                        <div className="py-4 px-5 bg-[#0A0A0A] font-cinzel"> {data?.quantity} </div>
                                                        <button onClick={() => increaseQuantity(index, data)} className="border-l border-[#595959] py-4 px-5 bg-[#0A0A0A] rounded-r-[12px]"> + </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <img onClick={() => removeCartItem(data?.id)} className="cursor-pointer hidden md:flex" src="/assets/icons/delete-icon-white.svg" alt="delete" />
                                        </div>)
                                    })}  
                                    </div>
                                    <Link to='/checkout' className="w-full lg:hidden bg-[#CDFFAD] p-[10px] rounded-[12px] text-[#1C1C1C] text-center">
                                        Checkout (${cartData['total_cart_price']?.toFixed(2)})
                                    </Link>
                                    <Link to="/shop" className="text-xl w-full text-center lg:text-start text-[#CDFFAD] underline">Continue Shopping</Link>
                                </div>
                            </div>
                            <div className="lg:col-span-1 hidden border lg:flex flex-col border-[#595959] bg-[#2B2B2B] rounded-[20px]">
                                <div className="border-b border-[#595959] py-[18px] px-4 text-white font-bold text-xl">
                                    Order Summary
                                </div>
                                <div className="flex justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                    <span>Subtotal</span>
                                    <span>${cartData['total_cart_price']?.toFixed(2)}</span>
                                </div>
                                <div className="py-[18px] px-4 text-xl">
                                    <Link to='/checkout' className="w-full block bg-[#CDFFAD] p-[10px] rounded-[12px] text-[#1C1C1C] text-center">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>}

                    </div>
                </div>
            </section>
            {(cartData?.length < 1 && !fetchingCartItem) && <ShopComp />}
            {cartData?.length > 0 && <RelatedProduct />}
            <FooterComp />
        </div>
    )
}
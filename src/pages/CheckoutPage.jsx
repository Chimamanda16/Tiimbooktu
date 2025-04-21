import React, { useEffect, useState } from "react";
import FooterComp from "../components/Footer";
import NavBarComp from "../components/Navbar";
import { Input } from "../components/Input";
import { useCheckoutStore } from "../Store/useCheckoutStore";
import { useCartStore } from "../Store/useCartStore";

export const CheckoutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { cartItems } = useCartStore();
    const [formData, setFormData] = useState({
        contact: '',
        shipping_method: '',
        shipping_as_billing: '',
        recurring: false,
        remember_me: false,
        saveCard: false,
        useShippingAddress: false,
        payment: ''
    });
    const [shippingDetails, setShippingDetails] = useState({
        country: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        state: "",
        city: ""
    });
    const [cardDetails, setCardDetails] = useState({
        card_number: '',
        expiration_date: '',
        security_code: '',
        name_on_card: '',
    });
    const { createOrder } = useCheckoutStore();

    const resetForm = () => {
        setFormData({
            contact: '',
            shipping_method: '',
            shipping_as_billing: '',
            recurring: false,
            remember_me: false,
            saveCard: false,
            useShippingAddress: false,
            payment: ''
        })
        setShippingDetails({
            country: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            state: "",
            city: ""
        })
        setCardDetails({
            card_number: '',
            expiration_date: '',
            security_code: '',
            name_on_card: '',
        })
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name == 'shipping_as_billing') {
            setFormData((prev) => ({
                ...prev,
                [name]: value === 'true' ? true : false,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleCardDetailChange = (e) => {
        const { name, value } = e.target;
        if (formData.payment == 'card') {
            setCardDetails((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else {
            return
        }
    }


    const handleShippingDetails = (e) => {
        const { name, value, type, checked } = e.target;

        setShippingDetails((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const submitForm = async (e) => {
        e.preventDefault();
        let metadata;
        if (formData.payment === 'paystack') {
            metadata = null;
        } else {
            metadata = cardDetails;
        }

        const updatedFormData = {
            ...formData,
            shipping_details: shippingDetails,
            metadata: metadata
        };

        try {
            const response = await createOrder(updatedFormData);
            resetForm();
            if (response) {
                resetForm()
                console.log(response)
                window.location.href = response.checkout_url
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }


    const [showSummary, setShowSummary] = useState(false);
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="checkout"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full gap-4 lg:gap-8 mb-6">
                    <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">Checkout</h1>

                    <form onSubmit={(e) => submitForm(e)} className="grid lg:grid-cols-6 gap-4 items-start">
                        <div className="lg:col-span-2 border lg:hidden flex-col border-[#595959] bg-[#2B2B2B] rounded-[20px]">
                            <div className={`${showSummary ? 'border-b border-[#595959]' : ''} flex justify-between py-[18px] px-4 text-white font-bold text-xl`}>
                                <div className="flex gap-3 items-center">
                                    Order Summary
                                    <img onClick={() => setShowSummary(!showSummary)} src="/assets/icons/dropdown-icon-black.svg" alt="" />
                                </div>
                                <span>{cartItems['total_cart_price']?.toFixed(2)}</span>
                            </div>
                            {showSummary && (
                                <>
                                    <div className="flex justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                        <span>Item's Total (3)</span>
                                        <span>{cartItems['total_cart_price']?.toFixed(2)}</span>
                                    </div>
                                    <div className="flex flex-col gap-4 items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                        <div className="flex w-full justify-between">
                                            <span>Discount</span>
                                            <span>$--</span>
                                        </div>
                                        <input className="input cardInput bg-[#1C1C1C]" id="discount" name="discount" value='' type="text" placeholder="Enter Discount Code" />
                                    </div>
                                    <div className="flex justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                        <span>Shipping</span>
                                        <span>$4.77</span>
                                    </div>
                                    <div className="flex font-bold justify-between items-center py-[18px] px-4 text-white text-xl">
                                        <span>Total</span>
                                        <span>{cartItems['total_cart_price']?.toFixed(2)}</span>
                                    </div></>
                            )}
                        </div>
                        <div className="lg:col-span-4 lg:border text-white lg:border-[#595959] lg:bg-[#2B2B2B] lg:p-[33px] rounded-[20px] gap-[10px]">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-white font-bold">Contact</span>
                                    <Input onChange={handleInputChange} required id="contact" name="contact" value={formData.contact} type="email" placeholder="Email" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-white font-bold">Delivery</span>
                                    <div className="flex flex-col gap-4">
                                        <Input options={['test', 'chizu']} label="Country" type="select" onChange={handleShippingDetails} placeholder="Select a Country" value={shippingDetails.country} name="country" />
                                        <div className="flex flex-col lg:flex-row gap-5">
                                            <Input onChange={handleShippingDetails} label='First Name' required id="first_name" name="first_name" value={shippingDetails.first_name} type="text" placeholder="Enter First Name" />
                                            <Input onChange={handleShippingDetails} label='Last Name' required id="last_name" name="last_name" value={shippingDetails.last_name} type="text" placeholder="Enter Last Name" />
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-5">
                                            <Input onChange={handleShippingDetails} label='Phone Number' required id="phone_number" name="phone_number" value={shippingDetails.phone_number} type="number" />
                                            <Input onChange={handleShippingDetails} label='Additional Phone number' id="additionalPhoneNumber" name="additionalPhoneNumber" value={formData.additionalPhoneNumber} type="number" />
                                        </div>
                                        <Input onChange={handleShippingDetails} label='Address' required id="address" name="address" value={shippingDetails.address} type="text" placeholder='Enter Delivery Address' />
                                        <div className="flex flex-col lg:flex-row gap-5">
                                            <Input options={['test', 'chizu']} onChange={handleShippingDetails} label='State' placeholder="Select a State" required id="state" name="state" value={shippingDetails.state} type="select" />
                                            <Input options={['test', 'chizu']} onChange={handleShippingDetails} label='City' placeholder="Select a City" required id="city" name="city" value={shippingDetails.city} type="select" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-white font-bold">Shipping Method</span>
                                    <div className="border border-[#595959] rounded-[20px] bg-[#2B2B2B]">
                                        <label htmlFor="standard" className="flex items-center pr-4 justify-between border-b border-b-[#595959]">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='standard' name="shipping_method" id="standard" />
                                                Standard
                                            </div>
                                            $--
                                        </label>
                                        <label htmlFor="express" className="flex items-center pr-4 justify-between">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='express' name="shipping_method" id="express" />
                                                Express
                                            </div>
                                            $--
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl text-white font-bold block">Payment Method</span>
                                        <span className="text-sm block">All transactions are secure and encrypted.</span>
                                    </div>
                                    <div className="border border-[#595959] bg-[#242424] rounded-[20px] flex flex-col gap-4">
                                        <label htmlFor="paystack" className="flex items-center pr-4 justify-between border-b border-b-[#595959]">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='paystack' name="payment" id="paystack" />
                                                Paystack
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <img src="/assets/icons/master.svg" alt="card" />
                                                <img src="/assets/icons/visa.svg" alt="card" />
                                                <img src="/assets/icons/ozow.svg" alt="card" />
                                                <img className="hidden lg:flex" src="/assets/icons/airtel.svg" alt="card" />
                                                <img className="hidden lg:flex" src="/assets/icons/mtn.svg" alt="card" />
                                                <img className="hidden lg:flex" src="/assets/icons/american.svg" alt="card" />
                                            </div>
                                        </label>
                                        <div className="lg:min-h-[186px] w-full flex flex-col gap-2 justify-center items-center">
                                            <img src="/assets/icons/credit-card.svg" alt="card" />
                                            <div className="flex flex-col text-sm gap-1 text-center">
                                                After clicking “Pay now”, you will be redirected to Paystack <br /> to complete your purchase securely.
                                            </div>
                                        </div>
                                        <div className="bg-[#2B2B2B] rounded-b-[20px] capitalize">
                                            <label htmlFor="saveCard" className="flex items-center pr-4 justify-between">
                                                <div className="flex items-center text-sm gap-4 p-4">
                                                    <input className="w-5 h-5" type="checkbox" value={formData.saveCard} name="saveCard" id="saveCard" />
                                                    Save card information for recurring payment
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="border border-[#595959] rounded-[20px] flex flex-col gap-4">
                                        <label htmlFor="card" className="flex items-center pr-4 justify-between border-b border-b-[#595959]">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='card' name="payment" id="card" />
                                                Card
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <img src="/assets/icons/master.svg" alt="card" />
                                                <img src="/assets/icons/visa.svg" alt="card" />
                                                <img src="/assets/icons/american.svg" alt="card" />
                                            </div>
                                        </label>
                                        {formData.payment === 'card' &&
                                            <div className="flex flex-col gap-4 px-5">
                                                <input onChange={handleCardDetailChange} className="input cardInput" id="card_number" name="card_number" value={cardDetails.card_number} type="number" placeholder="Card Number" />
                                                <div className="flex flex-col lg:flex-row gap-5">
                                                    <input onChange={handleCardDetailChange} className="input cardInput bg-[#1C1C1C]" id="expiration_date" name="expiration_date" value={cardDetails.expiration_date} type="text" placeholder="Expiration Date" />
                                                    <div className="relative w-full">
                                                        <input onChange={handleCardDetailChange} className="input cardInput bg-[#1C1C1C]" id="security_code" name="security_code" value={cardDetails.security_code} type="number" placeholder="Security Code" />
                                                        <img className="absolute right-3 top-4" src="/assets/icons/question.svg" alt="question" />
                                                    </div>
                                                </div>
                                                <input onChange={handleCardDetailChange} className="input cardInput" id="name_on_card" name="name_on_card" value={cardDetails.name_on_card} type="text" placeholder="Name On Card" />
                                            </div>
                                        }
                                        <div className="rounded-b-[20px] capitalize">
                                            <label htmlFor="useShippingAddress" className="flex items-center pr-4 justify-between">
                                                <div className="flex items-center text-sm gap-4 p-4">
                                                    <input className="w-5 h-5" type="checkbox" value={formData.useShippingAddress} name="useShippingAddress" id="useShippingAddress" />
                                                    Use shipping address as billing address
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-white font-bold">Billing Address</span>
                                    <div className="border border-[#595959] rounded-[20px] bg-[#2B2B2B] capitalize">
                                        <label htmlFor="sameAsShipping" className="flex items-center pr-4 justify-between border-b border-b-[#595959]">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='true' name="shipping_as_billing" id="sameAsShipping" />
                                                Same as shipping address
                                            </div>
                                        </label>
                                        <label htmlFor="different" className="flex items-center pr-4 justify-between">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="radio" value='false' name="shipping_as_billing" id="different" />
                                                use a different billing address
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-white font-bold">Remember Me</span>
                                    <div className="border border-[#595959] rounded-[20px] bg-[#2B2B2B] capitalize">
                                        <label htmlFor="emailMe" className="flex items-center pr-4 justify-between">
                                            <div className="flex items-center gap-2 p-4">
                                                <input onChange={handleInputChange} className="w-5 h-5" type="checkbox" value={formData.remember_me} name="remember_me" id="remember_me" />
                                                Email me with news & offers
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 hidden border lg:flex flex-col border-[#595959] bg-[#2B2B2B] rounded-[20px]">
                            <div className="border-b border-[#595959] py-[18px] px-4 text-white font-bold text-xl">
                                Order Summary
                            </div>
                            <div className="flex justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                <span>Item's Total (3)</span>
                                <span>${cartItems['total_cart_price']?.toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col gap-4 items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                <div className="flex w-full justify-between">
                                    <span>Discount</span>
                                    <span>$--</span>
                                </div>
                                <input className="input cardInput bg-[#1C1C1C]" id="discount" name="discount" value='' type="text" placeholder="Enter Discount Code" />
                            </div>
                            <div className="flex justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                <span>Shipping</span>
                                <span>$--</span>
                            </div>
                            <div className="flex font-bold justify-between items-center border-b border-[#595959] py-[18px] px-4 text-white text-xl">
                                <span>Total</span>
                                <span>{cartItems['total_cart_price']?.toFixed(2)}</span>
                            </div>
                            <div className="py-[18px] px-4 text-xl">
                                <button className="w-full bg-[#CDFFAD] p-[10px] rounded-[12px] text-[#1C1C1C] text-center">
                                    Checkout
                                </button>
                            </div>
                        </div>
                        <div className="py-[18px] lg:hidden text-xl">
                            <button type="submit" className="w-full bg-[#CDFFAD] p-[10px] rounded-[12px] text-[#1C1C1C] text-center">
                                Checkout
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <FooterComp />
        </div>
    )
}
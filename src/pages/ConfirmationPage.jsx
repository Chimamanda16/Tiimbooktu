import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import { EmptyDataState } from "../components/Empty-Data-State";
import FooterComp from "../components/Footer";
import { Link } from "react-router-dom";

export const ConfirmationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="confirmation"
                className="text-white flex flex-col justify-center items-center gap-6 w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <div className="flex flex-col items-center w-full mt-12">
                        <EmptyDataState img="confirmation" title="Your order is confirmed" />
                        <Link to='/order' className="bg-[#CDFFAD] py-4 px-[33px] text-xl text-[#1C1C1C] capitalize rounded-[35px] lg:mt-[-40px] mt-[-66px]">Track order</Link>
                    </div>
                </div>
            </section>
            <FooterComp />
        </div>
    )
}
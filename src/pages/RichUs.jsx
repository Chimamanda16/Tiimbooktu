import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";

export const RichUs = () => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="richus"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">Rich us.</h1>
                        <p className="font-glacial text-xl text-[#D9D9D9]">Feedback? Suggestions? Opinions? Critiques? Yup, drop it laikit’s haat.</p>
                    </div>
                    <Comment />
                </div>
            </section>
            <FooterComp />
        </div>
    );
};

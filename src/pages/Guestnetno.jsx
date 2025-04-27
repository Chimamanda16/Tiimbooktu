import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

export const Guestnetno = () => {
    const guestnetnoData = [
        {
            date: "January 3, 2025",
            title: "How to Fall in Love (Without Ever Admitting that is What You are Doing.)",
            desc: "First you say, “I don’t do this often. I never do this.” As you press your lips to his hesitant ones. You’re…",
        },
        {
            date: "December 31, 2024",
            title: "COFFEE",
            desc: "coffee The first time I drank coffee I was fourteen. If this were a story about coffee, I would say…",
        },
        {
            date: "December 29, 2025",
            title: "THE NOW",
            desc: "A few thousand years ago, there was an obscure, rustic settlement, existing off the beaten path. Its people were mostly…",
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="guestnetno"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 lg:gap-[160px] w-[88%] mx-auto"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-[123px] mb-6">
                    <div className="flex flex-col gap-2 lg:text-center">
                        <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">GuesTnetno</h1>
                        <p className="font-glacial text-xl text-[#D9D9D9]">“It’s sorta like, we write what we want. Not what they like.” <br /> _Thee Guest.</p>
                    </div>
                    <button className="bg-white hidden lg:flex h-[99px] w-[99px] items-center justify-center rounded-full">
                        <img src="/assets/icons/arrow-down-icon-black.svg" alt="download" />
                    </button>
                </div>
                <div className="grid lg:grid-cols-3 w-full gap-5 font-glacial">
                    {guestnetnoData.map((data, index) => {
                        return <div key={index} className="bg-white py-4 px-5 flex flex-col gap-[14px] uppercase">
                            <div className="flex flex-col text-[#0A0A0A] gap-2 text-center">
                                <div className='flex gap-2 justify-center items-center'>
                                    <img src="/assets/icons/calender-icon.svg" alt="" />
                                    <span> {data.date} </span>
                                </div>
                                <h4 className="font-chango line-clamp-1 text-[22px] lg:text-[26px]">
                                    {data.title}
                                </h4>
                                <p className="text-[#2B2B2B] text-xl line-clamp-4">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#CDFFAD] rounded-[35px] py-4 px-8 font-bold text-[#1C1C1C] uppercase">Read more</button>
                            </div>
                        </div>
                    })}
                </div>
            </section>
            <FooterComp />
        </div>
    );
};

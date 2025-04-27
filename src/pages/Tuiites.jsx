import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";

export const Tuiites = () => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    const tuiiteData = [
        {
            title: '"Strawberry Moon, with the intensity of the voicing of I Am My Hair, combined with better beats, has the potential to become a sledgehammer!"',
            desc: 'Skinhead',
            location: 'Lagos, portugal',
        },
        {
            title: '"I Like the velvety feel of the website when i scroll. It feels like cutting fruits on antique black china."',
            desc: 'Kefas',
            location: 'Utrecht, The Netherlands',
        },
        {
            title: '"After 2020, Nobody Lives Here became the world. I no even know my next-door neighbours. ND Th Kevin Durant reference made me laugh hard. I remembered that."',
            desc: 'Baba Nneka,',
            location: 'Surulere, Lagos',
        },
        {
            title: '"I re-read Mosaic about last month. Mad man! My favorite story is that one where Oshodi was throwing dice". Hahahaha.',
            desc: 'Bread Crumb',
            location: 'G I',
        },
    ]
    return (
        <div className="bg-[#1C1C1C] flex flex-col gap-6">
            <NavBarComp />
            <section
                id="tuiites"
                className="text-white flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto font-chango"
            >
                <div className="flex flex-col w-full lg:items-center gap-4 lg:gap-8 mb-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="lg:text-[81px] text-[24px] font-chango text-white lg:text-center uppercase">FROM THE TUI’ITES</h1>
                        <p className="font-glacial text-xl text-[#D9D9D9]">From our small growing army of friends, fans and fan-atics...on a page solely for them and none else.</p>
                    </div>
                    <div className="flex flex-col mt-3 lg:mt-6 gap-[30px] lg:gap-[58px] w-full">
                        {tuiiteData.map((data, index) => {
                            return <div key={index} className="flex flex-col gap-3">
                                <h1 className="font-chango text-[20px] lg:text-[26px]"> {data.title} </h1>
                                <div className="flex flex-col gap-1">
                                    <p className="font-glacial text-xl uppercase"> {data.desc} </p>
                                    <span className="text-xl font-bold font-glacial"> {data.location} </span>
                                </div>
                            </div>
                        })}
                    </div>
                    <Comment />
                </div>
            </section>
            <FooterComp />
        </div>
    );
};

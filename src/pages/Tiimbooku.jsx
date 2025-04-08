import React from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";

export const Tiimbooktu = () => {
  return (
    <div className="bg-[#1C1C1C] flex flex-col gap-6">
      <NavBarComp />
      <section
        id="tiimbooku"
        className="flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto font-chango"
      >
        <div className="flex flex-col lg:items-center gap-4 lg:gap-6 mb-6">
          <h1 className="lg:text-[81px] text-[26px] font-chango text-white lg:text-center uppercase">ON TIIMBOOKTU</h1>
          <p className="lg:text-xl lg:text-center text-white font-cinzel">
            Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa
            vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui
            malesuada. Neque vulputate non nunc in gravida fringilla arcu id
            quis. Diam massa purus dictum sed. Vitae mi suspendisse a est cras.
            Sit varius egestas laoreet metus facilisi. Magna quisque tellus
            magna felis vitae. Lorem ipsum dolor sit amet consectetur. <br /> <br />
            Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales
            elementum eu convallis dui malesuada. Neque vulputate non nunc in
            gravida fringilla arcu id quis. Diam massa purus dictum sed. Vitae
            mi suspendisse a est cras. Sit varius egestas laoreet metus
            facilisi. Magna quisque tellus magna felis vitae. <br /> <br />
            Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales
            elementum eu convallis dui malesuada. Neque vulputate non nunc in
            gravida fringilla arcu id quis. Diam massa purus dictum sed. Vitae
            mi suspendisse a est cras. Sit varius egestas laoreet metus
            facilisi. Magna quisque tellus magna felis vitae.
          </p>
        <Comment />
        </div>
      </section>
      <FooterComp />
    </div>
  );
};

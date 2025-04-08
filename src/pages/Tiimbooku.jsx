import React from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Input } from "../components/Input";
export const Tiimbooktu = () => {
  return (
    <div className="bg-[#1C1C1C] flex flex-col gap-6">
      <NavBarComp />
      <section
        id="tiimbooku"
        className="flex flex-col justify-center items-center gap-6 w-[88%] mx-auto font-[Chango]"
      >
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-[81px] text-white text-center">ON TIIMBOOKTU</h1>
          <p className="text-xl text-center text-white font-[Cinzel]">
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

          <div id="comment" className="bg-[#0A0A0A] mt-[20px] py-[30px] px-[33px] xl:w-[60%] rounded-xl flex flex-col gap-5">
            <h4 className="text-[26px] font-[Chango] text-white text-center">COMMENT?</h4>
            <div className="flex flex-col gap-4">
                <div className="flex w-full gap-[30px] items-center">
                    <Input label="First name" id="firstname" name="firstname" type="text" placeholder="Enter first name" />
                    <Input label="Last name" id="lastname" name="lastname" type="text" placeholder="Enter last name" />
                </div>
                <Input label="Email" id="email" name="email" type="email" placeholder="Enter your Email" />
                <Input label="Your message" type="textarea" name="message" id="message" placeholder="Enter your message" /> 
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
};

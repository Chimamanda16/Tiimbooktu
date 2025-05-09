import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const Fotografie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const shopData = [
    {
      img: "/image 96.png",
    },
    {
      img: "/image 95.png",
    },
    {
      img: "/image 94.png",
    },
    {
      img: "/image 97.png",
    },
    {
      img: "/image 92.png",
    },
  ];
  return (
    <div className="bg-black flex font-cizel flex-col gap-6 text-white">
      <NavBarComp />
      <div className="flex flex-col gap-8 w-[88%] mb-10 lg:mb-[120px] mx-auto">
        <div className="flex flex-col gap-1">
          <h1 className="lg:text-[70px] md:text-[40px] text-[32px] font-chango text-center uppercase">
            Fotografie
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shopData.map((shop, index) => {
            return (
              <div
                key={index}
                className="bg-white py-[15px] px-[19px] border flex flex-col gap-[19px] items-center text-center"
              >
                <img
                  className="w-[223px] h-[276px]"
                  src={shop.img}
                  alt="item1"
                />
              </div>
            );
          })}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Fotografie;

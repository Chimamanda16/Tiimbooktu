import { useRef, useEffect } from "react";
import "../Styles/FotografieComp.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";

const FotografieComp = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      new Swiper(swiperContainerRef.current, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, EffectCoverflow],
      });
    }
  }, []);

  return (
    <div
      className="swiper-container w-full relative h-[500px] mx-auto overflow-hidden"
      ref={swiperContainerRef}
    >
      <div className="swiper-wrapper relative">
        {[
          { id: 2, img: "/image 92.png", desc: "Tatto" },
          { id: 4, img: "/image 97.png", desc: "Illegal" },
          { id: 9, img: "/image 94.png", desc: "Skeleton. Cloak. Scythe" },
          { id: 5, img: "/image 95.png", desc: "Knowledge" },
          { id: 4, img: "/image 96.png", desc: "Illegal" },
        ].map((img, index) => (
          <div
            className="swiper-slide relative z-[9999] flex items-center"
            key={index}
          >
            <img
              src={img.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-[20px] cursor-grab"
            />
          </div>
        ))}
      </div>
      <div className="curve_bottom rounded-t-[100%]"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default FotografieComp;

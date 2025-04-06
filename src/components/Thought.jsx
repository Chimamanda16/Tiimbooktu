import { useRef, useEffect } from "react";
import "../Styles/ThoughtComp.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";

const ThoughtComp = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      new Swiper(swiperContainerRef.current, {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        modules: [Navigation, EffectCoverflow],
      });
    }
  }, []);

  return (
    <div className="swiper-container relative h-[400px] mx-auto overflow-hidden" ref={swiperContainerRef}>
      <div className="swiper-wrapper">
        {[ 
          { img: "/thought-card1.png", desc: "Tatto" },
          { img: "/thought-card2.png", desc: "Skeleton. Cloak. Scythe" },
          { img: "/thought-card3.png", desc: "Knowledge" },
          { img: "/thought-card4.png", desc: "Illegal" },
        ].map((img, index) => (
          <div className="swiper-slide flex items-center w-[250px] h-[350px]" key={index}>
            <img
              src={img.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-[20px]"
            />
            <p className="text-white lg:pl-4 lg:mt-4 text-start font-light text-[20px]">{img.desc}</p>
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>

      {/* Decorative circle using Tailwind */}
      <div className="absolute top-[-20%] left-0 w-[120%] h-[100px] bg-[#1c1c1c] rounded-full z-[100]"></div>
    </div>
  );
};

export default ThoughtComp;
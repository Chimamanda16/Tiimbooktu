import { useRef, useEffect, useState } from "react";
import "../Styles/FotografieComp.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

const images = [
  { id: 2, src: "/thought-card1.png", text: "Tattoo" },
  { id: 9, src: "/thought-card2.png", text: "Skeleton. Cloak. Scythe" },
  { id: 5, src: "/thought-card3.png", text: "Knowledge" },
  { id: 4, src: "/thought-card4.png", text: "Illegal" },
];

const ThoughtComp = () => {
  const swiperContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile && swiperContainerRef.current) {
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
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-full  py-6 space-y-6">
        {images.map((img, index) => (
          <div key={index}>
            <Link to={`/blog/${img.id}`}>
              <img
                src={img.src}
                alt={`Thought Card ${index}`}
                className="w-full h-[250px] object-cover rounded-[20px]"
              />
            </Link>
            <p className="pt-2 text-base">{img.text}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="swiper-container w-full relative h-[500px] mx-auto overflow-hidden"
      ref={swiperContainerRef}
    >
      <div className="swiper-wrapper relative">
        {images.map((img, index) => (
          <div
            className="swiper-slide relative z-[9999] flex items-center"
            key={index}
          >
            <Link to={`/blog/${img.id}`}>
              <img
                src={img.src}
                alt={`Thought Card ${index}`}
                className="w-full h-[90%] object-cover rounded-[20px] cursor-grab"
              />
            </Link>
            <p className="pt-6 text-base">{img.text}</p>
          </div>
        ))}
      </div>
      <div className="curve_bottom rounded-t-[100%]"></div>
      <div className="swiper-button-next !top-[45%]"></div>
      <div className="swiper-button-prev !top-[45%]"></div>
    </div>
  );
};

export default ThoughtComp;

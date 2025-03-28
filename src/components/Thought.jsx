import "../Styles/ThoughtComp.css";
import { useRef, useEffect } from "react";
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
    <div className="swiper-container" ref={swiperContainerRef}>
      <div className="swiper-wrapper">
        {["/thought-card1.png", "/thought-card2.png", "/thought-card3.png", "/thought-card4.png"].map((img, index) => (
          <div className="swiper-slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slide-img" />
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default ThoughtComp;

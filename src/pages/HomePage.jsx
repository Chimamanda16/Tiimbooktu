import NavBarComp from "../components/Navbar";
import HeroComp from "../components/Hero";
import AboutComp from "../components/About";
import FotografieComp from "../components/Fotografie";
import ShopComp from "../components/Shop";
import FooterComp from "../components/Footer";
import ThoughtComp from "../components/Thought";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomeComp() {
    const location = useLocation();

    useEffect(() => {
      setTimeout(() => {
        if (location.hash) {
          const id = location.hash.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }, [location]);

    return (
        <div className="bg-[#1c1c1c] text-white font-[Satoshi]">
            <NavBarComp />
            <HeroComp />
            <AboutComp />
            <div className="text-center">
                <h1 className="font-[Chango] text-[40px] lg:text-[112px] max-md:text-5xl max-sm:text-4xl">
                    Thought
                </h1>
                <ThoughtComp />
                <div className="flex justify-center items-center">
                    <button className="bg-[#cdffad] text-[#1c1c1c] font-normal rounded-[22px] mt-6 px-4 py-2">
                        View all
                    </button>
                </div>
            </div>
            <FotografieComp />
            <ShopComp />
            <FooterComp />
        </div>
    );
}

export default HomeComp;

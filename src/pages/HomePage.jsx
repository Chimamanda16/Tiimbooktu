import NavBarComp from "../components/Navbar";
import HeroComp from "../components/Hero";
import AboutComp from "../components/About";
import FotografieComp from "../components/Fotografie";
import ShopComp from "../components/Shop";
import FooterComp from "../components/Footer";
import ThoughtComp from "../components/Thought";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";

function HomeComp() {
  const location = useLocation();
  const { isSearching } = useArtworkStore();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  }, [location]);

  return (
    <div className="bg-[#1c1c1c] text-white font-[Satoshi]">
      <NavBarComp />
      {!isSearching && (
        <>
          <HeroComp />
          <AboutComp />
          <div className="text-center">
            <h1 className="font-[Chango] lg:-mt-24 relative z-[999] text-[40px] lg:text-[112px] max-md:text-5xl max-sm:text-4xl">
              Thought
            </h1>
            <ThoughtComp />
            <div className="bg-[#0A0A0A] py-8">
              <h2 className="font-[Chango] text-[40px] lg:text-[112px] mb-5">
                Fotografie
              </h2>
              <FotografieComp />
            </div>
          </div>
        </>
      )}
      <ShopComp />
      <FooterComp />
    </div>
  );
}

export default HomeComp;

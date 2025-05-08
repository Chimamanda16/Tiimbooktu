import React, { useEffect } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

export const Tiimbooktu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#1C1C1C] flex flex-col gap-6">
      <NavBarComp />
      <section
        id="tiimbooku"
        className="flex flex-col pb-8 justify-center items-center gap-6 w-[88%] mx-auto"
      >
        <div className="flex flex-col lg:items-center gap-4 lg:gap-6 mb-6">
          <h1 className="lg:text-[81px] text-[26px] font-chango text-white lg:text-center uppercase">
            ON TIIMBOOKTU
          </h1>
          <p className="lg:text-xl lg:text-center text-white font-glacial">
            There is a freedom of spirit that comes with art - or is supposed
            to. It is this freedom that not only inspires innovation, but adds
            an edge to it, a measure of rebellion, a carefree disregard for
            rules and convention and, of course, the rightful demand for
            exchange of commensurate value. <br /> <br /> Only oftentimes, sad
            as it is, artists place a structure to their person and protocol to
            their art which dampens its vibrance and gates it from people alien
            to that field. <br /> <br />
            It is in this rigid world of structure and protocol that Tiimbooktu
            comes in. Tiimbooktu is raw, unfettered expression. Tiimbooktu is as
            much the telling of stories as it is the selling of stories via
            diverse means. It is the preservation of tradition and the very core
            of art and at the same time, the evolution and advancement of it. It
            is vibes|the cool balance of ART, COMMERCE and CELEBRITY! <br />{" "}
            <br />
            Here, art needn’t be boring, conservative and weirdly mysterious.
            Here, it is simple, elegant and insurgent; the redefinition of
            artistry. Art is the deity; Tiimbooktu, the religion; and I, many
            things (as time will tell) but first, a Free Disciple and a writer.{" "}
            <br />
            <br />
            Welcome. <br />
            <br />
            Your friend,
            <br /> Ntwadumela "KI" Jagoban
          </p>
        </div>
      </section>
      <FooterComp />
    </div>
  );
};

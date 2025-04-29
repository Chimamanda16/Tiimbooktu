import NavBarComp from "../components/Navbar";
import HeroComp from "../components/Hero";
import AboutComp from "../components/About";
import FotografieComp from "../components/Fotografie";
import ShopComp from "../components/Shop";
import FooterComp from "../components/Footer";
import ThoughtComp from "../components/Thought";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useArtworkStore } from "../Store/useArtworkStore";
import axiosInstance from "../lib/axios";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

function HomeComp() {
  const location = useLocation();
  const { isSearching } = useArtworkStore();
  const [email, setEmail] = useState("");
  const [loading, setIsLoading] = useState(false);

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

  const sendNewsLetter = async () => {
    setIsLoading(true);
    let payload = {
      email: email,
    };
    try {
      const res = await axiosInstance.post("/newsletter/subscribe", payload);
      toast.success(res.data.message);
      if (res) {
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error fetching artworks:", err);
      toast.error(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#1c1c1c] text-white font-[Satoshi]">
      <NavBarComp />
      {!isSearching && (
        <>
          <HeroComp />
          <AboutComp />
          <div className="text-center">
            <h1 className="font-[Chango] lg:-mt-24 relative z-[999] text-[40px] lg:text-[112px] max-md:text-5xl max-sm:text-4xl">
              Thoughts
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
      <div className="w-[88%] max-w-6xl mx-auto my-10 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-7xl font-bold mb-12 font-[Chango]">
            SIGN UP FOR NEWSLETTERS
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto">
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your E-Mail"
            className="flex-grow py-3 px-4 bg-transparent border border-gray-700 text-white"
          />
          <button
            disabled={loading}
            onClick={sendNewsLetter}
            className="bg-green-200 flex justify-center text-black py-3 px-8 font-medium"
          >
            {!loading ? "Subscribe" : <Loader className="animate-spin" />}
          </button>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default HomeComp;

import NavBarComp from "./Navbar";
import HeroComp from "./Hero";
import AboutComp from "./About";
import FotografieComp from "./Fotografie";
import ShopComp from "./Shop";
import FooterComp from "./Footer";
import ThoughtComp from "./Thought";

function HomeComp() {
    return (
        <div className="bg-[#1c1c1c] text-white font-[Satoshi]">
            <NavBarComp />
            <HeroComp />
            <AboutComp />
            <div className="text-center">
                <h1 className="font-[MyFont] text-[40px] lg:text-[112px] max-md:text-5xl max-sm:text-4xl">
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

import NavBarComp from "./Navbar";
import HeroComp from "./Hero";
import AboutComp from "./About";
import FotografieComp from "./Fotografie";
import ShopComp from "./Shop";
import FooterComp from "./Footer";
import ThoughtComp from "./Thought";
import "../styles/Home.css";

function HomeComp(){
    return (
        <div>
            <NavBarComp />
            <HeroComp />
            <AboutComp />
            <ThoughtComp />
            <FotografieComp />
            <ShopComp />
            <FooterComp />
        </div>
    )
}

export default HomeComp;
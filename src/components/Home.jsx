import NavBarComp from "./Navbar";
import HeroComp from "./Hero";
import AboutComp from "./About";
import "../styles/Home.css";
import FotografieComp from "./Fotografie";
import ShopComp from "./Shop";
import FooterComp from "./Footer";

function HomeComp(){
    return (
        <div>
            <NavBarComp />
            <HeroComp />
            <AboutComp />
            <FotografieComp />
            <ShopComp />
            <FooterComp />
        </div>
    )
}

export default HomeComp;
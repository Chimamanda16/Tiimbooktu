import NavBarComp from "./Navbar";
import HeroComp from "./Hero";
import AboutComp from "./About";
import "../styles/Home.css";
import FotografieComp from "./Fotografie";

function HomeComp(){
    return (
        <div>
            <NavBarComp />
            <HeroComp />
            <AboutComp />
            <FotografieComp />
        </div>
    )
}

export default HomeComp;
import NavBarComp from "./Navbar";
import HeroComp from "./Hero";
import AboutComp from "./About";
import FotografieComp from "./Fotografie";
import ShopComp from "./Shop";
import FooterComp from "./Footer";
import ThoughtComp from "./Thought";
import "../Styles/Home.css";

function HomeComp(){
    return (
      <div>
        <NavBarComp />
        <HeroComp />
        <AboutComp />
        <div className="thought">
          <h1>Thought</h1>
          <ThoughtComp />
          <div className="center">
            {" "}
            <button className="gallery-btn">View all</button>
          </div>
        </div>
        <FotografieComp />
        <ShopComp />
        <FooterComp />
      </div>
    );
}

export default HomeComp;

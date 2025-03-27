import "../Styles/NavBar.css";
import { useState } from "react";

function NavBarComp(){
  const [menuOpen, setMenuOpen] = useState(false);
    return (     
        <nav className="navbar">
          <p className="navbar-heading">Tiimbooktu</p>
  
          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <div className={`nav-items ${menuOpen ? "show" : ""}`}>
            <p>Tiimbooktu</p>
            <p>Thought</p>
            <p>Fotografie</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
  
        <button className={`shop-now ${menuOpen ? "show" : ""}`}>Shop Now</button>
      </nav>    
    )
}

export default NavBarComp;
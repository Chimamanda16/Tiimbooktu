import "../Styles/NavBar.css";

function NavBarComp(){
    return (     
        <nav className="navbar">
        <p className="navbar-heading">Tiimbooktu</p>
  
        <div className="nav-items">
          <p>Tiimbooktu</p>
          <p>Thought</p>
          <p>Fotografie</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
  
        <button className="shop-now">Shop Now</button>
      </nav>    
    )
}

export default NavBarComp;
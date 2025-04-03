import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:px-[100px] lg:py-[20px] relative mb-[10px] p-4">
      <a href="/"><h1 className="font-[Anton] text-[30px] text-white font-bold uppercase">Tiimbooktu</h1></a>

      {/* Hamburger Menu */}
      <div
        className="lg:hidden text-2xl cursor-pointer flex"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Items */}
      <div
        className={`lg:flex items-center gap-[36px] max-lg:w-full flex-row text-[15px] hidden`}
      >
        <Link to='/' className="cursor-pointer text-[#d9d9d9]">Tiimbooktu</Link>
        <p className="cursor-pointer text-[#d9d9d9]">Thought</p>
        <p className="cursor-pointer text-[#d9d9d9]">Fotografie</p>
        <p className="cursor-pointer text-[#d9d9d9]">About</p>
        <p className="cursor-pointer text-[#d9d9d9]">Contact Us</p>
      </div>

      {/* Shop Now Button */}
      <button
        className={`lg:flex bg-[#cdffad] justify-center max-lg:bg-[#f8f8f8] left-0 max-lg:font-black max-lg:absolute text-[#1c1c1c] rounded-[22px] p-[10px] top-[60px] cursor-pointer max-lg:w-full max-lg:rounded-none max-lg:text-[17px] ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        Shop Now
      </button>
    </nav>
  );
}

export default NavBarComp;

import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:px-[100px] lg:py-[20px] relative mb-[10px] p-4">
      <a href="/"><img src="/assets/logos/tiimbooku.png" alt="tiimbooku" /></a>

      {/* Hamburger Menu */}
      <div
        className="lg:hidden text-2xl cursor-pointer flex text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Items */}
      <div
        className={`lg:flex items-center gap-[36px] max-lg:w-full flex-row text-[15px] hidden`}
      >
        <Link to='/' className="cursor-pointer text-[#d9d9d9] uppercase flex gap-1 items-end">
        Tiimbooktu
        <img src="/assets/icons/dropdown-icon-black.svg" alt="dropdown" />
        </Link>
        <p className="cursor-pointer text-[#D9D9D9] uppercase">Thought</p>
        <p className="cursor-pointer text-[#d9d9d9] uppercase">Fotografie</p>
        <p className="cursor-pointer text-[#d9d9d9] uppercase">About</p>
        <p className="cursor-pointer text-[#d9d9d9] uppercase">Contact Us</p>
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

import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mb-[10px] text-[#fff]">
      {/* Top Nav */}
      <div className="flex justify-between items-center border-b-2 border-[#353535] px-[5%] py-[1%]">
        <img src="/assets/logos/tiimbooktu.png" alt="Logo" />

        {/* Search Input */}
        <div className="relative w-[60%] max800:hidden">
          <img
            className="absolute top-1/2 left-4 -translate-y-1/2"
            src="/assets/icons/Magnifier.svg"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-auto rounded-none bg-transparent border border-[#34343C] py-[14px] pl-12 pr-5"
          />
        </div>

        {/* Search Icon + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Show search icon only on mobile */}
          <img
            src="/assets/icons/Magnifier.svg"
            alt="Search Icon"
            className="hidden max800:block w-6 h-6"
          />

          {/* Hide user icons on mobile */}
          <div className="flex gap-2 max800:hidden">
            <img src="/assets/icons/user-rounded.svg" alt="" />
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div>

          {/* Hamburger/X toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block max800:block hidden"
          >
            {menuOpen ? (
              <img src="/assets/icons/close.svg" alt="Close Menu" />
            ) : (
              <img src="/assets/icons/menu-icon-white.svg" alt="Open Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Nav (Links and Icons) */}
      <div className="flex justify-between items-center border-b-2 border-[#353535] px-[5%] py-[2%] max800:hidden">
        <div className="flex gap-6">
          <Link>Tiimbooktu</Link>
          <Link>Thought</Link>
          <Link>Fotografie</Link>
          <Link>About</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="flex justify-between gap-6">
          <img src="/assets/icons/Bag-4.svg" alt="" />
          <img src="/assets/icons/Heart.svg" alt="" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col border-[2px] mx-[1%] border-[#595959] rounded-[20px] gap-4 bg-[#0A0A0A] px-[5%] py-6 max800:flex">
          <div className="flex ">
            <Link>Tiimbooktu</Link>
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div>
          <div className="flex ">
            <Link>Content</Link>
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div>
          <Link>Cart</Link>
          <div className="flex ">
            <Link>Profile</Link>
            <img src="/assets/icons/nav-arrow-down.svg" alt="" />
          </div>
          <Link>Wishlist</Link>
          <Link>Fotos</Link>
          <Link>Rich Us</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBarComp;

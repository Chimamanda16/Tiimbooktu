import { useState } from "react";

function NavBarComp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-[10px] py-[20px] relative mb-[10px] max-lg:px-5 max-sm:px-2">
      <p className="font-[Anton] text-[30px] font-bold uppercase">Tiimbooktu</p>

      {/* Hamburger Menu */}
      <div
        className="hidden text-2xl cursor-pointer max-lg:block"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Items */}
      <div
        className={`flex items-center gap-[36px] max-lg:absolute max-lg:left-0 top-[60px] max-lg:w-full max-lg:flex-col max-lg:bg-[#f8f8f8] max-lg:text-black text-[15px] ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <p className="cursor-pointer text-[#d9d9d9] max-lg:text-black">Tiimbooktu</p>
        <p className="cursor-pointer text-[#d9d9d9] max-lg:text-black">Thought</p>
        <p className="cursor-pointer text-[#d9d9d9] max-lg:text-black">Fotografie</p>
        <p className="cursor-pointer text-[#d9d9d9] max-lg:text-black">About</p>
        <p className="cursor-pointer text-[#d9d9d9] max-lg:text-black">Contact Us</p>
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

import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarComp() {

  return (
    <nav className="relative mb-[10px] text-[#fff]">
        <div className="flex justify-between items-center border-b-2 border-[#353535] px-[5%] py-[1%]">
            <img src="/assets/logos/tiimbooktu.png" alt="" />
            <div className="relative w-[60%]">
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
            <div className="flex">
                <img src="/assets/icons/user-rounded.svg" alt="" />
                <img src="/assets/icons/nav-arrow-down.svg" alt="" />
            </div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#353535] px-[5%] py-[2%] ">
            <div className="flex gap-6">
                <div>
                  <Link>Tiimbooktu</Link>
                </div>
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
    </nav>
  );
}

export default NavBarComp;

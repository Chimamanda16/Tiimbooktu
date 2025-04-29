import React from "react";

export const Header = () => {
  return (
    <div className="border-b w-full border-b-[#2B2B2B] bg-[#0A0A0A] py-[26px] px-6 flex justify-between">
      <h1 className="uppercase font-chango text-[26px] text-white">
        Welcome back, Admin
      </h1>
      <div className="flex gap-2 items-center">
        <div className="h-[35px] w-[35px] bg-[#D9D9D9] rounded-full"></div>
        <img src="/assets/icons/dropdown-icon-white.svg" alt="" />
      </div>
    </div>
  );
};

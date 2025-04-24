import React from "react";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
    return (
        <div className="lg:flex hidden flex-col h-screen justify-start w-[355px] bg-[#0A0A0A] border-r border-r-[#353535]">
            <div className="border-b w-full border-b-[#353535] p-6">
                <img src="/assets/logos/tiimbooktu.png" alt="Logo" />
            </div>
            <div className="px-6 py-8 flex flex-col">
                <nav className="flex flex-col gap-2">
                    <NavLink
                    end
                        to="/dashboard"
                        className={({ isActive }) => (isActive ? 'nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]' : 'nav-link')}
                    >
                        <img src="/assets/icons/artwork.svg" alt="artwork" />
                        Artwork
                    </NavLink>
                    <NavLink
                        to="/dashboard/orders"
                        className={({ isActive }) => (isActive ? 'nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]' : 'nav-link')}
                    >
                        <img src="/assets/icons/order.svg" alt="order" />
                        Orders
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
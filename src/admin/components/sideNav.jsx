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
          <NavLink end to="/dashboard">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? "nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]"
                    : "nav-link"
                }
              >
                <img
                  src={
                    isActive
                      ? "/assets/icons/overview.svg"
                      : "/assets/icons/overview-white.svg"
                  }
                  alt="overview"
                />
                Overview
              </div>
            )}
          </NavLink>
          <NavLink to="/dashboard/artworks">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? "nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]"
                    : "nav-link"
                }
              >
                <img
                  src={
                    isActive
                      ? "/assets/icons/artwork-black.svg"
                      : "/assets/icons/artwork.svg"
                  }
                  alt="artwork"
                />
                Artwork
              </div>
            )}
          </NavLink>
          <NavLink end to="/dashboard/orders">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? "nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]"
                    : "nav-link"
                }
              >
                <img
                  src={
                    isActive
                      ? "/assets/icons/order-black.svg"
                      : "/assets/icons/order.svg"
                  }
                  alt="order"
                />
                Orders
              </div>
            )}
          </NavLink>
          <NavLink to="/dashboard/feedbacks">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? "nav-link bg-[#CDFFAD] rounded-[8px] !text-[#0A0A0A]"
                    : "nav-link"
                }
              >
                <img
                  src={
                    isActive ? "/assets/icons/fdb.svg" : "/assets/icons/fdb.svg"
                  }
                  alt="artwork"
                />
                Feedbacks
              </div>
            )}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

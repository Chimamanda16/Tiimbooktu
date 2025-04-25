import React from "react";
import { SideNav } from "../components/sideNav";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full h-screen overflow-y-auto">
                <Header />
                    <div className="w-full h-[90vh] overflow-y-auto bg-[#1C1C1C] px-6 py-8">
                        <Outlet />
                    </div>
            </div>
        </div>
    )
}
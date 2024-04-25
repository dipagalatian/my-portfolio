import { Bars3Icon } from "@heroicons/react/16/solid/index.js";
import React from "react";

interface Props {
    openNav: () => void;
}

export const Navbar = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] h-[100%] mx-auto">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    Port
                    <span className="text-yellow-500">folio.</span>
                </h1>
                <div className="nav-link">Home</div>
                <div className="nav-link">About</div>
                <div className="nav-link">Education</div>
                <div className="nav-link">Project</div>
                <div className="nav-link">Contact</div>
                <div onClick={openNav}>
                    <Bars3Icon className="text-yellow-300 w-[2rem] md:hidden h-[2rem] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

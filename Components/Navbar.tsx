import { Bars3Icon } from "@heroicons/react/16/solid/index.js";
import Link from "next/link";
import React from "react";

interface Props {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] h-[100%] mx-auto">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    Port
                    <span className="text-yellow-500">folio.</span>
                </h1>
                <Link href="#home" className="nav-link">
                    Home
                </Link>
                <Link href="#about" className="nav-link">
                    About
                </Link>
                <Link href="#education" className="nav-link">
                    Education
                </Link>
                <Link href="#skill" className="nav-link">
                    Skill
                </Link>
                <Link href="#project" className="nav-link">
                    Project
                </Link>
                <Link href="#footer" className="nav-link">
                    Contact
                </Link>
                <div onClick={openNav}>
                    <Bars3Icon className="text-yellow-300 w-[2rem] md:hidden h-[2rem] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
export default Navbar;

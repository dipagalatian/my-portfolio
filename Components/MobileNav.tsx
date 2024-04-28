import { XMarkIcon } from "@heroicons/react/16/solid/index.js";
import Link from "next/link";
import React from "react";

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <Link href="#home" className="nav-link-mobile" onClick={closeNav}>
                    Home
                </Link>
                <Link href="#about" className="nav-link-mobile" onClick={closeNav}>
                    About
                </Link>
                <Link href="#education" className="nav-link-mobile" onClick={closeNav}>
                    Education
                </Link>
                <Link href="#skill" className="nav-link-mobile" onClick={closeNav}>
                    Skill
                </Link>
                <Link href="#project" className="nav-link-mobile" onClick={closeNav}>
                    Project
                </Link>
                <Link href="#footer" className="nav-link-mobile" onClick={closeNav}>
                    Contact
                </Link>
                {/* <div className="nav-link-mobile">Home</div>
                <div className="nav-link-mobile">About</div>
                <div className="nav-link-mobile">Education</div>
                <div className="nav-link-mobile">Project</div>
                <div className="nav-link-mobile">Contact</div> */}
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
                <XMarkIcon />
            </div>
        </div>
    );
};
export default MobileNav;

import { Hero } from "@/Components/Hero";
import { MobileNav } from "@/Components/MobileNav";
import { Navbar } from "@/Components/Navbar";
import React, { useState } from "react";

export default function Homepage() {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
        <div className="overflow-x-hidden">
            <div>
                {/* NAVBAR */}
                <MobileNav nav={nav} closeNav={closeNav} />
                <Navbar openNav={openNav} />
                {/* HERO SECTION */}
                <Hero />
            </div>
        </div>
    );
}
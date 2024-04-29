import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
    return (
        <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-yellow-400">jects</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div data-aos="fade-up">
                    <Link href="https://github.com/dipagalatian/my-portfolio" target="_blank">
                        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                            <Image src="/images/portfolio.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <Link href="https://github.com/dipagalatian/fe-threads-app" target="_blank">
                        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                            <Image src="/images/d'world.jpg" alt="d'world" layout="fill" className="object-contain" />
                        </div>
                    </Link>
                </div>
                {/* coming soon project... */}
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/comming-soon.jpg" alt="project" layout="fill" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

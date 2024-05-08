import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Projects = () => {
    const data = {
        dworldApp: `D'World app is a website-based social media application inspired by the application Thread. The main feature of this application is that
        users can share image and text with other users. Users can also comment and like other users' posts, and of course can follow other
        users to make friends`,
        portfolio: `This is my personal portfolio that contains personal information such as who I am, my educational background, my expertise in the field of software development and details of the projects that I have created as a full-stack developer`,
    };
    const github = {
        portfolio: "https://github.com/dipagalatian/my-portfolio",
        dworldApp: "https://github.com/dipagalatian/fe-dworld-app",
    };
    return (
        <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-yellow-400">jects</span>
            </h1>
            {/* <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]"> */}
            <div>
                {/* <div data-aos="fade-up">
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
                </div> */}
                {/* coming soon project... */}
                {/* <div data-aos="fade-up" data-aos-delay="600">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/comming-soon.jpg" alt="project" layout="fill" className="object-contain" />
                    </div>
                </div> */}

                {/* projects card */}
                <ProjectCard title="Portfolio Website" tech1="Next Js" tech2="Tailwind" tech3="React" tech4="TypeScript" image="/images/portfolio-img.png" desc={data.portfolio} code={github.portfolio} />
                <ProjectCard title="D'World App" tech1="React" tech2="ChakraUI" tech3="Node Js" tech4="PostgreSQL" image="/images/d'world-app.png" desc={data.dworldApp} code={github.dworldApp} />
            </div>
        </div>
    );
};

export default Projects;

import { AcademicCapIcon, CodeBracketSquareIcon } from "@heroicons/react/16/solid/index.js";
import React from "react";

const Education = () => {
    return (
        <div id="education" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
            <p className="heading">
                My <span className="text-yellow-400">Education</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div data-aos="fade-right">
                    <div
                        className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                    uppercase font-semibold text-center p-[2rem]"
                    >
                        <AcademicCapIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">55 Jakarta Highschool</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal ">Jul 2016 - Jul 2019</p>
                        <p className="text-[15px] text-[#d3d2d2] font-normal lowercase"> Finish general education in Science</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div
                        className="bg-orange-700 hover:scale-110 transform transition-all duration-300 
                    uppercase font-semibold text-center p-[2rem]"
                    >
                        <AcademicCapIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">UPN Veteran Jakarta</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">Sep 2019 - Sep 2023</p>
                        <p className="text-[15px] text-[#d3d2d2] font-normal lowercase">Get Bachelor&apos;s degree of Mechanical Engineering</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div
                        className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
                    uppercase font-semibold text-center p-[2rem]"
                    >
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">PT. DumbWays Indonesia</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">Nov 2023 - Present</p>
                        <p className="text-[13px] text-[#d3d2d2] font-normal lowercase">Join coding bootcamp as Full-stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;

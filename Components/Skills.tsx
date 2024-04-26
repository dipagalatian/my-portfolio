import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">
                Skill & <span className="text-yellow-400">Technology</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-[4rem] ">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className=" text-blue-400 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className=" text-cyan-400 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className=" text-green-500 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className=" text-sky-700 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className=" text-green-500 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className=" text-red-700 text-[3rem]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className=" text-cyan-400 text-[3rem]" />
                </div>
            </div>
        </div>
    );
};

export default Skills;

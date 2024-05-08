import { CodeBracketSquareIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    desc: string;
    code: string;
}

const ProjectCard = ({ image, tech1, tech2, tech3, tech4, title, desc, code }: Props) => {
    return (
        <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
                <Image src={`${image}`} alt={title} width={500} height={500} className="object-contain rounded-xl mx-auto shadow-md" />
            </div>

            <div>
                <h1 className="text-white text-[25px]">{title}</h1>
                <Link href={code} target="_blank">
                    <span className="flex text-white opacity-65 gap-2 mt-1 ">
                        <CodeBracketSquareIcon className="w-6" />
                        <p className="text-white">github</p>
                    </span>
                </Link>
                <p className="text-white opacity-65 text-[15px] mt-[1rem] text-justify">{desc}</p>
                <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
                    <h1 className="py-3 bg-blue-700 text-white rounded-lg text-center">{tech1}</h1>
                    <h1 className="py-3 bg-blue-700 text-white rounded-lg text-center">{tech2}</h1>
                    <h1 className="py-3 bg-blue-700 text-white rounded-lg text-center">{tech3}</h1>
                    <h1 className="py-3 bg-blue-700 text-white rounded-lg text-center">{tech4}</h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

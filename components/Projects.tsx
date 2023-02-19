import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";


type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 xs:text-lg sm:text-lg md:text-xl base:text-2xl lg:text-3xl xl:text-3xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DAFB]/80">
                {projects.map((project, i) => (
                    <motion.div
                        key={project._id}
                        className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
                    >
                        <Link key={project._id} href={project.linkToBuild} rel="noopener noreferrer">
                            <a target="_blank" rel="noopener noreferrer">
                                <motion.img
                                    initial={{
                                        y: -300,
                                    }}
                                    transition={{ duration: 1.2 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    src={urlFor(project?.image).url()}
                                    className="md:mb-0 p-5 xs:mt-20 sm:mt-20 md:mt-10 lg:mt-15 xl:mt-20 flex-shrink-0 rounded md:rounded-lg 
                                    xs:w-[auto] xs:h-[200px] sm:w-[auto] sm:h-[250px] md:w-[auto] md:h-[300px] lg:w-[auto] lg:h-[350px] xl:w-[auto] xl:h-[400px] 
                                    object-contain cursor-pointer"
                                />
                            </a>
                        </Link>

                        <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                            <h4 className="xs:text-lg sm:text-xl md:text-2xl base:text-xl lg:text-2xl xl:text-2xl font-semibold text-center">
                                <span className="decoration-[#61DAFB]/50 underline">
                                    Project {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            <p className="xs:text-sm sm:text-md md:text-lg base:text-lg lg:text-xl xl:text-xl text-center md:text-left">
                                {project.summary}
                            </p>
                        </div>
                        <div className="pb-10 xs:text-center">
                            <Link key={project._id} href={project.linkToDemo}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <button className="heroButton">Video Demo</button>
                                </a>
                            </Link>

                            <Link key={project._id} href={project.linkToDeployment}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <button className="heroButton">Deployment</button>
                                </a>
                            </Link>

                            <Link key={project._id} href={project.linkToGithub}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <button className="heroButton">Github Repo</button>
                                </a>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-gray-300/20 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default Projects;
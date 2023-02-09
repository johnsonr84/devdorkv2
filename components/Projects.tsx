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
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
                                    className="md:mb-0 p-5 flex-shrink-0 w-70 h-70 rounded md:rounded-lg md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] object-contain cursor-pointer"
                                />
                            </a>
                        </Link>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="decoration-[#61DAFB]/50 underline">
                                    Project {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                {project.summary}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-gray-300/20 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default Projects;
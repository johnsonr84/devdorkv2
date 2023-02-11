import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className="rounded-full border object-cover xs:h-10 xs:w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
      />
      <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white xs:h-10 xs:w-10 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="xs:text-xs sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
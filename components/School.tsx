import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { Education } from "../typings";

type Props = {
  educations: Education[];
};

function School({ educations }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 xs:text-lg sm:text-lg md:text-xl base:text-2xl lg:text-3xl xl:text-3xl">
        Education
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DAFB]/80">
        {educations?.map((education) => (
          <EducationCard key={education._id} education={education} />
        ))}
      </div>
    </motion.div>
  )
}

export default School;
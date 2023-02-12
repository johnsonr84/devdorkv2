import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col px-5 rounded-lg items-center space-y-7 flex-shrink-0 
    xs:w-[350px] xs:h-[500px] sm:w-[350px] md:h-[500px] md:w-[800px] lg:h-[550px] lg:w-[700px] xl:h-[575px] xl:w-[800px] 
    snap-center text-white bg-gray-700/70 p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 
    overflow-y-scroll scrollbar-thin scrollbar-track-gray-300/20 scrollbar-thumb-[#61DAFB]/80"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        className="rounded-full md:rounded-full 
        xs:w-[100px] xs:h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] object-cover object-center"
      />

      <div className="px-8 md:px-10 mt-5">
        <h4 className="xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl font-light">{experience.jobTitle} - {experience.company}</h4>
        <p className="font-bold text-sm md:text-2xl lg:text-lg xl:text-2xl mt-1"></p>
        <div className="flex flex-wrap my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="xs:w-[20px] xs:h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] rounded-full m-1"
              src={urlFor(technology.image)?.url()}
            />
          ))}
        </div>

        <p className="uppercase py-2 text-gray-300 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-md">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
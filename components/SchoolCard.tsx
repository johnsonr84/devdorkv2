import React from "react";
import { motion } from "framer-motion";
import { Education } from "../typings";
import { urlFor } from "../sanity";


type Props = {
  school: Education;
};

function EducationCard({ school }: Props) {
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
        src={urlFor(school.degreeImage).url()}
        className="rounded xs:w-[auto] xs:h-[125px] sm:w-[auto] sm:h-[150px] md:w-[auto] md:h-[200px] lg:w-[auto] lg:h-[250px] xl:w-[auto] xl:h-[300px] 
        object-cover object-center"
      />

      <div className="px-8 md:px-10 mt-5">
        <h4 className="xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl font-light">{school.degreeTitle} - {school.school}</h4>
        <p className="font-bold text-sm md:text-2xl lg:text-lg xl:text-2xl mt-1"></p>

        <p className="uppercase py-2 text-gray-300 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg">
          {new Date(school.dateStarted).toDateString()} -{" "}
          {new Date(school.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-md">
          {school.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default EducationCard;
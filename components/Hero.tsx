import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
// import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey! I am ${pageInfo?.name}. Thanks for stopping by`,
      'I enjoy building apps and software that helps others',
      'This Full Stack website was built with...',
      'React, TypeScript, NextJS, Tailwind on the Front End and...',
      'Sanity CMS for the Back End for...',
      'lightening fast performance and SEO optimization!',
    ],
    loop: true,
    typeSpeed: 50,
    delaySpeed: 1000,
    deleteSpeed: 30,
  })
  return (
    <div className='h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}
      <img
        className="relative rounded xs:h-[250px] xs:w-[350] sm:h-[350px] sm:w-[450px] md:h-[400px] md:w-[550px] lg:h-[450px] lg:w-[650px] xl:h-[500px] xl:w-[750px] mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10 p-2">
          <span className="mr-3 xs:text-lg sm:text-lg md:text-xl base:text-2xl lg:text-3xl xl:text-3xl">{text}</span>
          <Cursor cursorColor="#61DAFB" />
        </h1>

        <div className="pb-10 xs:text-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
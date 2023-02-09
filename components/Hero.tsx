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
            'Sanity CMS for the Back End to server side render for...',
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
                className="relative rounded-full h-[400px] w-[400px] md:h-[4500px] md:w-[500px] xl:h-[600px] xl:w-[600px] mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
            />
            <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10 p-2">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#61DAFB" />
        </h1>

        <div className="pb-10">
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
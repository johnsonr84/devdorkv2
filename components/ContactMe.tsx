import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
    pageInfo: PageInfo;
};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({ pageInfo }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto: robertcjohnson1984@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. My email is ${formData.email}`
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 xs:text-lg sm:text-lg md:text-xl base:text-2xl lg:text-3xl xl:text-3xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10 pt-10 xs:text-xs sm:text-sm md:text-md base:text-lg lg:text-xl xl:text-2xl'>
                <h4 className='xs:text-lg sm:text-lg md:text-xl base:text-xl lg:text-2xl xl:text-xl font-semibold text-center'>
                    I want to hear from you. {" "}
                    <span className='decoration-[#61DAFB]/50 underline'>
                        Lets talk!
                    </span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <p className="xs:text-sm sm:text-md md:text-lg base:text-lg lg:text-xl xl:text-2xl">
                            {pageInfo.phoneNumber}
                        </p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <a className="xs:text-sm sm:text-md md:text-lg base:text-lg lg:text-xl xl:text-2xl" href={`mailto:${pageInfo.email}`}>
                            {pageInfo.email}
                        </a>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <p className="xs:text-sm sm:text-md md:text-lg base:text-lg lg:text-xl xl:text-2xl">{pageInfo.address}</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex space-x-2">
                        <input
                            className="contactInput"
                            placeholder="Name"
                            type="text"
                            {...register("name")}
                        />
                        <input
                            className="contactInput"
                            placeholder="Email"
                            type="text"
                            {...register("email")}
                        />
                    </div>
                    <input
                        className="contactInput"
                        placeholder="Subject"
                        type="text"
                        {...register("subject")}
                    />
                    <textarea
                        className="contactInput h-24"
                        placeholder="Message"
                        {...register("message")}
                    />

                    <button className='bg-gray-400/80 hover:bg-gray-400 py-5 px-10 rounded-md text-[#fff] font-bold' typeof='submit'>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}
export default ContactMe;
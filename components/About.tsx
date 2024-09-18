/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import imgAbout from "./img-about.png";
import MagicButton from "./ui/MagicButton";
import { IoIosDocument } from "react-icons/io";

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between text-center md:text-left">
      <div className="flex flex-col gap-8">
        <h1 className="heading">About</h1>
        <p className="max-w-[590px] md:tracking-wider text-sm md:text-lg lg:text-1xl">
          With a professional career marked by graphic design, I am now
          transitioning to the world of software development. Specializing in
          JavaScript and web frameworks, I am focused on consolidating my
          experience in solving problems in a creative and effective way. Since
          2023, I have dedicated myself to improving my technical skills,
          seeking to become a versatile and talented developer, capable of
          transforming concepts into innovative digital solutions.
        </p>
        <MagicButton
          title="Download CV"
          icon={<IoIosDocument />}
          position="left"
        />
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <Image
          className="w-[60%] max-w-[390px] h-auto md:w-auto" 
          src={imgAbout}
          alt="About Image"
        ></Image>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Spotlight } from "./ui/Spolight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#86efac"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="#86efac"
        />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="#86efac" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning Code Into Solutions, Connecting Ideas For The Future"
          />

          <p className="text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl">
            Hi,I&apos;m <strong>Gabriel</strong>, a Web Developer
          </p>
          <div className="flex flex-col gap-2 md:flex-row w-full  justify-center">
            <a target="blank" href="https://www.linkedin.com/in/gabriel-padilha-85a702260/">
              <MagicButton
                title="Linkedin"
                icon={<FaLinkedin />}
                position="left"
              />
            </a>
            <a
              target="blank" href="https://github.com/gabrielpdlh"
            >
              <MagicButton title="Github" icon={<FaGithub />} position="left" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

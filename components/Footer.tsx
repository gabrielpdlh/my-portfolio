/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Don&apos;t Be a Stranger!</h1>
        <span className="text-green text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl mt-4">
          Contact-me now!
        </span>

        <a href="mailto:gabriel.padilha1204@gmail.com">
          <MagicButton
            title="Let's Get In Touch"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-light">
          Copyright © 2024 Gabriel
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a target="blank" href={profile.socialLink}>
              <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black rounded-lg border border-[#86efac] transition-all duration-300 hover:bg-[#86efac] hover:border-black group"
            >
              <img src={profile.img} width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

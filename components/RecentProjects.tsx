/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-green">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div title={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-[0.75rem]">
                <div className="relative w-full h-full overflow-hidden rounded-[0.75rem] lg:rounded-3xl">
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute inset-0 w-full h-full object-cover rounded-[0.75rem] lg:rounded-3xl"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black rounded-lg border border-[#86efac] transition-all duration-300 hover:bg-[#86efac] hover:border-black group">
                    <a target="blank" href={item.repo}>
                      <FaGithub
                        size={25}
                        className="text-[#86efac] transition-colors duration-300 group-hover:text-black"
                      />
                    </a>
                  </div>
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-[#86efac] rounded-lg border border-[#86efac] transition-all duration-300 hover:bg-black hover:border-[#86efac] group">
                    <a target="blank" href={item.site}>
                      <TbWorld
                        size={25}
                        className="text-black transition-colors duration-300 group-hover:text-[#86efac]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

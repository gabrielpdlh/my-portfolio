/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Skills = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My
        <span className="text-green"> Skills</span>
      </h1>

      <div className="items-center w-full mt-12 grid lg:grid-cols-3 grid-cols-2 gap-x-8 gap-y-4 justify-center">
        {workExperience.map((card) => (
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            key={card.id}
          >
            <div>
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;

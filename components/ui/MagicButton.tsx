/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 group">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bff7d5_0%,#86efac_50%,#7daf93_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#86efac_0%,#7daf93_50%,#bff7d5_100%)]" />
      <span
        className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-[#86efac] group-hover:text-slate-950 transition-all duration-300 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

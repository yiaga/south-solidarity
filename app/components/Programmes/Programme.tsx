"use client";

import { IoIosArrowDown } from "react-icons/io";
import Heading from "../Headers/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";
import { useState } from "react";

const Programme = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`${
        expand ? " py-8 bg-[#101010F5]" : ""
      }  border-b border-b-primary pl-10 pr-32 overflow-hidden duration-300 transition-[max-height]
      `}
    >
      <header
        className={`${
          expand ? "text-primary" : ""
        } grid py-8 grid-cols-[400px_1fr] items-center`}
        onClick={() => setExpand(!expand)}
      >
        <div>
          <Heading variant="h2">Day 1</Heading>
          <Heading variant="h2">October 30, 2025</Heading>
        </div>

        <div className="flex justify-between ">
          <p>Opening ceremony, keynote sessions, and solidarity dialogues.</p>
          <IoIosArrowDown size={40} className=" text-primary w-max" />
        </div>
      </header>

      <section
        className={`${
          expand ? "max-h-[1000px]" : "max-h-0"
        } grid grid-cols-[400px_1fr] duration-300`}
      >
        <div className=" text-primary">09.30 - 10.30</div>

        <section className="">
          <div>
            <Heading variant="h4" className=" text-primary">
              Opening Ceremony
            </Heading>
            <p>
              Africa and the AI opportunity Home to the largest and fastest
              growing workforce in the world, Africa is poised to play a
              consequential role in the global AI ecosystem. This session will
              set the scene for the two-day summit exploring challenges and
              opportunities to advance inclusive and resilient growth.
            </p>
          </div>
          <BaseSpacing />
          <div>
            <Heading variant="h4" className=" text-primary">
              Opening Ceremony
            </Heading>
            <p>
              Africa and the AI opportunity Home to the largest and fastest
              growing workforce in the world, Africa is poised to play a
              consequential role in the global AI ecosystem. This session will
              set the scene for the two-day summit exploring challenges and
              opportunities to advance inclusive and resilient growth.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Programme;

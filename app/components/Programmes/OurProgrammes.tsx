import Image from "next/image";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import Programme from "./Programme";

import programmeImage from "@/../../public/assets/svgs/programme-pattern.svg";
import SectionSpacing from "../Spacing/SectionSpacing";

const OurProgrammes = () => {
  return (
    <section className="py-24 h-[916px]' relative ">
      <div className=" bg-black h-full absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={programmeImage}
          alt="programme image"
          className=" h-full w-full object-cover "
        />
      </div>
      <div className="bg-[#022A02]/95 absolute top-0 left-0 right-0 bottom-0 py-32"></div>

      <div className=" relative z-10">
        <Wrapper>
          <HeadingBorderBottom variant="h2">
            <span className="text-white">Our Programmes</span>
          </HeadingBorderBottom>
          <SectionSpacing />
          <ul className="text-white">
            <li>
              <Programme />
            </li>
            <li>
              <Programme />
            </li>
            <li>
              <Programme />
            </li>
          </ul>
        </Wrapper>
      </div>
    </section>
  );
};

export default OurProgrammes;

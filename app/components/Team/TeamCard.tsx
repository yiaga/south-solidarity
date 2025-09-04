import React, { PropsWithChildren } from 'react'
import Image from "next/image";

import speaker1 from "@/public/assets/images/speakers/speaker_1.png";
import BaseSpacing from "../Spacing/BaseSpacing";
import Heading from "../Headers/Heading";

interface Props {
  bgText: "text-white" | "text-black";
}

const TeamCard = ({
  bgText
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div className="min-w-[177px] w-[177px] h-[323px] relative lp ">
      <div
        className="h-[239px] rounded-[10px] overflow-hidden
      hover:h-full duration-300 peer"
      >
        <Image
          src={speaker1}
          alt="speaker"
          width={500}
          height={500}
          className=" w-full h-full object-cover"
        />
      </div>
      <BaseSpacing />
      <div
        className={`${bgText} text-center absolute right-0 left-0 bottom-0
      peer-hover:pb-3 linear-gradient-meet-speaker rounded-b-[10px]`}
      >
        <Heading variant="h4">John Doe</Heading>
        <p className="mt-2">Movement Leader</p>
      </div>
    </div>
  );
}


export default TeamCard;
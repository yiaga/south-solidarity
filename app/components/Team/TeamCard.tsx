import React, { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData

import BaseSpacing from "../Spacing/BaseSpacing";
import Heading from "../Headers/Heading";

// 1. Update the Props interface to accept the member's data
interface Props {
  bgText: "text-white" | "text-black";
  member: {
    name: string;
    designation: string;
    image: StaticImageData;
  };
}

const TeamCard = ({
  bgText,
  member // Destructure the member prop
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div className="min-w-[177px] w-[177px] h-[323px] relative lp ">
      <div
        className="h-[239px] rounded-[10px] overflow-hidden
      hover:h-full duration-300 peer"
      >
        {/* 2. Use the dynamic image source from the member prop */}
        <Image
          src={member.image}
          alt={member.name} // Use name for alt text
          width={500}
          height={500}
          className=" w-full h-full object-cover"
        />
      </div>
      <BaseSpacing />
      <div
          className={`${bgText} text-center absolute right-0 left-0 bottom-0
          peer-hover:pb-3 linear-gradient-meet-speaker rounded-b-[10px] 
          peer-hover:text-[#FFAC13]`}
        >
        
        {/* 3. Use the dynamic name and designation */}
        <Heading variant="h4">{member.name}</Heading>
        <p className="mt-2">{member.designation}</p>
      </div>
    </div>
  );
}

export default TeamCard;
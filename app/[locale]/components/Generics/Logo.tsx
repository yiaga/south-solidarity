import Image from "next/image";
import React from "react";

import arc_green from "@/public/assets/svgs/arc_green.svg";
import arc_yellow from "@/public/assets/svgs/arc_yellow.svg";
import arc_blue from "@/public/assets/svgs/arc_blue.svg";
import circle_red from "@/public/assets/svgs/circle_red.svg";
import logo_black from "@/public/assets/svgs/logo_black.svg";
import logo_text from "@/public/assets/svgs/logo_text.svg";
import logo_moto from "@/public/assets/svgs/logo_moto.svg";

interface Props {
  variant?: "normal" | "custom";
}

const Logo = ({ variant = "normal" }: Readonly<Props>) => {
  switch (variant) {
    case "normal":
      return (
        <div>
          <Image src={logo_black} alt="logo black" />
        </div>
      );
    case "custom":
      return (
        <div className="flex items-center space-x-11">
          <div
            className={`w-[165px] h-[206px] relative flex items-center justify-center`}
          >
            <Image
              src={arc_green}
              alt="Arc Green"
              className="absolute -top-2 z-10 duration-300 w-[120px] h-[120px]
              hover:scale-200 hover:-translate-y-14"
            />
            <Image
              src={arc_yellow}
              alt="Arc Yellow"
              className="absolute left-0 z-10 bottom-0 duration-300 hover:scale-200 hover:-translate-x-14"
            />
            <Image
              src={arc_blue}
              alt="Arc Green"
              className="absolute right-0 z-10 bottom-0  duration-300 hover:scale-200 hover:translate-x-14"
            />
            <Image src={circle_red} alt="Circle Red" className="absolute" />
          </div>

          <div className=" border-l pl-10 border-l-[#999999]">
            <Image src={logo_text} alt="logo text" className="mb-6" />
            <Image src={logo_moto} alt="logo moto" />
          </div>
        </div>
      );
  }
};

export default Logo;

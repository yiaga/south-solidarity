import Image from "next/image";

import pattern from "@/public/assets/images/pattern.png";
import Logo from "../Generics/Logo";

const HommerBanner = () => {
  return (
    <section className="h-[652px] relative bg-black">
      <Image src={pattern} alt="pattern" className="h-full w-full" />
      <div
        className=" bg-black/65  w-full absolute top-0 bottom-0 left-0 
      flex items-center justify-center"
      >
        {/* <Wrapper> */}
        <Logo variant="custom" />
        {/* </Wrapper> */}
      </div>
    </section>
  );
};

export default HommerBanner;

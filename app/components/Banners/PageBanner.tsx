import Image from "next/image";
import pattern from "@/public/assets/images/pattern.png";

interface PageBannerProps {
  title: string;
}

const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <section className="h-[579px] relative bg-black">
      <Image src={pattern} alt="pattern" className="h-full w-full object-cover" />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/65 
        flex items-center justify-center"
      >
        <div 
          className="absolute text-white text-center"
          style={{ top: '60%', transform: 'translateY(-50%)' }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold tracking-wide">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
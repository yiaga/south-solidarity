import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import Buttton from "../components/Buttons/Buttton";

// Props for the WatchSessionCard component
interface WatchSessionCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const WatchSessionCard: React.FC<WatchSessionCardProps> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image with play button overlay */}
      <div className="relative w-full h-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          hover:bg-opacity-25 transition-all cursor-pointer"
        >
          <FaPlayCircle className="text-white text-5xl" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col items-center text-left">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={link}>
            <Buttton size="md" variant="secondary" className="text-white">
              Watch Session
            </Buttton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchSessionCard;
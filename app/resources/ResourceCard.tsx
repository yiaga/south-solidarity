import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import Buttton from "../components/Buttons/Buttton";


interface ResourcesCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ResourcesCard: React.FC<ResourcesCardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 md:mt-0 md:self-start">
          <Link href={buttonLink}>
            <Buttton size="md" variant="secondary" className="text-white">
              {buttonText}
            </Buttton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
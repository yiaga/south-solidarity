import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Buttton from "../components/Buttons/Buttton";

interface UpdateCardProps {
  imageSrc: StaticImageData;
  title: string;
  date: string;
  description: string;
  link: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  imageSrc,
  title,
  date,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <div className="w-full h-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={link}>
            <Buttton size="md" variant="secondary" className="text-white">
              Read More
            </Buttton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;
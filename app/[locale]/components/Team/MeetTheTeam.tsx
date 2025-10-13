import React, { PropsWithChildren } from "react";
// 1. Import necessary types for Next.js Image
import { StaticImageData } from "next/image";

// Import your components
import TeamCard from "./TeamCard";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";
import AnimatedComponent from "../AnimatedComponent";

// 2. Import your 6 unique speaker images here
// !!! IMPORTANT: Replace these with your actual image imports !!!
import speaker1 from "@/public/assets/images/speakers/speaker_1.jpg";
import speaker2 from "@/public/assets/images/speakers/speaker_2.jpg";
import speaker3 from "@/public/assets/images/speakers/speaker_3.jpg";
import speaker4 from "@/public/assets/images/speakers/speaker_4.jpg";
import speaker5 from "@/public/assets/images/speakers/speaker_5.jpg";
import speaker6 from "@/public/assets/images/speakers/speaker_6.jpg";

// Define the TeamMember type
interface TeamMember {
  name: string;
  designation: string;
  image: StaticImageData;
}

// 3. Create the data array for the team
const TEAM_MEMBERS: TeamMember[] = [
  { name: "Martial Pa'nucci", designation: "Republic of Congo (Congo-Brazzaville)", image: speaker1 },
  { name: "Hanifa Safia", designation: "Kenya", image: speaker2 },
  { name: "Amira Aisya", designation: "Malaysia", image: speaker3 },
  { name: "Shakira Wafula", designation: "Kenya", image: speaker4 },
  { name: " Gift Siziba", designation: "Zimbabwe", image: speaker5 },
  { name: "Namatai Kwekweza", designation: "Zimbabwe", image: speaker6 },
];

interface Props {
  title: string;
  className: string;
  bgText: "text-white" | "text-black";
}

const MeetTheTeam = ({
  title,
  className,
  bgText,
}: Readonly<PropsWithChildren<Props>>) => {
  // Use the actual data array
  const membersToDisplay = TEAM_MEMBERS;

  return (
    <section className={className}>
      <Wrapper>
        <AnimatedComponent>
          <HeadingBorderBottom>
            <span className={bgText}>{title}</span>
          </HeadingBorderBottom>
        </AnimatedComponent>
        <ContentSpacing />
        <ContentSpacing />
        <AnimatedComponent>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* 4. Map over the data array and pass each member object to TeamCard */}
            {membersToDisplay.map((member, index) => (
              <li key={member.name} className="flex justify-center">
                <TeamCard bgText={bgText} member={member} />
              </li>
            ))}
          </ul>
        </AnimatedComponent>
      </Wrapper>
    </section>
  );
};

export default MeetTheTeam;
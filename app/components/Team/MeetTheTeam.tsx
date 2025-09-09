import React, { PropsWithChildren } from "react";
import TeamCard from "./TeamCard";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";

interface Props {
  title: string;
  className: string;
  bgText: "text-white" | "text-black";
  numberOfMembers: number;
}

const MeetTheTeam = ({
  title,
  className,
  bgText,
  numberOfMembers,
}: Readonly<PropsWithChildren<Props>>) => {
  const members = Array.from({ length: numberOfMembers });

  return (
    <section className={className}>
      <Wrapper>
        <HeadingBorderBottom>
          <span className={bgText}>{title}</span>
        </HeadingBorderBottom>
        <ContentSpacing />
        <ContentSpacing />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {members.map((_, index) => (
            <li key={index}>
              <TeamCard bgText={bgText} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default MeetTheTeam;

import React, { PropsWithChildren } from "react";
import TeamCard from "./TeamCard";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";

interface Props {
  title: string;
  className: string;
  bgText: "text-white" | "text-black";
}

const MeetTheTeam = ({
  title,
  className,
  bgText
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <section className={className}>
      <Wrapper>
        <HeadingBorderBottom>
          <span className={bgText}>{title}</span>
        </HeadingBorderBottom>
        <ContentSpacing />
        <ContentSpacing />
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <li> <TeamCard bgText={bgText}/> </li>
          <li> <TeamCard bgText={bgText}/> </li>
          <li> <TeamCard bgText={bgText}/> </li>
          <li> <TeamCard bgText={bgText}/> </li>
          <li> <TeamCard bgText={bgText}/> </li>
          <li> <TeamCard bgText={bgText}/> </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default MeetTheTeam;


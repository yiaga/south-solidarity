import React from "react";
import SpeakerCard from "./SpeakerCard";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";

const MeetTheSpeakers = () => {
  return (
    <section className="bg-text py-24">
      <Wrapper>
        <HeadingBorderBottom>
          <span className="text-white">Meet Our Speakers</span>
        </HeadingBorderBottom>
        <ContentSpacing />
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <li> <SpeakerCard /> </li>
          <li> <SpeakerCard /> </li>
          <li> <SpeakerCard /> </li>
          <li> <SpeakerCard /> </li>
          <li> <SpeakerCard /> </li>
          <li> <SpeakerCard /> </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default MeetTheSpeakers;

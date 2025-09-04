import HommerBanner from "./components/Banners/HommerBanner";
import Wrapper from "./components/Generics/Wrapper";
import HeadingBorderBottom from "./components/Headers/HeadingBorderBottom";
import KeyObjectives from "./components/Objectives/KeyObjectives";
import OurProgrammes from "./components/Programmes/OurProgrammes";
import BaseSpacing from "./components/Spacing/BaseSpacing";
import ContentSpacing from "./components/Spacing/ContentSpacing";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import Statistics from "./components/Statistics/Statistics";
import MeetTheTeam from "./components/Team/MeetTheTeam";

export default function Home() {
  return (
    <section>
      <HommerBanner />
      <SectionSpacing />

      <Wrapper>
        <HeadingBorderBottom>About Event</HeadingBorderBottom>
        <BaseSpacing />
        <p>
          The South-South Social Movements Convergence brings together
          activists, thinkers, and communities from Africa, Asia, and Latin
          America to strengthen solidarity, share strategies, and build a united
          vision for social justice.
        </p>

        <ContentSpacing />
        <div className="px-4 lg:px-24 ">
          <Statistics />
        </div>
      </Wrapper>
      <SectionSpacing />
      <MeetTheTeam
        title="Meet Our Speakers"
        className="bg-black py-24"
        bgText="text-white"
      />
      <MeetTheTeam
        title="Meet Our Thought Leaders"
        className="bg-white py-24"
        bgText="text-black"
      />
      <OurProgrammes />
      <KeyObjectives />
    </section>
  );
}

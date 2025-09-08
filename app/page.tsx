import HommerBanner from "./components/Banners/HommerBanner";
import Buttton from "./components/Buttons/Buttton";
import Wrapper from "./components/Generics/Wrapper";
import HeadingBorderBottom from "./components/Headers/HeadingBorderBottom";
import KeyObjectives from "./components/Objectives/KeyObjectives";
import OurProgrammes from "./components/Programmes/OurProgrammes";
import Program from "./components/Programmes/Program";
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
          Across Africa, Asia, and Latin America, a generation is rising. From Kenya's Gen Z tax protests mobilized through
           TikTok to Chile's students reclaiming public spaces, from Nigeria's #EndSARS dismantling police impunity to Sri Lanka's
            citizens toppling political dynasties, youth-led movements are rewriting the rules of democratic engagement.          
        </p>
        <p>
          These uprisings share more than grievances against corruption, inequality, and authoritarian drift. 
          They represent a new political imagination: digitally native, intersectional, leaderless yet collectively powerful. 
          Whether sparked by tuition hikes, tax bills, or police brutality, they're united by demands for dignity, accountability, 
          and economic justice.
        </p>

        <ContentSpacing />
        <div className="px-4 lg:px-24 ">
          <Statistics />
        </div>
      </Wrapper>
      <SectionSpacing />
      <section>
        <div className="bg-[#FFAC13] py-24 text-black">
        <Wrapper>
          <HeadingBorderBottom color="#008900">South-South Movement <br />Solidarity Pact</HeadingBorderBottom>
          <BaseSpacing />
          <ContentSpacing />
          <p>Across Africa, Asia, and Latin America, a generation is rising. From Kenya's Gen Z tax protests mobilized 
            through TikTok to Chile's students reclaiming public spaces, from Nigeria's #EndSARS dismantling 
            police impunity to Sri Lanka's citizens toppling political dynasties, youth-led movements are rewriting
            the rules of democratic engagement.
          </p>
          <p>
            These uprisings share more than grievances against corruption, inequality, and authoritarian drift. 
            They represent a new political imagination: digitally native, intersectional, leaderless yet collectively powerful. 
            Whether sparked by tuition hikes, tax bills, or police brutality, they're united by demands for dignity, accountability,
            and economic justice.
          </p>
          <BaseSpacing />
          <ContentSpacing />
          <Buttton size="md" variant="secondary" className="text-white">Download Here</Buttton>
        </Wrapper>
        </div>
        
      </section>
      <MeetTheTeam
        title="Meet Our Speakers"
        className="bg-black py-24"
        bgText="text-white"
      />
      <Program />
      <SectionSpacing />
      <KeyObjectives />
    </section>
  );
}

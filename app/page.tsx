import Link from "next/link";
import AnimatedComponent from "./components/AnimatedComponent";
import HommerBanner from "./components/Banners/HommerBanner";
import Buttton from "./components/Buttons/Buttton";
import Wrapper from "./components/Generics/Wrapper";
import HeadingBorderBottom from "./components/Headers/HeadingBorderBottom";
import KeyObjectives from "./components/Objectives/KeyObjectives";
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
        <AnimatedComponent>
        <HeadingBorderBottom>About the Convergence</HeadingBorderBottom>
        </AnimatedComponent>
        <BaseSpacing />
        <AnimatedComponent>
          <p>
            The Convergence tagged Connected Struggles, Many Voices is a gathering of social movement leaders, activists, artists, 
            and scholars from Africa, Asia, and Latin America designed to examine how youth activism, and social movements are reshaping
             democracy, and confronting authoritarianism across the global south. 
             </p>
             <br />
             <p>
             The convergence seeks to create opportunities for
              co-creating tools for civic architecture, cross-border solidarity, and building new partnerships for advancing 
              democratic renewal in the south.
          </p>
        </AnimatedComponent>
        <ContentSpacing />
        <div className="px-4 lg:px-24 ">
          <AnimatedComponent>
          <Statistics />
        </AnimatedComponent>
        </div>
      </Wrapper>
      <SectionSpacing />

      <KeyObjectives />
      
      <section>
        <div className="py-24 text-black">
        <Wrapper>

          <AnimatedComponent>
          <HeadingBorderBottom>South-South Movement <br />Solidarity Pact</HeadingBorderBottom>
          </AnimatedComponent>
          <BaseSpacing />
          <ContentSpacing />
          <AnimatedComponent>
          <p>
            The South-South Movements Solidarity Pact is a declaration for democracy, articulating a new narrative that advances 
            democratic renewal. The pact highlights a set of commitments by leaders of social movements and activists in the south 
            to be strong voices for democracy, engaging in collective action and the practice of rigorous solidarity.
          </p>
          </AnimatedComponent>
          <BaseSpacing />
          <ContentSpacing />
          <Link href="/resources">
            <Buttton size="md" variant="secondary" className="text-white">
              Download Here
            </Buttton>
          </Link>
        </Wrapper>
        </div>
        
      </section>
      <MeetTheTeam
        title="Meet Our Speakers"
        className="bg-black py-24"
        bgText="text-white"
      />

      <Program />
    </section>
  );
}
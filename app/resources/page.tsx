import PageBanner from "../components/Banners/PageBanner";

import bookImage from "@/public/assets/images/bookcover.jpg"; 
import Wrapper from "../components/Generics/Wrapper";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import ResourcesCard from "./ResourceCard";
import HeadingBorderBottom from "../components/Headers/HeadingBorderBottom";
import AnimatedComponent from "../components/AnimatedComponent";


const resourcesData = [
  {
    imageSrc: bookImage,
    title: "Understanding the Global South",
    description: "Across Africa, Asia, and Latin America, a generation is rising. From Kenya's Gen Z tax protests mobilized through TikTok to Chile's students reclaiming public spaces, from Nigeria's #EndSARS dismantling police impunity to Sri Lanka's citizens toppling political dynasties, youth-led movements are rewriting the rules of democratic engagement. These uprisings share more than grievances against corruption, inequality, and authoritarian drift. They represent a new political imagination: digitally native, intersectional, leaderless yet collectively powerful. Whether sparked by tuition hikes, tax bills, or police brutality, they're united by demands for dignity, accountability, and economic justice.",
    buttonText: "Download Here",
    buttonLink: "/downloads/document-1.pdf",
  },
  {
    imageSrc: bookImage,
    title: "Leadership for the Futures We Want",
    description: "This panel brings together young leaders from government, political parties, and civil society to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South. The session explores what it takes to lead with integrity, vision, and purpose toward more just and inclusive futures.",
    buttonText: "Watch Session",
    buttonLink: "/videos/session-1.mp4",
  },
  {
    imageSrc: bookImage,
    title: "Connected Struggles: Where Our Stories Meet",
    description: "This interactive session invites participants to step beyond national, thematic, and geographic borders to connect, reflect, and co-imagine. Through close-knit, facilitated dialogues, participants will share insights from their contexts and explore how democracy is being redefined across the Global South. Key output: Visual “map of struggle”.",
    buttonText: "Download Here",
    buttonLink: "/downloads/map-of-struggle.pdf",
  },
];

const Resources = () => {
  return (
    <section>
      <PageBanner title="Our Resources" />
      <Wrapper>
        <SectionSpacing />
        <AnimatedComponent>
        <HeadingBorderBottom>
          <span className="text-black">Download Resources</span>
        </HeadingBorderBottom>
        </AnimatedComponent>
        <SectionSpacing />
        <div className="flex flex-col space-y-16">
          {resourcesData.map((resource, index) => (
            <AnimatedComponent>
            <ResourcesCard
              key={index}
              imageSrc={resource.imageSrc}
              title={resource.title}
              description={resource.description}
              buttonText={resource.buttonText}
              buttonLink={resource.buttonLink}
            />
            </AnimatedComponent>
          ))}
        </div>
        <SectionSpacing />
      </Wrapper>
    </section>
  );
}

export default Resources;
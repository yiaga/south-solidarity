"use client";

import React from 'react';

import PageBanner from "../components/Banners/PageBanner";
import sessionImage1 from "@/public/assets/images/session-1.jpg";
import Wrapper from "../components/Generics/Wrapper";
import HeadingBorderBottom from "../components/Headers/HeadingBorderBottom";
import ContentSpacing from "../components/Spacing/ContentSpacing";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import UpdateCard from "./UpdatesCard";
import AnimatedComponent from "../components/AnimatedComponent";

const updatesData = [
  {
    imageSrc: sessionImage1,
    title: "News Headline",
    date: "Sept, 2025",
    description: "Across Africa, Asia, and Latin America, a generation is rising. From Kenya's Gen Z tax protests mobilized through TikTok to Chile's students reclaiming public spaces, from Nigeria's #EndSARS dismantling police impunity to Sri Lanka's citizens toppling political dynasties, youth-led movements are rewriting the rules of democratic engagement.",
    link: "/updates/first-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Second News Headline",
    date: "Sept, 2025",
    description: "These uprisings share more than grievances against corruption, inequality, and authoritarian drift. They represent a new political imagination: digitally native, intersectional, leaderless yet collectively powerful. Whether sparked by tuition hikes, tax bills, or police brutality, they're united by demands for dignity, accountability, and economic justice.",
    link: "/updates/second-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Third News Headline",
    date: "Sept, 2025",
    description: "This interactive session invites participants to step beyond national, thematic, and geographic borders to connect, reflect, and co-imagine. Through close-knit, facilitated dialogues, participants will share insights from their contexts and explore how democracy is being redefined across the Global South. Key output: Visual “map of struggle”.",
    link: "/updates/third-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Fourth News Headline",
    date: "Sept, 2025",
    description: "This panel brings together young leaders from government, political parties, and civil society to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South. The session explores what it takes to lead with integrity, vision, and purpose toward more just and inclusive futures.",
    link: "/updates/fourth-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Fifth News Headline",
    date: "Sept, 2025",
    description: "A commissioned theatre production on the genealogy and mapping of social movements from the Global South. This vibrant piece traces the roots and evolution of youth-led struggles, blending storytelling, music, and movement.",
    link: "/updates/fifth-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Sixth News Headline",
    date: "Sept, 2025",
    description: "In plenary, participants will share insights from the intimate breakout sessions on connected struggles. This reflection harvesting circle brings together insights from different perspectives.",
    link: "/updates/sixth-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Seventh News Headline",
    date: "Sept, 2025",
    description: "A TED-style session for movement leaders to share powerful stories of emancipation, moments of courage and insights from organising on the frontlines. This session seeks to inspire, provoke and mobilizes action.",
    link: "/updates/seventh-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Eighth News Headline",
    date: "Sept, 2025",
    description: "This session explores what it truly means to build movements that don’t just ignite change but sustain it. We ask: What does resilience look like in movement-building across the Global South?",
    link: "/updates/eighth-update",
  },
  {
    imageSrc: sessionImage1,
    title: "Ninth News Headline",
    date: "Sept, 2025",
    description: "The Global South and the Future of World Order. As the foundations of the post-World War II global order begin to fracture, this session asks: what future for the Global South?",
    link: "/updates/ninth-update",
  },
];

const Updates = () => {
  return (
    <section>
      <PageBanner title="UPDATES"/>
      <Wrapper>
        <SectionSpacing />
        <AnimatedComponent>
        <HeadingBorderBottom>Latest News and Updates</HeadingBorderBottom>
        </AnimatedComponent>
        <ContentSpacing />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {updatesData.map((update, index) => (
            <AnimatedComponent key={index}>
              <UpdateCard
                imageSrc={update.imageSrc}
                title={update.title}
                date={update.date}
                description={update.description}
                link={update.link}
              />
            </AnimatedComponent>
          ))}
        </div>
      </Wrapper>
      <SectionSpacing />
    </section>
  );
};

export default Updates;
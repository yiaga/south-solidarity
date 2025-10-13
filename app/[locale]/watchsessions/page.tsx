"use client";

import React from 'react';
import WatchSessionCard from './WatchSessionCard';
import PageBanner from '../components/Banners/PageBanner';
import Wrapper from '../components/Generics/Wrapper';
import HeadingBorderBottom from '../components/Headers/HeadingBorderBottom';
import ContentSpacing from '../components/Spacing/ContentSpacing';
import SectionSpacing from '../components/Spacing/SectionSpacing';
import sessionImage1 from "@/public/assets/images/session-1.jpg";
import AnimatedComponent from '../components/AnimatedComponent';

// Data for all the sessions
const sessionsData = [
  {
    imageSrc: sessionImage1,
    title: "First Session",
    description: "Across Africa, Asia, and Latin America, a generation is rising. From Kenya's Gen Z tax protests mobilized through TikTok to Chile's students reclaiming public spaces, from Nigeria's #EndSARS dismantling police impunity to Sri Lanka's citizens toppling political dynasties, youth-led movements are rewriting the rules of democratic engagement.",
    link: "/sessions/first-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Second Session",
    description: "These uprisings share more than grievances against corruption, inequality, and authoritarian drift. They represent a new political imagination: digitally native, intersectional, leaderless yet collectively powerful. Whether sparked by tuition hikes, tax bills, or police brutality, they're united by demands for dignity, accountability, and economic justice.",
    link: "/sessions/second-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Third Session",
    description: "This interactive session invites participants to step beyond national, thematic, and geographic borders to connect, reflect, and co-imagine. Through close-knit, facilitated dialogues, participants will share insights from their contexts and explore how democracy is being redefined across the Global South. Key output: Visual “map of struggle”.",
    link: "/sessions/third-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Fourth Session",
    description: "This panel brings together young leaders from government, political parties, and civil society to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South. The session explores what it takes to lead with integrity, vision, and purpose toward more just and inclusive futures.",
    link: "/sessions/fourth-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Fifth Session",
    description: "A commissioned theatre production on the genealogy and mapping of social movements from the Global South. This vibrant piece traces the roots and evolution of youth-led struggles, blending storytelling, music, and movement.",
    link: "/sessions/fifth-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Sixth Session",
    description: "In plenary, participants will share insights from the intimate breakout sessions on connected struggles. This reflection harvesting circle brings together insights from different perspectives.",
    link: "/sessions/sixth-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Seventh Session",
    description: "A TED-style session for movement leaders to share powerful stories of emancipation, moments of courage and insights from organising on the frontlines. This session seeks to inspire, provoke and mobilizes action.",
    link: "/sessions/seventh-session",
  },
  {
    imageSrc: sessionImage1,
    title: "Eighth Session",
    description: "This session explores what it truly means to build movements that don’t just ignite change but sustain it. We ask: What does resilience look like in movement-building across the Global South?",
    link: "/sessions/eighth-session",
  },
];

const WatchSession = () => {
  return (
    <section className="bg-gray-50 py-24">
      <PageBanner title="WATCH SESSIONS"/>
      <SectionSpacing />
      <Wrapper>
        <AnimatedComponent>
          <HeadingBorderBottom>
            <span className="text-black">Watch Session from Recent Meetings</span>
          </HeadingBorderBottom>
        </AnimatedComponent>
        <ContentSpacing />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessionsData.map((session, index) => (
            <AnimatedComponent key={index}>
              <WatchSessionCard
                imageSrc={session.imageSrc}
                title={session.title}
                description={session.description}
                link={session.link}
              />
            </AnimatedComponent>
          ))}
        </div>
      </Wrapper>
      <SectionSpacing />
    </section>
  );
};

export default WatchSession;
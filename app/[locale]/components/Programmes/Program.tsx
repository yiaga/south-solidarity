"use client";

import React, { useState } from 'react';
import ProgramTabs from './ProgramTabs';
import Wrapper from '../Generics/Wrapper';
import HeadingBorderBottom from '../Headers/HeadingBorderBottom';
import ContentSpacing from '../Spacing/ContentSpacing';
import AnimatedComponent from '../AnimatedComponent';
// import ProgramTable from './ProgramTable';

// Define the data types for clarity and type safety
export interface Person {
  name: string;
  affiliation?: string;
}

export interface ProgramItem {
  time: string;
  title: string;
  description?: string;
  facilitators: Person[];
  speakers?: Person[];
  subSessions?: ProgramItem[];
}

export interface DayData {
  date: string;
  sessions: ProgramItem[];
}

export interface ProgramData {
  [key: string]: DayData;
}

// Data for the program, structured from the provided PDF
const programData: ProgramData = {
  'Day 1': {
    date: 'Thursday October 30th 2025',
    sessions: [
      {
        time: '08:30-9:00am',
        title: 'Opening Session',
        description: 'Arrival & Registration, Music Performance, Spoken word, Opening Remarks',
        facilitators: [
          // { name: 'TBD' }, { name: 'Yiaga Africa' }, { name: 'OSF' }
        ],
      },
      {
        time: '09:00-10.00am',
        title: 'Plenary Session 1: Frontlines of Change: Youth Power and the Battle for Democracy',
        description: `This opening panel brings together powerful youth voices from across the Global South—Africa, Asia, Latin America, and the MENA region. These young movement-builders will ground the convening in urgency and resistance, sharing bold visions for a future that centers justice, dignity, and collective agency.`,
        speakers: [
          // { name: 'Shakira or Hanifa?', affiliation: 'Kenya (Tax hikes)' },
          // { name: 'Pape Abdoulaye Toure', affiliation: 'Student Activist, Senegal (Political repression)' },
          // { name: 'Speaker from Mexico', affiliation: 'Urban displacement/gentrification' },
          // { name: 'Speaker from Sri Lanka' },
        ],
        facilitators: [
          // { name: 'Cheryl Akinyi', affiliation: 'Moderator' }
        ],
      },
      { time: '', title: 'DETAILED PROGRAMME OF EVENT COMING SOON', facilitators: [] },
  //     { time: '10:00-10:30am', title: 'HEALTH BREAK & GROUP PHOTO', facilitators: [] },
  //     {
  //       time: '11:00-1:00pm',
  //       title: 'Solidarity Mural opening and a theatre artistic production',
  //       description: `A commissioned theatre production on the genealogy and mapping of social movements from the Global South. This vibrant piece traces the roots and evolution of youth-led struggles, blending storytelling, music, and movement.`,
  //       facilitators: [{ name: 'A mosaic of artists-an art collective' }],
  //     },
  //     { time: '1:00pm-2.00pm', title: 'LUNCH', facilitators: [] },
  //     {
  //       time: '2:00-4:00pm',
  //       title: 'Syndicated Session 1: Connected Struggles: Where Our Stories Meet.',
  //       description: `This interactive session invites participants to step beyond national, thematic, and geographic borders to connect, reflect, and co-imagine.`,
  //       facilitators: [{ name: '10 facilitated breakaway groups' }, { name: '10 moderators needed' }],
  //     },
  //     { time: '4:00pm-4:10pm', title: 'Music Performance', facilitators: [{ name: 'TBD' }] },
  //     {
  //       time: '4:10pm-4:30pm',
  //       title: "Plenary Session 2: Reflection Harvesting Circle",
  //       description: "In plenary, participants will share insights from the intimate breakout sessions on connected struggles.",
  //       facilitators: [{ name: "Five participants share insights from the 'Map of Struggle'" }],
  //     },
  //     {
  //       time: '4:30pm-4:45pm',
  //       title: "South-South Solidarity Talks I",
  //       description: "A TED-style session for movement leaders to share powerful stories of emancipation, moments of courage and insights from organising on the frontlines.",
  //       facilitators: [{ name: 'TBD' }],
  //     },
  //     { time: '4:45pm-6:00pm', title: 'PERSONAL TIME', facilitators: [] },
  //     { time: '6:00-9:30 pm', title: 'WELCOME COCKTAIL', facilitators: [] }
    ],
  },
  'Day 2': {
    date: 'Friday 31st October, 2025',
    sessions: [
      { time: '09:00-9:10am', title: 'Artistic performance (Music)', facilitators: [] }, //{ name: 'TBD' }
      { time: '9:10am-9:45am', title: 'Reflections on Day 1 & Presentation of Draft South-South Solidarity Pact', facilitators: [] }, //{ name: 'All' }, { name: 'Reference Group' }
      {
        time: '09:45am-11:00am',
        title: "Plenary session 3: Leadership for the futures we want",
        description: "This panel brings together young leaders from government, political parties, and civil society to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South.",
        speakers: [
          // { name: "Hon. Joanna Mamombe", affiliation: 'MP Zimbabwe' },
          // { name: 'Speaker from South Africa' },
          // { name: 'Speaker from Brazil' },
          // { name: 'Speaker from Thailand' }
        ],
        facilitators: [
          // { name: 'Moderator: TBD' }
        ],
      },
      { time: '', title: 'DETAILED PROGRAMME OF EVENT COMING SOON', facilitators: [] },
  //     { time: '11:00-11:30am', title: 'HEALTH BREAK', facilitators: [] },
  //     {
  //       time: '11:30-1:30pm',
  //       title: "BREAKOUT SESSION 2: Building a Future-Facing Strategy for Inclusive, Just Democracies.",
  //       description: "This session explores how democratic institutions from parliaments to regional institutions to citizen assemblies can be redesigned to reflect the urgency, imagination, and demands of social movements.",
  //       facilitators: [],
  //       subSessions: [
  //         {
  //           time: '',
  //           title: "Session 1: Development for Whom? Rethinking State, Market, and the Social Contract",
  //           speakers: [
  //             { name: 'Namata Serumaga-Musisi', affiliation: 'Economic Fighters League, Ghana' },
  //             { name: 'Speaker from Asia' },
  //             { name: 'Speaker from LATAM' },
  //             { name: 'Ostilos Gift', affiliation: 'Doctoral Candidate, University of Freestate/ED The Catalyst Center' },
  //           ],
  //           facilitators: [{ name: 'Tessa Dooms', affiliation: 'Rivonia Circle (Moderator)' }],
  //         },
  //         {
  //           time: '',
  //           title: "Session 2: Institutionalizing the People's Voices by exploring pathways to participatory power",
  //           speakers: [{ name: 'Cynthia Mbamalu', affiliation: 'Director of Programmes, Yiaga Africa' }, { name: 'Speaker from Asia' }, { name: 'Speaker from LATAM' }],
  //           facilitators: [{ name: 'Moderator: TBD' }],
  //         },
  //         {
  //           time: '',
  //           title: "Session 3: The Global South and the Future of World Order",
  //           speakers: [{ name: 'Speaker from Asia' }, { name: 'Speaker from LATAM' }, { name: 'Nomzamo Zondo', affiliation: 'Social and Economic Rights Institute, South Africa' }],
  //           facilitators: [{ name: 'Moderator: TBD' }],
  //         },
  //         {
  //           time: '',
  //           title: "Session 4: Building movements with depth and direction, seeking power that holds",
  //           speakers: [{ name: 'Noncedo Madubedube', affiliation: 'Executive Director, Equal Education, South Africa' }, { name: 'Speaker from Asia' }, { name: 'Speaker from LATAM' }, { name: 'Villy Nawa', affiliation: 'MSTDC, Tanzania' }],
  //           facilitators: [{ name: 'Sylvian Saluseke', affiliation: 'Coordinator, Afrikii (Moderator)' }],
  //         },
  //       ]
  //     },
  //     { time: '1:30-2:30pm', title: 'LUNCH', facilitators: [] },
  //     {
  //       time: '2:30-4:30pm',
  //       title: 'Cultural Excursion',
  //       description: 'Participants will engage with the rich cultural and historical heritage of the host city, visiting various sites like Robben Island.',
  //       facilitators: [{ name: 'Robben Island' }],
  //     },
  //     { time: '6:00pm-7:00pm', title: 'DINNER/PERSONAL TIME', facilitators: [] },
  //     { time: '7:00pm-9:00pm', title: 'Open Forum', description: 'Participants are invited to self-organise sessions on issues that matter to them.', facilitators: [] }
    ],
  },
  'Day 3': {
    date: 'Saturday 1st November 2025',
    sessions: [
      { time: '9:00am-9:15am', title: 'Artistic performance', description: 'Spoken Word & Music', facilitators: [] }, //{ name: 'TBD' }
      { time: '09:15am-9:30am', title: 'Reflections from Cultural Visit to Robben Island', facilitators: [] }, //{ name: 'Collective Recap' }
      {
        time: '09:30am-10:30am',
        title: 'Plenary session 4',
        description: 'This session will provide a space for feedback from the breakaway discussions. Each group will present key insights and recommendations.',
        facilitators: [
          // { name: 'Tessa Dooms (Session 1)' }, { name: 'Cynthia Mbamalu (Session 2)' }, { name: 'Session 3 & 4: TBD ' }
        ],
      },
      // { time: '10:30am-10:35am', title: 'Music Performance', facilitators: [{ name: 'TBD' }] },
      // {
      //   time: '10:35am-12:00pm',
      //   title: "Plenary session 5: Organizing across generations",
      //   description: "An intergenerational dialogue for activists and community organizers to explore tensions, lessons, and strategies across generational divides.",
      //   speakers: [
          // { name: 'Brian Kagoro' }, { name: 'Kumi Naidoo' }, { name: 'Zaha Lucy', affiliation: 'End Femicide, Kenya' }, { name: 'TBD' }
        // ],
        // facilitators: [
          // { name: 'Moderator: TBD' }
        // ],
      // },
      { time: '', title: 'DETAILED PROGRAMME OF EVENT COMING SOON', facilitators: [] },
  //     { time: '12:00pm-12:15pm', title: 'HEALTH BREAK', facilitators: [] },
  //     { time: '12:15pm-1:30pm', title: 'Breakout 3: Workshops on the South-South Solidarity Pact', facilitators: [{ name: 'Reference group members will facilitate in-depth discussions' }] },
  //     { time: '1:30pm-2:30pm', title: 'LUNCH', facilitators: [] },
  //     {
  //       time: '2:30pm-4:30pm',
  //       title: 'Movements Building Labs',
  //       description: 'First Session: 2:30pm - 3:30pm; Second Session: 3:30pm - 4:30pm. Participants will participate in two lab sessions only.',
  //       facilitators: [{ name: 'TBD' }],
  //     },
  //     { time: '4:30-6:00pm', title: 'Closing session', facilitators: [{ name: 'TBD' }] }
    ],
  },
};

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(programData)[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  void activeTab;

  return (
    <section className="bg-white py-24 text-black">
      <Wrapper>
        <AnimatedComponent>
        <HeadingBorderBottom>
          <span className="text-black">Our Programme</span>
        </HeadingBorderBottom>
        </AnimatedComponent>
        <ContentSpacing />
        <AnimatedComponent>
        <ProgramTabs programData={programData} onTabChange={handleTabChange} />

        <div className="p-10 max-w-6xl mx-auto font-sans flex flex-col items-center justify-center min-h-[30vh]">
          <p 
            className="text-2xl md:text-3xl font-black tracking-wider animate-pulse"
            style={{ color: '#FFAC13' }}
          >
            DETAILED PROGRAMME COMING SOON
          </p>

        </div>
        {/* <ProgramTable dayData={programData[activeTab]} /> */}
        </AnimatedComponent>
      </Wrapper>
    </section>
  );
};

export default Program;
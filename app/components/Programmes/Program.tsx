"use client";

import React, { useState } from 'react';
import ProgramTabs from './ProgramTabs';
import ProgramTable, { ProgramItem } from './ProgramTable';
import Wrapper from '../Generics/Wrapper';
import HeadingBorderBottom from '../Headers/HeadingBorderBottom';
import ContentSpacing from '../Spacing/ContentSpacing';

// Define the data for each day from the provided agenda.
const programData: { [key: string]: ProgramItem[] } = {
  'Day 1': [
    { time: '08:30:9:00am', activity: 'Opening Session\nArrival & Registration\nMusic Performance\nSpoken Words\nOpening Remarks', facilitator: 'TBD\nTBD\nYiaga Africa\nOSF' },
    { time: '09:00-10.00am', activity: 'Plenary Session 1: Frontlines of Change: Youth Power and the Battle\nThis opening panel brings together powerful youth voices from across the Global South—Africa, Asia, Latin America, and the MENA region, who are challenging entrenched systems and reimagining democracy on their own terms. These are the young movement-builders, organizers, and strategists shaping the political horizon. Together, they will ground the convening in urgency, creativity, and resistance sharing lessons and bold visions for a future that centers justice, dignity, and collective agency', facilitator: 'Speakers\n§ Shakira or Hanifa??\nKenya (Tax hikes)\n§ Pape Abdoulaye Toure,\nStudent Activists,\nSenegal (Political repression)\n§ Mexico (Urban displacement/gentrification)\n§ Sri Lanka\nModerator: Cheryl Akinyi' },
    { time: '10:00-10:30am', activity: 'HEALTH BREAK/GROUP PHOTO' },
    { time: '11:00-1:00pm', activity: 'Solidarity Mural opening and a theatre artistic production\nA commissioned theatre production on the genealogy and mapping of social movements from the Global South. This vibrant piece traces the roots and evolution of youth-led struggles across Arica, Latin American, Asia and the Middle East. Blending storytelling, music and movement, this piece is a celebration of youth agency and will set the tone for the conference by centring history and solidarity.', facilitator: 'A mosaic of artists-an art collective' },
    { time: '1:00pm-2.00pm', activity: 'LUNCH' },
    { time: '2:00-4:00pm', activity: 'Syndicated Session 1: Connected Struggles: Where Our Stories Meet.\nThis interactive session invites participants to step beyond national, thematic, and geographic borders to connect, reflect, and co-imagine. Through close knit, facilitated dialogues, participants will share insights from their contexts, reflect on movement-building journeys, and explore how democracy is being redefined across the Global South. More than just an icebreaker, this space is designed to spark meaningful relationships and set the tone for the deep, cross-regional conversations that will shape the convening.\nKey output: Visual “map of struggle”', facilitator: '10 facilitated breakaway groups\nGuiding reflection questions\n10 moderators needed' },
    { time: '4:00pm-4:10pm', activity: 'Music Performance', facilitator: 'TBD' },
    { time: '4:10pm-4:30pm', activity: 'Plenary Session 2: Reflection Harvesting Circle\nIn plenary, participants will share insights from the intimate breakout sessions on connected struggles.', facilitator: 'Five participants share insights from the \'Map of Struggle\' using artistic expression or presentation' },
    { time: '4:30pm-4:45pm', activity: 'South-South Solidarity Talks I\nThe South-South Solidarity Talks is a TED-style session for movement leaders to share powerful stories of emancipation, moments of courage and insights from organising on the frontlines. This session seeks to inspire, provoke and mobilizes action', facilitator: 'TBD' },
    { time: '4:45pm-6:00pm', activity: 'PERSONAL TIME' },
    { time: '6:00-9:30 pm', activity: 'WELCOME СОСКТАIL' }
  ],
  'Day 2': [
    { time: '09:00-9:10am', activity: 'Artistic performance (Music)', facilitator: 'TBD' },
    { time: '9:10am-9:45am', activity: 'Reflections on Day 1\nPresentation of Draft South-South Solidarity Pact', facilitator: 'All\nReference Group' },
    { time: '09:45am-11:00am', activity: 'Plenary session 3: Leadership for the futures we want:\nThis panel brings together young leaders from government, political parties, civil society and other sectors to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South. In an era marked by democratic backsliding, the session will explore what it takes to lead with integrity, vision and purpose toward more just and inclusive futures.', facilitator: 'Speakers\n§ Hon. Joanna Mamombe, MP Zimbabwe\n§ South Africa\n§ Brazil\n§ Thailand\nModerator:' },
    { time: '11:00-11:30am', activity: 'HEALTH BREAK' },
    { time: '', activity: 'BREAKOUT SESSION 2:\n11:30-1:30pm (2 hours)\nBuilding a Future-Facing Strategy for Inclusive, Just Democracies.', facilitator: '' },
    { time: '', activity: 'Session 1: Development for Whom? Rethinking State, Market, and the Social Contract:\nThis session interrogates the foundational tensions between the neoliberal order and meaningful democratic practice. It explores how dominant economic models rooted in privatization, austerity, and market fundamentalism hollow out state legitimacy, erode social contracts, and reduce democracy to a procedural form devoid of justice. Drawing on alternative paradigms such as feminist, solidarity, and post-extractivist economies, participants will collectively reimagine development through the lens of dignity, equity, and democratic sovereignty. The session invites bold thinking around how economic systems can be restructured to serve people, not profit, and how economic justice is central to reclaiming democratic futures.\nSpeakers:\n§ Namata Serumaga-Musisi, Economic Fighters League, Ghana\n§ Asia\n§ LATAM\n§ Ostilos Gift, Doctoral Candidate, University of Freestate/ED The Catalyst Center\nModerator: Tessa Dooms, Rivonia Circle', facilitator: '' },
    { time: '', activity: 'Session 2: Institutionalizing the People\'s Voices by exploring pathways to participatory power:\nThis session explores how movements led by youth and marginalized communities can translate their moral authority and organizing power into lasting political and institutional influence. Rather than settling for symbolic inclusion or one-off consultations, the conversation will examine how democratic institutions from parliaments to regional institutions to citizen assemblies can be redesigned to reflect the urgency, imagination, and demands of social movements. How can systems of governance evolve to absorb the energy of the streets into the architecture of decision-making? What does it take to institutionalize participation in ways that shift power, deepen accountability, and build equity into the core of democratic life? This session calls for a bold rethink of how participatory democracy is structured and how institutions must adapt or be remade to serve a new generation of actors and ideas.\nSpeakers:\n§ Cynthia Mbamalu, Director of Programmes, Yiaga Africa\n§ Asia\n§ LATAM\nModerator:', facilitator: '' },
    { time: '', activity: 'Session 3: The Global South and the Future of World Order:\nAs the foundations of the post-World War II global order begin to fracture from the legitimacy crisis in multilateral institutions to the erosion of democratic norms this session asks: what future for the Global South? In a world defined by shifting power blocs, polycrisis, and contested governance, the Global South must move from being a site of extraction and marginality to a strategic actor with agency, vision, and voice. This session will explore how Southern actors can consolidate power through strategic alliances (e.g., BRICS, G20), reimagine multilateralism beyond its Western design, and craft a shared geopolitical and economic agenda rooted in justice, dignity, and sovereignty. What role will youth, movements, and new political formations play in defining this new era? And how can the next generation of Global South leadership assert a bold, coherent position on everything from climate and finance to digital infrastructure and democratic governance?\nSpeakers:\n§ Asia\n§ LATAM\n§ Nomzamo Zondo, Social and Economic Rights Institute, South Africa\nModerator:', facilitator: '' },
    { time: '', activity: 'Session 4:  Building movements with depth and direction, seeking power that holds:\nThis session explores what it truly means to build movements that don’t just ignite change but sustain it. In a context where many mobilizations are reactive, short-lived, or vulnerable to co-option, we ask: What does resilience look like in movement-building across the Global South? Participants will unpack the shift from catalytic protest to strategic organizing, reflecting on how to anchor movements in political clarity, deep community roots, and long-term vision. The conversation will also explore the often-overlooked infrastructures of movement resilience care, healing, leadership renewal, knowledge transmission, and intergenerational continuity. This session is a call to move beyond flashpoints toward movements that adapt, endure, and transform even in the face of repression, burnout, or co-option.\nSpeakers:\n§ Noncedo Madubedube, Executive Director, Equal Education, South Africa\n§ Asia\n§ LATAM\n§ Villy Nawa, MSTDC, Tanzania\nModerator: Sylvian Saluseke, Coordinator, Afrikii', facilitator: '' },
    { time: '1:30-2:30pm', activity: 'LUNCH', facilitator: ''},
    { time: '2:30-4:30pm', activity: 'Cultural Excursion\nParticipants will have the opportunity to engage with the rich cultural and historical heritage of the host city. Divided into small groups, they will visit various heritage and cultural sites, offering space for continued learning and deepening of connection among peers.', facilitator: 'Robben Island' },
    { time: '6:00pm-7:00pm', activity: 'DINNER/PERSONAL TIME', facilitator: ' ' },
    { time: '7:00pm-9:00pm', activity: 'Open Forum\nParticipants are invited to self-organise sessions on issues that matter to them.', facilitator: '' }
  ],
  'Day 3': [
    { time: '9:00am-9:15am', activity: 'Artistic performance\n§ Spoken Word\n§ Music', facilitator: 'TBD' },
    { time: '09:15am-9:30am', activity: 'Reflections from Cultural Visit to Robben Island', facilitator: 'Collective Recap' },
    { time: '09:30am-10:30am', activity: 'Plenary session 4:\nThis session will provide a space for feedback from the breakaway discussions. Each group will present key insights and recommendations, followed by questions and reflections from the floor.', facilitator: 'Session 1: Tessa Dooms\nSession 2: Cynthia Mbamalu\nSession 3:\nSession 4:' },
    { time: '10:30am-10:35am', activity: 'Music Performance', facilitator: 'TBD' },
    { time: '10:35am-12:00pm', activity: 'Plenary session 5: Organizing across generations:\nThis intergenerational dialogue creates a space for activists and community organisers across generations to explore tensions, lessons and strategies that signpost generational divides in movements and organising. It provides an opportunity for activists and organisers to draw lessons from older movement leaders and also enables older activists to appreciate new forms of movement building led by younger activists.  The session provides a mentorship opportunity for emerging activists to learn how to build resilient movements while navigating the dilemmas and pitfalls of organising. ', facilitator: 'Speakers\n§ Brian Kagoro\n§ Kumi Naidoo\n§ Zaha Lucy, End Femicide, Kenya\n§ TBD\n§ TBD\nModerator:' },
    { time: '12:00pm-12:15pm', activity: 'HEALTH BREAK' },
    { time: '12:15pm-1:30pm', activity: 'Breakout 3: Workshops on the South-South Solidarity Pact', facilitator: 'Reference group members will facilitate in-depth discussions' },
    { time: '1:30pm-2:30pm', activity: 'LUNCH' },
    { time: '2:30pm-4:30pm', activity: 'Movements Building Labs\nFirst Session: 2:30pm - 3:30pm\nSecond Session: 3:30pm - 4:30pm', facilitator: 'Participants will participate in two lab sessions only.\nTBD' },
    { time: '4:30-6:00pm', activity: 'Closing session', facilitator: 'TBD' }
  ],
};


const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(programData)[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white py-24 text-black">
        <Wrapper>
            <HeadingBorderBottom>
              <span className="text-black">Our Programme</span>
            </HeadingBorderBottom>
            <ContentSpacing />

                <ProgramTabs programData={programData} onTabChange={handleTabChange} />
                <ProgramTable data={programData[activeTab]} />
                
        </Wrapper>
    </section>
  );
};



export default Program;
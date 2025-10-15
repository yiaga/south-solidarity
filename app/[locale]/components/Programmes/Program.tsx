"use client";

import React, { useState } from "react";
import ProgramTabs from "./ProgramTabs";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";
import AnimatedComponent from "../AnimatedComponent";
import { usePathname } from "next/navigation";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

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

// ---- Static Program Data (Structure remains the same) ----
const programData: ProgramData = {
  "Day 1": {
    date: "Thursday October 30th 2025",
    sessions: [
      {
        time: "08:30-9:00am",
        title: "Opening Session",
        description:
          "Arrival & Registration, Music Performance, Spoken word, Opening Remarks",
        facilitators: [],
      },
      {
        time: "09:00-10.00am",
        title:
          "Plenary Session 1: Frontlines of Change: Youth Power and the Battle for Democracy",
        description:
          "This opening panel brings together powerful youth voices from across the Global South—Africa, Asia, Latin America, and the MENA region. These young movement-builders will ground the convening in urgency and resistance, sharing bold visions for a future that centers justice, dignity, and collective agency.",
        speakers: [],
        facilitators: [],
      },
      {
        time: "",
        title: "DETAILED PROGRAMME OF EVENT COMING SOON",
        facilitators: [],
      },
    ],
  },
  "Day 2": {
    date: "Friday 31st October, 2025",
    sessions: [
      {
        time: "09:00-9:10am",
        title: "Artistic performance (Music)",
        facilitators: [],
      },
      {
        time: "9:10am-9:45am",
        title:
          "Reflections on Day 1 & Presentation of Draft South-South Solidarity Pact",
        facilitators: [],
      },
      {
        time: "09:45am-11:00am",
        title: "Plenary session 3: Leadership for the futures we want",
        description:
          "This panel brings together young leaders from government, political parties, and civil society to reflect on the kind of leadership needed to sustain meaningful democracies in the Global South.",
        speakers: [],
        facilitators: [],
      },
      {
        time: "",
        title: "DETAILED PROGRAMME OF EVENT COMING SOON",
        facilitators: [],
      },
    ],
  },
  "Day 3": {
    date: "Saturday 1st November 2025",
    sessions: [
      {
        time: "9:00am-9:15am",
        title: "Artistic performance",
        description: "Spoken Word & Music",
        facilitators: [],
      },
      {
        time: "09:15am-9:30am",
        title: "Reflections from Cultural Visit to Robben Island",
        facilitators: [],
      },
      {
        time: "09:30am-10:30am",
        title: "Plenary session 4",
        description:
          "This session will provide a space for feedback from the breakaway discussions. Each group will present key insights and recommendations.",
        facilitators: [],
      },
      {
        time: "",
        title: "DETAILED PROGRAMME OF EVENT COMING SOON",
        facilitators: [],
      },
    ],
  },
};

// ---- Component ----
const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(programData)[0]);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  void activeTab

  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;
  const t = localeMessages.Program;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white py-24 text-black">
      <Wrapper>
        <AnimatedComponent>
          <HeadingBorderBottom>
            <span className="text-black">{t.program_title}</span>
          </HeadingBorderBottom>
        </AnimatedComponent>

        <ContentSpacing />

        <AnimatedComponent>
          <ProgramTabs programData={programData} onTabChange={handleTabChange} />

          <div className="p-10 max-w-6xl mx-auto font-sans flex flex-col items-center justify-center min-h-[30vh]">
            <p
              className="text-2xl md:text-3xl font-black tracking-wider animate-pulse"
              style={{ color: "#FFAC13" }}
            >
              {t.detail}
            </p>
          </div>
        </AnimatedComponent>
      </Wrapper>
    </section>
  );
};

export default Program;

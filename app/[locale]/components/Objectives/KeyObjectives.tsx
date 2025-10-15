"use client";

import React from "react";
import ObjectiveCard from "./ObjectiveCard";
import Wrapper from "../Generics/Wrapper";
import HeadingBorderBottom from "../Headers/HeadingBorderBottom";
import ContentSpacing from "../Spacing/ContentSpacing";
import AnimatedComponent from "../AnimatedComponent";
import { usePathname } from "next/navigation";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

const KeyObjectives = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;

  const t = localeMessages.Objective;

  const objectivesData = [
    {
      number: "01",
      title: t.objective_title_1,
      description: t.objective_1,
    },
    {
      number: "02",
      title: t.objective_title_2,
      description: t.objective_2,
    },
    {
      number: "03",
      title: t.objective_title_3,
      description: t.objective_3,
    },
    {
      number: "04",
      title: t.objective_title_4,
      description: t.objective_4,
    },
    {
      number: "05",
      title: t.objective_title_5,
      description: t.objective_5,
    },
  ];

  return (
    <section className="bg-[#FFAC13] py-24 text-black">
      <Wrapper>
        <AnimatedComponent>
          <HeadingBorderBottom color="#2EA024">
            <span className="text-black">{t.key_objectives}</span>
          </HeadingBorderBottom>
        </AnimatedComponent>

        <ContentSpacing />
        <ContentSpacing />

        <ul className="flex overflow-x-auto gap-5 p-4 no-scrollbar">
          {objectivesData.map((objective) => (
            <AnimatedComponent key={objective.number}>
              <ObjectiveCard
                num={objective.number}
                title={objective.title}
                description={objective.description}
              />
            </AnimatedComponent>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default KeyObjectives;

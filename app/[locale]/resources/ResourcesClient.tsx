"use client";

import React from "react";
import { usePathname } from "next/navigation";
import PageBanner from "../components/Banners/PageBanner";
import ssmcCover from "@/public/assets/images/ssmc_cover.jpg";
import Wrapper from "../components/Generics/Wrapper";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import ResourcesCard from "./ResourceCard";
import HeadingBorderBottom from "../components/Headers/HeadingBorderBottom";
import AnimatedComponent from "../components/AnimatedComponent";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

export default function ResourcesClient() {
  const pathname = usePathname();

  // ✅ Detect current locale (e.g., /fr/resources → 'fr')
  const currentLocale = pathname.split("/")[1] || "en";
  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;

  const t = localeMessages.Resources;

  const resourcesData = [
    {
      imageSrc: ssmcCover,
      title: t.ssmc_title,
      description: t.ssmc_description,
      buttonText: t.download_button,
      buttonLink: "/assets/documents/ssmc_presentation.pdf",
    },
  ];

  return (
    <section>
      <PageBanner title={t.banner_title} />
      <Wrapper>
        <SectionSpacing />
        <AnimatedComponent>
          <HeadingBorderBottom>
            <span className="text-black">{t.section_heading}</span>
          </HeadingBorderBottom>
        </AnimatedComponent>
        <SectionSpacing />
        <div className="flex flex-col space-y-16">
          {resourcesData.map((resource, index) => (
            <AnimatedComponent key={index}>
              <ResourcesCard
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

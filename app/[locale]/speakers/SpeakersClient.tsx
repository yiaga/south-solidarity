"use client";

import React from "react";
import { usePathname } from "next/navigation";
import PageBanner from "../components/Banners/PageBanner";
import MeetTheTeam from "../components/Team/MeetTheTeam";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

export default function SpeakersClient() {
  const pathname = usePathname();

  // ✅ Detect current locale from pathname (e.g., /fr/speakers → 'fr')
  const currentLocale = pathname.split("/")[1] || "en";
  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;

  const t = localeMessages.Speakers;

  return (
    <section>
      <PageBanner title={t.banner_title} />
      <MeetTheTeam
        title={t.section_title}
        className="bg-white py-24"
        bgText="text-black"
      />
    </section>
  );
}

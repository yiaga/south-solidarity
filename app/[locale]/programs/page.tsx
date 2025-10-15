import PageBanner from "../components/Banners/PageBanner";
import Program from "../components/Programmes/Program";
import { generateLocaleStaticParams } from "@/app/libs/locales";
import { usePathname } from "next/navigation";
import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

export const generateStaticParams = generateLocaleStaticParams;

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

export default async function Programme({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ Select correct translation set
  const localeMessages =
    ALL_MESSAGES[locale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;
  const t = localeMessages.Program;

  return (
    <section>
      <PageBanner title={t.program_title} />
      <Program />
    </section>
  );
}

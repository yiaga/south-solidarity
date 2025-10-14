import Link from "next/link";
import HommerBanner from "./components/Banners/HommerBanner";
import SectionSpacing from "./components/Spacing/SectionSpacing";
import Wrapper from "./components/Generics/Wrapper";
import AnimatedComponent from "./components/AnimatedComponent";
import HeadingBorderBottom from "./components/Headers/HeadingBorderBottom";
import BaseSpacing from "./components/Spacing/BaseSpacing";
import ContentSpacing from "./components/Spacing/ContentSpacing";
import Statistics from "./components/Statistics/Statistics";
import KeyObjectives from "./components/Objectives/KeyObjectives";
import Buttton from "./components/Buttons/Buttton";
import MeetTheTeam from "./components/Team/MeetTheTeam";
import Program from "./components/Programmes/Program";

// Localized message imports
import EnglishTranslation from "../messages/en.json";
import FrenchTranslation from "../messages/fr.json";
import SpanishTranslation from "../messages/es.json";


// --- All translations ---
const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

type TranslationKey = keyof typeof EnglishTranslation["HomePage"];

// --- Translation helper function ---
const getT = (locale: string) => {
  const localeMessages =
    ALL_MESSAGES[locale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;

  const homePageMessages = localeMessages.HomePage;

  return (key: TranslationKey) => {
    return homePageMessages[key] || `[Translation Missing: ${key} for ${locale}]`;
  };
};

// --- Static locales for pre-generation ---
const locales = ["en", "fr", "es"];

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

// ✅ Fixed typing: inline type for params
export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t = getT(locale);

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* --- Hero Banner --- */}
      <HommerBanner />
      <SectionSpacing />

      {/* --- About Section --- */}
      <Wrapper>
        <AnimatedComponent>
          <HeadingBorderBottom>{t("about_title")}</HeadingBorderBottom>
        </AnimatedComponent>

        <BaseSpacing />

        <AnimatedComponent>
          <p className="text-lg leading-relaxed text-gray-700">
            {t("about_p1")}
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-700">
            {t("about_p2")}
          </p>
        </AnimatedComponent>

        <ContentSpacing />

        <div className="px-0 lg:px-24">
          <AnimatedComponent>
            <Statistics />
          </AnimatedComponent>
        </div>
      </Wrapper>

      <SectionSpacing />

      {/* --- Objectives Section --- */}
      <KeyObjectives />

      {/* --- Pact Section --- */}
      <section className="bg-gray-100">
        <div className="py-24 text-black">
          <Wrapper>
            <AnimatedComponent>
              <HeadingBorderBottom>
                {t("pact_title_line1")} <br />
                {t("pact_title_line2")}
              </HeadingBorderBottom>
            </AnimatedComponent>

            <BaseSpacing />
            <ContentSpacing />

            <AnimatedComponent>
              <p className="text-lg leading-relaxed text-gray-700">
                {t("pact_p1")}
              </p>
            </AnimatedComponent>

            <BaseSpacing />
            <ContentSpacing />

            <AnimatedComponent>
              <Link href="/resources" className="inline-block">
                <Buttton
                  size="md"
                  variant="secondary"
                  className="text-white bg-green-600 hover:bg-green-700"
                >
                  {t("pact_button")}
                </Buttton>
              </Link>
            </AnimatedComponent>
          </Wrapper>
        </div>
      </section>

      {/* --- Team Section --- */}
      <MeetTheTeam
        title={t("team_title")}
        className="bg-gray-900 py-24"
        bgText="text-white"
      />

      {/* --- Programs Section --- */}
      <Program />
    </section>
  );
}

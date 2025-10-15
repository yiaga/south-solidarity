"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./components/Generics/Logo";
import Socials from "./components/Generics/Socials";
import Wrapper from "./components/Generics/Wrapper";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

const Footer = () => {
  const pathname = usePathname();

  // ✅ Detect current locale from pathname (e.g. /fr/programs → 'fr')
  const currentLocale = pathname.split("/")[1] || "en";
  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;

  const t = localeMessages.Footer;

  return (
    <footer>
      <div>
        <Wrapper className="h-[221px] flex items-center justify-between bg-text border-b border-amber-300">
          {/* Logo */}
          <div>
            <Link href={`/${currentLocale}`}>
              <Logo />
            </Link>
          </div>

          {/* Quick Links */}
          <ul className="font-inter flex flex-col space-y-2">
            <li>
              <h4 className="font-bold text-lg text-[#FFAC13]">
                {t.quick_links}
              </h4>
            </li>
            <li className="flex space-x-4 text-white">
              <Link href={`/${currentLocale}`} className="menu-link">
                {t.home}
              </Link>
              <Link href={`/${currentLocale}/programs`} className="menu-link">
                {t.programs}
              </Link>
              <Link href={`/${currentLocale}/speakers`} className="menu-link">
                {t.speakers}
              </Link>
              <Link href={`/${currentLocale}/resources`} className="menu-link">
                {t.resources}
              </Link>
            </li>
          </ul>

          {/* Socials */}
          <div>
            <Socials />
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState } from "react";
import Logo from "../Generics/Logo";
import Wrapper from "../Generics/Wrapper";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "../../LocaleSwitcher";

import EnglishTranslation from "@/app/messages/en.json";
import FrenchTranslation from "@/app/messages/fr.json";
import SpanishTranslation from "@/app/messages/es.json";

const ALL_MESSAGES = {
  en: EnglishTranslation,
  fr: FrenchTranslation,
  es: SpanishTranslation,
};

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const HEADER_HEIGHT_PX = "111px";

  // ✅ Detect current locale from pathname (e.g., /en/programs → 'en')
  const currentLocale = pathname.split("/")[1] || "en";
  const localeMessages =
    ALL_MESSAGES[currentLocale as keyof typeof ALL_MESSAGES] || ALL_MESSAGES.en;
  const navT = localeMessages.Nav;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getMobileLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `text-4xl ${
      isActive ? "font-bold text-[#FFAC13]" : "text-white"
    }`;
  };

  const getDesktopLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `text-base uppercase hover:text-[#FFAC13] transition-colors ${
      isActive ? "font-bold text-[#FFAC13]" : "text-white"
    }`;
  };

  // ✅ Locale-aware, translated navigation links
  const links = [
    { name: navT.home, href: `/${currentLocale}` },
    { name: navT.programs, href: `/${currentLocale}/programs` },
    { name: navT.speakers, href: `/${currentLocale}/speakers` },
    { name: navT.resources, href: `/${currentLocale}/resources` },
  ];

  return (
    <header>
      <Wrapper className="h-[111px] flex items-center justify-between bg-[#2EA024] fixed top-0 right-0 left-0 z-50">
        <div>
          <Link href={`/${currentLocale}`}>
            <Logo />
          </Link>
        </div>

        {/* --- DESKTOP MENU --- */}
        <nav className="hidden lg:block">
          <ul className="font-inter flex items-center space-x-6">
            <li className="flex space-x-4 text-white">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={getDesktopLinkClasses(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </li>
            <li>
              <LocaleSwitcher isMobile={false} />
            </li>
          </ul>
        </nav>

        {/* --- MOBILE MENU BUTTON --- */}
        <div className="flex items-center space-x-4 lg:hidden">
          <LocaleSwitcher isMobile={false} />
          <button onClick={toggleMenu} className="text-gray-800">
            <HiBars3 className="h-8 w-8 text-[#FFAC13]" />
          </button>
        </div>
      </Wrapper>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      {isMenuOpen && (
        <div
          className="fixed left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out"
          style={{ top: HEADER_HEIGHT_PX }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-5xl font-light"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <nav className="flex flex-col items-center space-y-8 mb-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={getMobileLinkClasses(link.href)}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNav;

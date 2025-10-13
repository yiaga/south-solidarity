// components/TopNav.tsx (Updated)
"use client";

import React, { useState } from 'react';
import Logo from "../Generics/Logo";
import Wrapper from "../Generics/Wrapper";
import { HiBars3 } from "react-icons/hi2";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocaleSwitcher from '../../LocaleSwitcher';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const HEADER_HEIGHT_PX = '111px'; 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = pathname.endsWith(href) && (pathname.split('/').filter(Boolean).length === 1 || href !== '/');
    return `text-4xl ${isActive ? 'font-bold text-[#FFAC13]' : 'text-white'}`;
  };

  const getDesktopLinkClasses = (href: string) => {
    const isActive = pathname.endsWith(href) && (pathname.split('/').filter(Boolean).length === 1 || href !== '/');
    return `text-base uppercase hover:text-[#FFAC13] transition-colors ${isActive ? 'font-bold text-[#FFAC13]' : 'text-white'}`;
  };

  return (
    <header>
      <Wrapper
        className="h-[111px] flex items-center justify-between bg-[#2EA024] border-b-0 fixed top-0 right-0 left-0 z-50"
      >
        <div>
          <Link href="/"><Logo /></Link>
        </div>

        {/* --- DESKTOP MENU (Visible only on LG screens and up) --- */}
        <nav className="hidden lg:block">
          <ul className="font-inter flex items-center space-x-6">
            <li className="flex space-x-4 text-white">
              <Link href="/" className={getDesktopLinkClasses('/')}>HOME</Link>
              <Link href="/programs" className={getDesktopLinkClasses('/programs')}>PROGRAMS</Link>
              <Link href="/speakers" className={getDesktopLinkClasses('/speakers')}>SPEAKERS</Link>
              <Link href="/resources" className={getDesktopLinkClasses('/resources')}>RESOURCES</Link>
            </li>
           
            <li>
              {/* DESKTOP LocaleSwitcher (isMobile={false} is correct here) */}
              <LocaleSwitcher isMobile={false} /> 
            </li>
          </ul>
        </nav>
        
        {/* --- MOBILE/TABLET BUTTONS (Hidden on LG screens and up) --- */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* MOBILE/TABLET LocaleSwitcher (isMobile={false} is correct for compact button) */}
          <LocaleSwitcher isMobile={false} /> 
          <button onClick={toggleMenu} className="text-gray-800">
            <HiBars3 className="h-8 w-8 text-[#FFAC13]" />
          </button>
        </div>
      </Wrapper>
      
      {/* --- MOBILE FULL-SCREEN MODAL MENU (Hidden on LG screens and up) --- */}
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
            <Link href="/" className={getMobileLinkClasses('/')} onClick={closeMenu}>Home</Link>
            <Link href="/programs" className={getMobileLinkClasses('/programs')} onClick={closeMenu}>Program</Link>
            <Link href="/speakers" className={getMobileLinkClasses('/speakers')} onClick={closeMenu}>Speakers</Link>
            <Link href="/resources" className={getMobileLinkClasses('/resources')} onClick={closeMenu}>Resources</Link>
          </nav>
          
          {/* OPTIONAL: If you wanted a full-width selector inside the menu: */}
          {/* <div className="mt-8 w-3/4 max-w-xs">
            <LocaleSwitcher isMobile={true} /> 
          </div> */}

        </div>
      )}
    </header>
  );
};

export default TopNav;
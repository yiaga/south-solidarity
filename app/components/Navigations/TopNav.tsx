"use client";

import React, { useState } from 'react';
import Buttton from "../Buttons/Buttton";
import Logo from "../Generics/Logo";
import Wrapper from "../Generics/Wrapper";
import { HiBars3 } from "react-icons/hi2";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `text-4xl ${isActive ? 'font-bold text-[#FFAC13]' : 'text-white'}`;
  };

  return (
    <header>
      <Wrapper
        className="h-[111px] flex items-center justify-between bg-[#2EA024] border-b-0 fixed top-0 right-0 left-0 z-50"
      >
        <div>
          <Link  href="/"><Logo /></Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Buttton size="sm" className="text-primary" variant="border">
            ENG
          </Buttton>
          <button onClick={toggleMenu} className="text-gray-800">
            <HiBars3 className="h-8 w-8 text-[#FFAC13]" />
          </button>
        </div>
      </Wrapper>
      
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            <Link href="/" className={getLinkClasses('/')} onClick={closeMenu}>Home</Link>
            <Link href="/programs" className={getLinkClasses('/programs')} onClick={closeMenu}>Program</Link>
            <Link href="/speakers" className={getLinkClasses('/speakers')} onClick={closeMenu}>Speakers</Link>
            <Link href="/resources" className={getLinkClasses('/resources')} onClick={closeMenu}>Resources</Link>
            <Link href="/updates" className={getLinkClasses('/updates')} onClick={closeMenu}>Updates</Link>
            <Link href="/watchsessions" className={getLinkClasses('/watchsessions')} onClick={closeMenu}>Watch Sessions</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNav;
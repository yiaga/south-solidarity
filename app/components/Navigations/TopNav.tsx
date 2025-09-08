"use client";

import React, { useState } from 'react';
import Buttton from "../Buttons/Buttton";
import Logo from "../Generics/Logo";
import Wrapper from "../Generics/Wrapper";
import { HiBars3 } from "react-icons/hi2";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Wrapper
        className="h-[111px] flex items-center justify-between bg-[#2EA024] border-b-0 fixed top-0 right-0 left-0 z-50"
      >
        <div>
          <Logo />
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
            <a href="#" className="text-4xl font-bold text-[#FFAC13]">Home</a>
            <a href="#" className="text-4xl text-white">Program</a>
            <a href="#" className="text-4xl text-white">Speakers</a>
            <a href="#" className="text-4xl text-white">Resources</a>
            <a href="#" className="text-4xl text-white">Updates</a>
            <a href="#" className="text-4xl text-white">Watch Sessions</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNav;
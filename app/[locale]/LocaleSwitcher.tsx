// LocaleSwitcher.tsx (Corrected, removing mocks)
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Assuming you have a real HiChevronDown icon and a Button component
import { HiChevronDown } from "react-icons/hi2"; 
// NOTE: I've removed the mock Buttton component definition. 
// You must ensure your actual Buttton component is imported or defined. 
// For this example, I'll use a standard <button>.

// --- Mocks REMOVED ---
// const Link = (props: any) => <a {...props}>{props.children}</a>;
// const usePathname = () => '/en/programs'; // THIS IS THE PROBLEM
// const HiChevronDown = (props: any) => <svg className={props.className} fill="currentColor" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
// const Buttton = (props: any) => <button {...props} className={`py-2 px-4 rounded-lg transition duration-300 ${props.className}`}>{props.children}</button>;
// --- Mocks REMOVED ---


// Define the available locales and their display names
const locales = [
  { code: 'en', label: 'EN', fullName: 'English' },
  { code: 'fr', label: 'FR', fullName: 'Français' },
  { code: 'es', label: 'ES', fullName: 'Español' },
];

interface LocaleSwitcherProps {
  isMobile: boolean; // Prop to adapt styling for mobile/desktop
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ isMobile }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 1. Identify the current locale
  const pathSegments = pathname.split('/').filter(Boolean);
  
  let currentLocaleCode = 'en'; // Default
  // Check if the first segment of the path is a valid locale code
  if (pathSegments.length > 0 && locales.some(l => l.code === pathSegments[0])) {
    currentLocaleCode = pathSegments[0];
  } 

  const currentLocale = locales.find(l => l.code === currentLocaleCode) || locales[0];
  

  // 2. Logic to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 3. Function to create the new path, always pointing to the homepage root (e.g., /fr)
  const getPathForLocale = (newLocale: string) => {
    return `/${newLocale}`;
  };

  // Base classes for the dropdown button (Using a standard button now)
  const buttonBaseClasses = isMobile 
    ? "w-full justify-center" 
    : "w-auto";
    
  // --- Using a standard button for the sake of this self-contained example ---
  const buttonClassName = `flex items-center space-x-1 py-2 px-4 rounded-lg transition duration-300 text-primary bg-white shadow-md border border-gray-200 hover:border-indigo-400 ${buttonBaseClasses}`;

  return (
    <div className={`relative ${buttonBaseClasses}`} ref={dropdownRef}>
      <button // Replaced Buttton with standard <button>
        className={buttonClassName}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{currentLocale.label}</span>
        {/* Assuming HiChevronDown is correctly imported/defined */}
        <HiChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className={`absolute ${isMobile ? 'top-full left-0 mt-2' : 'top-full right-0 mt-2'} w-32 bg-white border border-gray-200 rounded-lg shadow-xl z-50`}>
          <ul className="py-1">
            {locales.map((locale) => (
              <li key={locale.code}>
                <Link
                  href={getPathForLocale(locale.code)}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    locale.code === currentLocaleCode
                      ? 'font-bold text-[#2EA024]'
                      : 'text-gray-700'
                  }`}
                >
                  {locale.fullName} ({locale.label})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
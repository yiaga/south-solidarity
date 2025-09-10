"use client";

import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';

// Define the type for the component's props, which include React's children prop
type AnimatedComponentProps = PropsWithChildren<{}>;

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure the DOM reference is not null before observing
    if (!domRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    // Cleanup the observer when the component unmounts
    return () => {
      // Check if domRef.current is still available before disconnecting
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      ref={domRef as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
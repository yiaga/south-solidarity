"use client";

import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';

type AnimatedComponentProps = PropsWithChildren<unknown>;

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(currentRef);

    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
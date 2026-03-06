"use client";

import {useState, useEffect} from 'react';

export function MediaQuery() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    }

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return {
    isMobile: width !== null && width < 768,
    isTablet: width !== null && width >= 768 && width < 1024,
    isDesktop: width !== null && width >= 1024, 
    width
  };
}
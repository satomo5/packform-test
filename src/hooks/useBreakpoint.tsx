import { useState, useEffect } from "react";
import {
  BREAKPOINTS,
  BreakpointsType,
} from "../assets/styles/common/BreakPoint";

// Type for breakpoints

function useBreakpoint(): keyof BreakpointsType {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<keyof BreakpointsType>("xs");

  useEffect(() => {
    // Function to determine the current breakpoint
    const determineBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= BREAKPOINTS.xl) return "xl";
      if (width >= BREAKPOINTS.lg) return "lg";
      if (width >= BREAKPOINTS.md) return "md";
      if (width >= BREAKPOINTS.sm) return "sm";
      return "xs";
    };

    // Set initial breakpoint
    setCurrentBreakpoint(determineBreakpoint());

    // Handler for window resize
    const handleResize = () => {
      setCurrentBreakpoint(determineBreakpoint());
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentBreakpoint;
}

export default useBreakpoint;

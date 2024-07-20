import { useState, useEffect } from "react";

/**
 * Custom hook that tracks the vertical scroll position on the window
 * @returns The current vertical scroll position
 */
const useScroll = (): number => {
  // State to hold the vertical scroll position
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Function to update the scroll position on scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Effect to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return the current vertical scroll position
  return scrollY;
};

export default useScroll;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Only proceed if the pathname is the main page and a hash exists
    if (location.pathname === "/" && location.hash) {
      // Get the ID (e.g., "features") without the '#'
      const id = location.hash.substring(1);

      // Use a brief timeout to wait for the DOM to settle after routing
      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // 100ms is a safe delay for rendering

      // Cleanup function for the timeout
      return () => clearTimeout(timer);
    }
    // If navigating to a route without a hash, scroll to top
    else if (location.pathname !== location.state?.fromHash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.key]); // Depend on key for robust route changes
};

export default useHashScroll;

import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // "document.documentElement.scrollTo" or "window.scrollTo" works
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scrolling animation to top
    });
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render anything to the DOM
};

export default ScrollToTop;

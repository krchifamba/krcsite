import { useEffect } from "react";

export default function PreserveScroll() {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component just preserves scroll state
}

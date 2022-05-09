import { useState, useEffect } from "react";

import LineupSection from "./LineupSection";
import HeroParallax from "./HeroParallax";
import HeroHeader from "./HeroHeader";

const HeroSection = (props) => {
  const { setIsLoaded } = props;
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setPageOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="homeHero">
      <HeroHeader setIsLoaded={setIsLoaded} />
      <LineupSection pageOffset={pageOffset} />
      <HeroParallax pageOffset={pageOffset} />
    </section>
  );
};

export default HeroSection;

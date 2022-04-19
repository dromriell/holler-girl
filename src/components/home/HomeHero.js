import { useState, useEffect } from "react";

import { lineupData } from "../../common/siteData";
import LineupSection from "./LineupSection";
import HeroParallax from "./HeroParallax";
import HomeHeader from "./HomeHeader";

const HomeHero = (props) => {
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
      <HomeHeader setIsLoaded={setIsLoaded} />
      <LineupSection lineupData={lineupData} pageOffset={pageOffset} />
      <HeroParallax pageOffset={pageOffset} />
    </section>
  );
};

export default HomeHero;

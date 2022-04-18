import { useState, useEffect } from "react";

import { lineupData } from "../../common/siteData";
import EventBoard from "./EventBoard";
import LineupSection from "./LineupSection";
import Footer from "../Footer";
import HeroParallax from "./HeroParallax";
import HomeHeader from "./HomeHeader";

import map from "../../assets/map.png";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);

  return (
    <article id="homePage" className="noScroll">
      <section id="homeHero">
        <HomeHeader />
        <LineupSection lineupData={lineupData} pageOffset={pageOffset} />
        <HeroParallax pageOffset={pageOffset} />
      </section>
      <section id="map">
        <img src={map} alt="map" />
      </section>
      <EventBoard />
      <Footer />
    </article>
  );
};

export default HomePage;

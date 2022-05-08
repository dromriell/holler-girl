import { useState } from "react";

import HomeHero from "./HomeHero";
import EventBoard from "./EventBoard";
import PartnerSection from "./PartnerSection";
import Footer from "../Footer";
import LoadingOverlay from "../LoadingOverlay";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article
      id="homePage"
      className="noScroll"
      style={!isLoaded ? { overflow: "hidden", maxHeight: "100vh" } : undefined}
    >
      {!isLoaded && <LoadingOverlay />}
      <HomeHero setIsLoaded={setIsLoaded} />
      <EventBoard />
      {/* <PartnerSection /> */}
      <section id="map">
        <h2>
          <span>4211 Lower River Road</span>
          <span>Livingston, KY 40445</span>
        </h2>
        <div className="mapBackground"></div>
      </section>
      <Footer />
    </article>
  );
};

export default HomePage;

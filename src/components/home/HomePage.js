import { useState } from "react";

import HomeHero from "./HomeHero";
import EventBoard from "./EventBoard";
import Footer from "../Footer";
import map from "../../assets/map01.png";
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
      <section id="map">
        <h5>295 E Prong Rd</h5>
        <h5>Richmond, KY 40475</h5>
        <img src={map} alt="map" />
      </section>
      <Footer />
    </article>
  );
};

export default HomePage;

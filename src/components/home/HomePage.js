import { useState } from "react";

import HomeHero from "./HomeHero";
import EventBoard from "./EventBoard";
import PartnerSection from "./PartnerSection";
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
      <PartnerSection />
      <section id="map">
        <div
          className="mapBackground"
          style={{ backgroundImage: `url('${map}')` }}
        >
          <h5>
            <span>4211 Lower River Road</span>
            <span>Livingston, KY 40445</span>
          </h5>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default HomePage;

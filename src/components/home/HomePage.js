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
        <div
          className="mapBackground"
          style={{ backgroundImage: `url('${map}')` }}
        >
          <h5>4211 Lower River Road</h5>
          <h5>Livingston, KY 40445</h5>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default HomePage;

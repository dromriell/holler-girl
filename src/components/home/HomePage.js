import { useState } from "react";

import HeroSection from "./hero/HeroSection";
import EventBoard from "./EventBoard";
import Footer from "../Footer";
import LoadingOverlay from "../LoadingOverlay";
import MapSection from "./MapSection";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article
      id="homePage"
      className="noScroll"
      style={!isLoaded ? { overflow: "hidden", maxHeight: "100vh" } : undefined}
    >
      {!isLoaded && <LoadingOverlay />}
      <HeroSection setIsLoaded={setIsLoaded} />
      <EventBoard />
      <MapSection />
      <Footer />
    </article>
  );
};

export default HomePage;

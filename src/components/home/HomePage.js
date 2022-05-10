import { useState } from "react";

import HeroSection from "./hero/HeroSection";
import EventBoard from "./EventBoard";
import Footer from "../Footer";
import LoadingOverlay from "../LoadingOverlay";
import MapSection from "./MapSection";
import { eventSchema } from "../../common/siteData";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <article
        id="homePage"
        className="noScroll"
        style={
          !isLoaded ? { overflow: "hidden", maxHeight: "100vh" } : undefined
        }
      >
        {!isLoaded && <LoadingOverlay />}
        <HeroSection setIsLoaded={setIsLoaded} />
        <EventBoard />
        <MapSection />
        <Footer />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      ></script>
    </>
  );
};

export default HomePage;

import { lineupData } from "../../common/siteData";
import EventBoard from "./EventBoard";
import LineupSection from "./LineupSection";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <article id="homePage" className="noScroll">
      <section>
        <div id="homeHeader">
          <h2>Richmond, KY</h2>
          <h2>August 12th & 13th, 2022</h2>
        </div>
        <div id="ticketButton">
          <button className="ctaButton">
            <p>TICKETS & INFO</p>
          </button>
        </div>
        <LineupSection lineupData={lineupData} />
        <EventBoard />
      </section>
      <Footer />
    </article>
  );
};

export default HomePage;

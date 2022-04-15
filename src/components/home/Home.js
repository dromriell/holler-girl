import { lineupData } from "../../common/lineupData";
import EventBoard from "./EventBoard";
import Lineup from "./Lineup";
import Footer from "../Footer";

const Home = () => {
  return (
    <article id="homePage" className="noScroll">
      <secton>
        <div id="homeHeader">
          <h2>Richmond, KY</h2>
          <h2>August 12th & 13th, 2022</h2>
        </div>
        <div id="ticketButton">
          <button className="ctaButton">
            <p>TICKETS & INFO</p>
          </button>
        </div>
        <Lineup lineupData={lineupData} />
        <EventBoard />
      </secton>
      <Footer />
    </article>
  );
};

export default Home;

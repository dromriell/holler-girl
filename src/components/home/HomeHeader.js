import { default as logo } from "../../assets/HiResTrans.svg";
import gh17PresentsTitle from "../../assets/gh17PresentsTitle.svg";

const HomeHeader = (props) => {
  const { setIsLoaded } = props;
  return (
    <div id="homeHeader">
      <div id="homeHeaderPartnerImg">
        <img src={gh17PresentsTitle} alt="Greenhouse17 Logo" />
      </div>
      <div className="homeHeaderImg">
        <img src={logo} alt="homeLogo" onLoad={() => setIsLoaded(true)} />
      </div>
      <div className="homeHeaderTitle">
        <h2>Mt Vernon, KY</h2>
        <h2>August 12th & 13th, 2022</h2>
      </div>
      <div id="ticketButton">
        <button className="ctaButton">
          <a href="https://www.tickettailor.com/events/hollergirl/695993#">
            <p>BUY TICKETS</p>
          </a>
        </button>
      </div>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat
        pretium nibh ipsum consequat nisl vel. Amet venenatis urna cursus eget
        nunc scelerisque.
      </h3>
    </div>
  );
};

export default HomeHeader;

import { default as logo } from "../../assets/HiResTrans.svg";

const HomeHeader = (props) => {
  const { setIsLoaded } = props;
  return (
    <div id="homeHeader">
      <div className="homeHeaderImg">
        <img src={logo} alt="homeLogo" onLoad={() => setIsLoaded(true)} />
      </div>
      <div className="homeHeaderTitle">
        <h2>Richmond, KY</h2>
        <h2>August 12th & 13th, 2022</h2>
      </div>
      <div id="ticketButton">
        <button className="ctaButton">
          <a href="https://www.tickettailor.com/events/hollergirl/695993#">
            <p>TICKETS & INFO</p>
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

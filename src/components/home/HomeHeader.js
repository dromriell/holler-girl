import { default as logo } from "../../assets/HiResTrans.svg";

const HomeHeader = (props) => {
  return (
    <div id="homeHeader">
      <img src={logo} alt="homeLogo" />
      <div className="homeHeaderTitle">
        <h2>Richmond, KY</h2>
        <h2>August 12th & 13th, 2022</h2>
      </div>
      <div id="ticketButton">
        <button className="ctaButton">
          <p>TICKETS & INFO</p>
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
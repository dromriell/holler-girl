import gh17PresentsTitle from "../../assets/gh17PresentsTitle.svg";

const HomeHeader = (props) => {
  const { setIsLoaded } = props;
  return (
    <div id="homeHeader">
      <div id="homeHeaderPartnerImg">
        <img src={gh17PresentsTitle} alt="Greenhouse17 Logo" />
      </div>
      <div className="homeHeaderImg">
        <img
          src="https://res.cloudinary.com/dnmokvouu/image/upload/v1652026402/hollergirl2022/hgLogo500_tko6dp.webp"
          alt="homeLogo"
          onLoad={() => setIsLoaded(true)}
        />
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
      <div className="homeHeaderBody">
        <h3>
          HollerGirl is a baby music festival this year that grew out of a
          smaller concept with Pickin on the Patio. This is so much more than an
          amazing weekend of music, it is a concept. A female focused music
          event where we highlight all of the incredibly talented women
          musicians we have here in Kentucky.
        </h3>
        <h3>
          In addition to the music, HollerGirl is partnering with Greenhouse17,
          an advocacy agency committed to ending intimate partner abuse in
          families and in the community. As a survivor myself, it is my passion
          to shine light on this incredible organization as well as help raise
          money by means of a silent art auction that will be held Saturday
          afternoon.
        </h3>
      </div>
    </div>
  );
};

export default HomeHeader;

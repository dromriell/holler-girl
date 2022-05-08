import { eventData } from "../../common/siteData";
import siteTitle from "../../assets/siteText.svg";

const Event = (props) => {
  const { name, images, title, description } = props;

  return (
    <div className="event">
      <h3>{title}</h3>
      <div className="eventContent">
        {images.map((image, idx) => {
          return (
            <div
              className="eventBackground"
              style={{ backgroundImage: `url('${image}')` }}
              key={`${name}${idx}`}
            ></div>
          );
        })}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};

const CampingSection = (props) => {
  return (
    <div id="campingSection" className="eventSection">
      <img src={siteTitle} alt="The Site" />
      {siteTitle}
      {eventData.camping.map((event, idx) => {
        return <Event {...event} key={`campingEvent${idx}`} />;
      })}
      <button className="ctaButton">
        <a href="/info/">
          <p>Event Info</p>
        </a>
      </button>
    </div>
  );
};

const ActivitiesSection = (props) => {
  return (
    <div id="activitiesSection" className="eventSection">
      <div className="custom-shape-divider-top-1651719041">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {eventData.activities.map((event, idx) => {
        return <Event {...event} key={`activitiesEvent${idx}`} />;
      })}
      <div className="custom-shape-divider-bottom-1651893184">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const EventBoard = (props) => {
  const { borderEvent } = props;
  return (
    <section id="eventBoard">
      <CampingSection />
      <ActivitiesSection />
    </section>
  );
};

export default EventBoard;

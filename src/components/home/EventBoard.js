import { eventData } from "../../common/siteData";

const Event = (props) => {
  const { name, url, description } = props;

  return (
    <div className="event">
      <div
        className="eventBackground"
        style={{ backgroundImage: `url('${url}')` }}
      ></div>
      <h5>{description}</h5>
    </div>
  );
};

const EventBoard = (props) => {
  return (
    <section id="eventBoard">
      {eventData.map((event, idx) => {
        return <Event {...event} key={idx} />;
      })}
    </section>
  );
};

export default EventBoard;

// Event Board Imports
import { GrYoga } from "react-icons/gr";
import { FaCampground } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

const Event = (props) => {
  const { background, Icon } = props;

  return (
    <div className="event">
      <div className="eventIcon" style={{ backgroundColor: background }}>
        {Icon}
      </div>
      <h5>{props.children}</h5>
    </div>
  );
};

const EventBoard = (props) => {
  return (
    <section id="eventBoard">
      <Event background="#fcfcf9" Icon={<FaCampground />}>
        On-site camping
      </Event>
      <Event background="#a1869e" Icon={<GrYoga />}>
        Sat. Morning Yoga w/ Ashley Shochat
      </Event>
      <Event background="#fdf7a3" Icon={<RiMovie2Line />}>
        Friday Night Movie
      </Event>
    </section>
  );
};

export default EventBoard;

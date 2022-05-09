import Clouds from "./Clouds";
import lineUpImage from "../../../assets/lineup.svg";

const LineupSection = (props) => {
  const { pageOffset } = props;
  return (
    <article id="lineupContainer">
      <Clouds pageOffset={pageOffset} />

      <div id="lineup">
        <img src={lineUpImage} alt={"lineup"} />
      </div>
    </article>
  );
};

export default LineupSection;

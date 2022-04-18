import Clouds from "./Clouds";

const LineupSection = (props) => {
  const { lineupData, pageOffset } = props;
  return (
    <article id="lineupContainer">
      <Clouds pageOffset={pageOffset} />
      <div id="lineup">
        <h2>Line-up</h2>
        <ul>
          {lineupData.map((artist, idx) => {
            return (
              <li key={`artist-${idx}`}>
                <h3>{artist}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default LineupSection;

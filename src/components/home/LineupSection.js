const LineupSection = (props) => {
  const { lineupData } = props;
  return (
    <section id="lineup">
      <ul>
        {lineupData.map((artist, idx) => {
          return <li key={`artist-${idx}`}>{artist}</li>;
        })}
      </ul>
    </section>
  );
};

export default LineupSection;

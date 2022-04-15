const Lineup = (props) => {
  const { lineupData } = props;
  return (
    <section id="lineup">
      <ul>
        {lineupData.map((artist) => {
          return <li>{artist}</li>;
        })}
      </ul>
    </section>
  );
};

export default Lineup;

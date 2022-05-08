import Footer from "../Footer";
import poster from "../../assets/lineupPoster.jpeg";
import lineupTitle from "../../assets/lineupTitle.svg";

const LineupPage = (props) => {
  return (
    <article id="lineupPage">
      <section>
        <div className="pageHeader">
          <h1>
            <img src={lineupTitle} alt="Lineup" />
          </h1>
        </div>
        <div id="lineupPoster">
          <img src={poster} alt={"poster"} />
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default LineupPage;

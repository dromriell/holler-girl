import Footer from "../Footer";
import poster from "../../assets/lineupPoster.jpg";

const LineupPage = (props) => {
  return (
    <article id="lineupPage">
      <section>
        <div className="pageHeader">
          <h1>Lineup</h1>
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

import Footer from "../Footer";
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
          <img
            src="https://res.cloudinary.com/dnmokvouu/image/upload/v1652038645/hollergirl2022/lineupPoster_zmb0u1.webp"
            alt={"poster"}
          />
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default LineupPage;

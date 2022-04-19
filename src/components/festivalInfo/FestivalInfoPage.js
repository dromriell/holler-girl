import Footer from "../Footer";

const FestivalInfoPage = (props) => {
  return (
    <article id="FestivalInfoPage">
      <section>
        <div id="FestivalInfoHeader" className="pageHeader">
          <div id="FestivalInfoHeaderBackground">
            <div id="FestivalInfoHeaderBackgroundImg"></div>
          </div>
          <h1>Festival Info</h1>
        </div>
      </section>
      <section>
        <div id="FestivalInfo">
          <h2>Food/Drink</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo. Mi proin sed libero enim.
          </p>
        </div>
        <div id="FestivalInfo">
          <h2>Camping at HollerGirl</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo. Mi proin sed libero enim.
          </p>
        </div>
        <div id="FestivalInfo">
          <h2>Tickets</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo. Mi proin sed libero enim.
          </p>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default FestivalInfoPage;

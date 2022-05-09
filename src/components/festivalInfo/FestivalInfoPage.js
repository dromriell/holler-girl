import Footer from "../Footer";
import festivalInfoTitle from "../../assets/infoPage/festivalInfoTitle.svg";

const FestivalInfoPage = (props) => {
  return (
    <article id="FestivalInfoPage">
      <section>
        <div id="FestivalInfoHeader" className="pageHeader">
          <div id="FestivalInfoHeaderBackground">
            <div id="FestivalInfoHeaderBackgroundImg"></div>
          </div>
          <img src={festivalInfoTitle} alt="Festival Info" />
        </div>
      </section>
      <section>
        <div className="festivalInfo">
          <h2>Essentials</h2>
          <h3>Food & Drink</h3>
          <p>
            Water will be provided on site, food and provisions will not so
            please plan accordingly. Glass bottles are prohibited.
          </p>
          <h3>Pets</h3>
          <p>
            As much as we love our fur babies, we are unfortunately unable to
            accomodate any pets.
          </p>
        </div>
        <div className="festivalInfo">
          <h2>Camping</h2>
          <h3>General Info</h3>
          <p>
            All general admission tickets for our festival includes on-site
            camping. There is a limit of 7 people to one site, but there will be
            plenty of space to spread out onto more than one site.
          </p>
          <h3>Tent Camping</h3>
          <p>
            Parking will be available near the venue, just walk your gear and
            coolers onto the fesival grounds.
          </p>
          <h3>Car Camping</h3>
          <p>
            Vehicles must be under 45' and can include travel trailers, fifth
            wheels, toy haulers, pop-up campers, campervans, and cars. No
            electric, water, or sewage hookups, but generators are allowed.
          </p>
          <h3>RV Camping</h3>
          <p>
            Vehicles must be under 50' and can include class A, class B RVs, or
            class C RVs along with any vehicle approved for use in car camping.
            Electric and water hookups are available. Please note that RV
            camping is limited and requires an additional RV pass seperate from
            general admission.
          </p>
        </div>
        <div className="festivalInfo">
          <h2>Arrival</h2>
          <p>
            <span>
              RV arrivals, please come through the front gate to check in. You
              will then be directed to your reserved spot. Car campers, please
              check in at the front gate, then you will be directed to the car
              camping spots.
            </span>
            <span>
              All General Admission / Tent Campers, please check in at the front
              gate, you will then be directed to the parking area across from
              the venue. Please be aware that you might have to carry your
              things back into the venue.
            </span>
          </p>
        </div>
        <div className="festivalInfo">
          <h2>Questions?</h2>
          <p>
            Reach out to us at{" "}
            <a href="mailTo: info@hollergirl.live">info@hollergirl.live</a> for
            questions or clarification.
          </p>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default FestivalInfoPage;

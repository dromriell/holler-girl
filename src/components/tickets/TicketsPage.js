import { ticketData } from "../../common/siteData";
import Footer from "../Footer";
import TicketList from "./TicketList";
import ticketsTitle from "../../assets/ticketsTitle.svg";

const TicketsPage = () => {
  return (
    <article id="ticketsPage">
      <section>
        <div id="ticketsHeader" className="pageHeader">
          <h1>
            <img src={ticketsTitle} alt="Tickets" />
          </h1>
        </div>
        <TicketList ticketData={ticketData} />
        <div id="ticketButton">
          <button className="ctaButton">
            <a href="https://www.tickettailor.com/events/hollergirl/695993#">
              <p>BUY TICKETS</p>
            </a>
          </button>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default TicketsPage;

import { ticketData } from "../../common/siteData";
import Footer from "../Footer";
import TicketList from "./TicketList";

const TicketsPage = (props) => {
  return (
    <article id="ticketsPage">
      <section>
        <div id="ticketsHeader" className="pageHeader">
          <h1>Tickets</h1>
        </div>
        <TicketList ticketData={ticketData} />
        <div id="ticketInstructions">
          <p>
            To order tickets, follow the Venmo link and add your name and
            requested pass in the message. If purchasing multiple passes, please
            include additional names as well.
          </p>
        </div>
      </section>
      <Footer />
    </article>
  );
};

export default TicketsPage;

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

export default TicketsPage;

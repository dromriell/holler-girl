const TicketOption = (props) => {
  const { name, price, details } = props;
  return (
    <li className="ticketOption">
      <div className="pricingInfo">
        <h2>{name}</h2>
        <h3>${price}</h3>
      </div>
      <ul>
        {details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </li>
  );
};

const TicketList = (props) => {
  const { ticketData } = props;
  return (
    <ul id="ticketOptionsList">
      {ticketData.map((ticket) => {
        const ticketKey = `ticketOption${ticket.price}`;
        return <TicketOption {...ticket} key={ticketKey} />;
      })}
    </ul>
  );
};

export default TicketList;

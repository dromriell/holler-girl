const TicketOption = (props) => {
  const { name, price, details, idx } = props;
  return (
    <li className="ticketOption" key={`ticket-option-${idx}`}>
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
      {ticketData.map((ticket, idx) => {
        return <TicketOption {...ticket} idx={idx} />;
      })}
    </ul>
  );
};

export { TicketList as default, TicketOption };

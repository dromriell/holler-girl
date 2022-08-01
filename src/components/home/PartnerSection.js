import { partnersArray } from "../../common/siteData";

const Partner = (props) => {
  const { logoSrc, link } = props;
  return (
    <li
      className="partnerContainer"
      style={{ backgroundImage: `url('${logoSrc}')` }}
    >
      <a href={link}>
        <div></div>
      </a>
    </li>
  );
};

const PartnerSection = (props) => {
  return (
    <section id="partnersSection">
      <h3>Special Thanks to our Partners</h3>
      <ul className="partnersList">
        {partnersArray.map((partnerInfo) => {
          return <Partner {...partnerInfo} />;
        })}
      </ul>
    </section>
  );
};

export default PartnerSection;

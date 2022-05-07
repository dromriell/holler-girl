import partnersTitle from "../../assets/partnersText.svg";
import { partnersArray } from "../../common/siteData";

const Partner = (props) => {
  const { name, logoSrc } = props;
  return (
    <li className="partnerContainer">
      <img src={logoSrc} alt={`${name}-logo`} />
    </li>
  );
};

const PartnerSection = (props) => {
  return (
    <section id="partnersSection">
      <img src={partnersTitle} alt="Partners" />
      <ul className="partnersList">
        {partnersArray.map((partnerInfo) => {
          return <Partner {...partnerInfo} />;
        })}
      </ul>
    </section>
  );
};

export default PartnerSection;

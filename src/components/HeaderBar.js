import potpLogo from "../assets/potplogo.png";
import hollerGirlLogo from "../assets/HollerGirl.png";
import menuIcon from "../assets/menuIcon.png";

const HeaderBar = (props) => {
  const { handleMenuToggle } = props;
  return (
    <header id="mainHeader">
      <div className="headerLeftIcon">
        <img src={potpLogo} alt={"potpLogo"} />
      </div>
      <div>
        <img src={hollerGirlLogo} alt={"hollerGirlLogo"} />
      </div>
      <div className="menuButton" onClick={handleMenuToggle}>
        <img src={menuIcon} alt={"menuIcon"} />
      </div>
    </header>
  );
};

export default HeaderBar;

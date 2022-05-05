import hollerGirlLogo from "../assets/HollerGirl.webp";
import menuIcon from "../assets/menuIcon.png";

const HeaderBar = (props) => {
  const { handleMenuToggle } = props;
  return (
    <header id="mainHeader">
      <div className="headerLeftIcon"></div>
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

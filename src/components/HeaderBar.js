import logoText from "../assets/logoText.svg";
import menuIcon from "../assets/menuIcon.svg";

const HeaderBar = (props) => {
  const { handleMenuToggle } = props;
  return (
    <header id="mainHeader">
      <div className="headerIcon"></div>
      <div className="headerLogo">
        <img src={logoText} alt={"hollerGirlLogo"} />
      </div>
      <div className="headerIcon menuButton" onClick={handleMenuToggle}>
        <img src={menuIcon} alt={"menuIcon"} />
      </div>
    </header>
  );
};

export default HeaderBar;

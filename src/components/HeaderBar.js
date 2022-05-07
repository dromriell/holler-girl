import logoText from "../assets/logoText.svg";
import menuIcon from "../assets/menuIcon.png";

const HeaderBar = (props) => {
  const { handleMenuToggle } = props;
  return (
    <header id="mainHeader">
      <div className="headerLeftIcon"></div>
      <div>
        <img src={logoText} alt={"hollerGirlLogo"} />
      </div>
      <div className="menuButton" onClick={handleMenuToggle}>
        <img src={menuIcon} alt={"menuIcon"} />
      </div>
    </header>
  );
};

export default HeaderBar;

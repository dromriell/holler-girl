import logoText from "../assets/logoText.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <img src={logoText} alt={"hollerGirlLogo"} />
      </div>
      <div className="linkRow">
        <a
          href="https://www.facebook.com/HollerGirlmusic"
          aria-label="Facebook"
        >
          <FacebookLogo />
        </a>
        <a href="mailto: info@hollergirl.live" aria-label="Email">
          <EmailLogo />
        </a>
      </div>
      <p>
        <span>© HollerGirl Music Festival 2022</span>
        <span>Logo By Sarah Fightmaster</span>
        <span>Built By Devon Romriell</span>
      </p>
    </footer>
  );
};

export default Footer;

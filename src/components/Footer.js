import hollerGirlLogo from "../assets/HollerGirl.webp";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram.svg";

const Footer = (props) => {
  return (
    <footer id="footer">
      <div>
        <img src={hollerGirlLogo} alt={"hollerGirlLogo"} />
      </div>
      <div className="linkRow">
        <a href="https://www.facebook.com/HollerGirlmusic">
          <FacebookLogo />
        </a>
        <a href="#">
          <TwitterLogo />
        </a>
        <a href="#">
          <EmailLogo />
        </a>
        <a href="#">
          <YoutubeLogo />
        </a>
        <a href="#">
          <InstagramLogo />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

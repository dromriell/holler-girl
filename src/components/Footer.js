import logoText from "../assets/logoText.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram.svg";

const Footer = (props) => {
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
        <a href="#" aria-label="Twitter">
          <TwitterLogo />
        </a>
        <a href="#" aria-label="Email">
          <EmailLogo />
        </a>
        <a href="#" aria-label="Youtube">
          <YoutubeLogo />
        </a>
        <a href="#" aria-label="Instagram">
          <InstagramLogo />
        </a>
      </div>
      <p>
        © HollerGirl Music Festival 2022 - Logo By Sarah Fightmaster - Built By
        Devon Romriell
      </p>
    </footer>
  );
};

export default Footer;

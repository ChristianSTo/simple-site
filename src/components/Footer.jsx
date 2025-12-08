import "../blocks/footer.css";
import logo from "../assets/images/ouinvest-footer-logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          className="footer__image"
          src={logo}
          alt="OuInvest Rainbow Logo"
        ></img>
      </div>
    </footer>
  );
}

export default Footer;

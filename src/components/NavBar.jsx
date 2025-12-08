import { routes } from "react";
import { NavLink } from "react-router-dom";
import "../blocks/navBar.css";
import icon from "../assets/images/OuInvestIcon.png";
function NavBar() {
  return (
    <section className="nav__bar">
      <NavLink to="/#" className="nav__icon">
        <img className="nav__logo" src={icon} alt="OuInvest Logo"></img>
      </NavLink>
      <div className="nav__buttons">
        <NavLink to="/#features" className="nav__button">
          Features
        </NavLink>
        <NavLink to="/ourstory" className="nav__button">
          Our Story
        </NavLink>
        <NavLink to="/community" className="nav__button">
          Community
        </NavLink>
        <NavLink to="/blog" className="nav__button">
          Blog
        </NavLink>
      </div>
    </section>
  );
}

export default NavBar;

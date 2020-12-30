import React from "react";
import { push as Wrapper } from "react-burger-menu";
import Logo from "../Logo";
import MenuIcon from "../../assets/menu.svg";
import Instagram from "../../assets/instagram.svg";
import Mail from "../../assets/mail.svg";

const Menu = () => (
  <Wrapper
    customBurgerIcon={<MenuIcon />}
    disableAutoFocus
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
  >
    <a id="home" href="/">
      Home <span>&#8594;</span>
    </a>
    <a id="landing" href="/landing">
      Landing Page <span>&#8594;</span>
    </a>
    <a id="catalogue" href="/">
      Catalogue <span>&#8594;</span>
    </a>
    <a id="boards" href="/">
      Boards <span>&#8594;</span>
    </a>
    <a id="apparel" href="/">
      Apparel <span>&#8594;</span>
    </a>
    <div className="Menu__logo">
      <Logo />
    </div>
    <ul className="Menu__social__buttons">
      <li>
        <a
          href="https://instagram.com/fortress_collage/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram /> @instagram
        </a>
      </li>
      <li>
        <a href="mailto:fortresscollage@gmail.com">
          <Mail /> @email
        </a>
      </li>
    </ul>
    {/* <a onClick={this.showSettings} className="menu-item--small" href="">
      Settings
    </a> */}
  </Wrapper>
);

export default Menu;

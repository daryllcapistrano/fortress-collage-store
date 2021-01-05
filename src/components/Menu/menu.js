import React from "react";
import { slide as Wrapper } from "react-burger-menu";
// import Logo from "../Logo";
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
    <a href="/">
      Home <span>&#8594;</span>
    </a>
    <a href="/landing">
      Landing Page <span>&#8594;</span>
    </a>
    <a href="/">
      Catalogue <span>&#8594;</span>
    </a>
    <a href="/">
      Boards <span>&#8594;</span>
    </a>
    <a href="/">
      Apparel <span>&#8594;</span>
    </a>
    <div>
      <a
        href="https://instagram.com/fortress_collage/"
        target="_blank"
        rel="noreferrer"
      >
        @fortress_collage
      </a>
    </div>
    <div>
      <a href="mailto:fortresscollage@gmail.com">fortresscollage@gmail.com</a>
    </div>
    <div className="snipcart-checkout snipcart-summary flex__container">
      Cart Total: <div className="snipcart-total-items"></div>
    </div>
  </Wrapper>
);

export default Menu;

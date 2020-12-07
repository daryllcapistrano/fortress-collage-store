import React from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "../../../assets/menu.svg";
import Logo from "../../Logo/logo";
// import LeftChevron from "../../../assets/chevron-svgrepo-com.svg";
// customBurgerIcon={<MenuIcon />}
// customCrossIcon={<LeftChevron />}
const BurgerMenu = () => (
  <Menu customBurgerIcon={<MenuIcon />}>
    <div className="Menu__logo">
      <Logo />
    </div>
    <a id="home" href="/">
      Home <span>&#8594;</span>
    </a>
    <a id="new" href="/">
      New <span>&#8594;</span>
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
    {/* <a onClick={this.showSettings} className="menu-item--small" href="">
      Settings
    </a> */}
  </Menu>
);

export default BurgerMenu;

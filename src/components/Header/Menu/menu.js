import React from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => (
  <Menu>
    <a id="home" className="Menu__item" href="/">
      Home
    </a>
    <a id="new" className="Menu__item" href="/">
      New
    </a>
    <a id="catalogue" className="Menu__item" href="/">
      Catalogue
    </a>
    <a id="boards" className="Menu__item" href="/">
      Boards
    </a>
    <a id="apparel" className="Menu__item" href="/">
      Apparel
    </a>
    {/* <a onClick={this.showSettings} className="menu-item--small" href="">
      Settings
    </a> */}
  </Menu>
);

export default BurgerMenu;

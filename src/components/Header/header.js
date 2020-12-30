import React from "react";
import Link from "gatsby-link";
import Menu from "../Menu";
import Logo from "../Logo/logo";

import CartIcon from "../../assets/bag.svg";

const Header = ({ site }) => (
  <header className="Header">
    <Menu />
    <button className="Header__cart snipcart-checkout snipcart-summary">
      <a href="/" className="Header__cart__link">
        <div className="Header__cart__total snipcart-total-items"></div>
        <CartIcon />
      </a>
    </button>
    <div className="Header__logo" data-text={site.siteMetadata.siteName}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </header>
);

export default Header;

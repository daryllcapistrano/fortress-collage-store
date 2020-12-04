import React from "react";
import Link from "gatsby-link";
import Logo from "../Logo/logo";

import Cart from "../../assets/cart.svg";

const Header = ({ site }) => (
  <header className="Header">
    <div>
      <h1 className="Header__logo" data-text={site.siteMetadata.siteName}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
    <div>
      <button className="Header__cart snipcart-checkout snipcart-summary">
        <a href="/" className="Header__cart__link">
          <div className="Header__cart__icon">
            <Cart />
          </div>
          <div className="Header__cart__total snipcart-total-items"></div>
        </a>
      </button>
    </div>
  </header>
);

export default Header;

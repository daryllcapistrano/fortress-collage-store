import React from "react";
import Link from "gatsby-link";
import Logo from "../Logo/logo";

import Cart from "../../assets/cart.svg";

const Header = ({ site }) => (
  <div className="Wrap">
    <div className="Header">
      <div className="Header__body">
        <h1 className="Header__title">
          <Link data-text={site.siteMetadata.siteName} to="/">
            <Logo />
          </Link>
        </h1>
        <div className="Header__summary__line snipcart-summary">
          {/* Number of items: <span className="snipcart-total-items"></span> */}
        </div>
        <div className="Header__summary__line snipcart-summary">
          {/* Total price: <span className="snipcart-total-price"></span> */}
        </div>
      </div>
      <div className="Header__summary snipcart-checkout snipcart-summary">
        <a href="/" className="Header__summary__cart">
          <span className="Header__summary__logo">
            <Cart />
          </span>{" "}
          <span className="snipcart-total-items"></span>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
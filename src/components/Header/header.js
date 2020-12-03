import React from "react";
import Link from "gatsby-link";
import Logo from "../Logo/logo";

import Cart from "../../assets/cart.svg";

const Header = ({ site }) => (
  <header className="Header">
    {/* <div className="Header__body"> */}
    <div>
      <h1 className="Header__logo" data-text={site.siteMetadata.siteName}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
    {/* <div
      style={{
        textAlign: `center`,
        textTransform: `uppercase`,
        fontWeight: `bold`,
        marginTop: `1em`,
      }}
    >
      fortress collage
    </div> */}
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
    {/* </div> */}
    {/* <div className="Header__summary__line snipcart-summary">
          Number of items: <span className="snipcart-total-items"></span>
        </div>
        <div className="Header__summary__line snipcart-summary">
          Total price: <span className="snipcart-total-price"></span>
        </div> */}
    {/* <div className="Header__summary snipcart-checkout snipcart-summary">
        <a href="/" className="Header__summary__cart">
          <span className="Header__summary__logo">
            <Cart />
          </span>{" "}
          <span className="snipcart-total-items"></span>
        </a>
      </div> */}
  </header>
);

export default Header;

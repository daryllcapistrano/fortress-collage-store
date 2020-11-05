import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import "../style/index.scss";

import Instagram from "../assets/instagram.svg";
import Mail from "../assets/mail.svg";
import Cart from "../assets/cart.svg";

import Logo from "../components/Logo/logo";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Fortress Skate Company" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap">
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                <Logo />
              </Link>
            </h1>
            {/* <div className="Header__summary__line snipcart-summary">
              Number of items: <span className="snipcart-total-items"></span>
            </div> */}
            {/* <div className="Header__summary__line snipcart-summary">
              Total price: <span className="snipcart-total-price"></span>
            </div> */}
            <div className="Header__summary snipcart-checkout snipcart-summary">
              <a href="/" className="Header__summary__cart">
                <Cart /> &#40;<span className="snipcart-total-items"></span>
                &#41;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap">{children}</div>
      <div className="Wrap">
        <div className="Footer">
          <div className="Social__buttons">
            <a
              href="https://instagram.com/fortress_collage/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a href="mailto:fortresscollage@gmail.com">
              <Mail />
            </a>
          </div>

          {/* This website is just an example project to demonstrate how you can
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>. */}
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
